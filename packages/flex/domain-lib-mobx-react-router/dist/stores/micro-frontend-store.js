var _a, _b;
/* eslint-disable no-console */
import { createElement } from 'react';
import ReactDOM from 'react-dom';
import log from 'loglevel';
import UniversalRouter from 'universal-router';
import { browserHistory } from '../routing/browser-history';
import { getRouter } from '../routing/router';
import { toJS, makeAutoObservable, observable, action,
// computed
 } from 'mobx';
export class MicroFrontendStore {
    constructor(allMicros, currentMicroId, status, basename, bundleJSPending, microRoutes) {
        this.allMicros = allMicros;
        this.currentMicroId = currentMicroId;
        this.status = status;
        this.basename = basename;
        this.bundleJSPending = bundleJSPending;
        this.microRoutes = microRoutes;
        this.microFront = (id) => {
            return this.allMicros.get(id);
        };
        // Maybe should use location.hostname as key for Map
        // https://stackoverflow.com/questions/47135661/how-can-i-get-a-key-in-a-javascript-map-by-its-value/47136047#47136047
        this.setId = (newId) => {
            this.currentMicroId = newId;
            // this.allMicros.set(newId, {
            //   status: null,
            //   basename: '/',
            //   bundleJSPending: [],
            //   microRoutes: [],
            // })
        };
        this.setStatus = (newStatus) => {
            this.status = newStatus;
            this.updateAllMicros();
        };
        this.setBasename = (newBasename) => {
            this.basename = newBasename;
            if (typeof newBasename === 'string')
                browserHistory.replace(newBasename);
            this.updateAllMicros();
        };
        this.addFrontendBundleJS = (newScript) => {
            if (!this.bundleJSPending.filter((registeredScripts) => registeredScripts.path === newScript.path).length) {
                this.bundleJSPending.push(newScript);
            }
            // TODO : more concise w/ destructuring ?
            // this.bundleJSPending = [{ ...this.bundleJSPending, ...newScript }];
            this.updateAllMicros();
        };
        this.addRoutes = (newRoutes) => {
            this.microRoutes = [...this.microRoutes, ...newRoutes];
            this.updateAllMicros();
        };
        /*
        ///// HELPER FUNCTIONS /////
        */
        this.updateAllMicros = () => {
            var _a, _b;
            const flexRouter = getRouter();
            const { history } = flexRouter;
            if (this.allMicros.get(this.currentMicroId)) {
                this.allMicros.set(this.currentMicroId, {
                    microId: this.currentMicroId,
                    port: ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.port) || null,
                    key: history.location.key,
                    pathname: history.location.pathname,
                    status: this.status,
                    basename: this.basename,
                    bundleJSPending: this.bundleJSPending,
                    microRoutes: this.microRoutes,
                });
            }
            else {
                this.allMicros.set(this.currentMicroId, {
                    microId: this.currentMicroId,
                    port: ((_b = window === null || window === void 0 ? void 0 : window.location) === null || _b === void 0 ? void 0 : _b.port) || null,
                    key: history.location.key,
                    pathname: history.location.pathname,
                    status: null,
                    basename: '/',
                    bundleJSPending: [],
                    microRoutes: [],
                });
            }
            // console.log(toJS(this.allMicros))
        };
        this.renderRoute = async () => {
            const root = document.getElementById('root');
            const routes = toJS(this.microRoutes);
            const universalRouter = new UniversalRouter(routes, { context: { MFStore: getMFStore() } });
            const flexRouter = getRouter();
            const { location, history } = flexRouter;
            try {
                const page = await universalRouter.resolve({
                    pathname: location.pathname
                });
                if (page.redirect) {
                    return history.push({ pathname: page.redirect, search: '' });
                }
                // eslint-disable-next-line react/no-render-return-value
                return ReactDOM.hydrate(page, root);
            }
            catch (err) {
                log.error('Error UniversalRouter : ', err);
                // eslint-disable-next-line react/no-render-return-value
                return ReactDOM.render(createElement('p', {}, 'Wrong way'), root);
            }
        };
        makeAutoObservable(this, {
            allMicros: observable,
            currentMicroId: observable,
            status: observable,
            basename: observable,
            bundleJSPending: observable,
            microRoutes: observable,
            // microFront: computed,
            setId: action,
            setStatus: action,
            addFrontendBundleJS: action,
            renderRoute: action
        });
        this.allMicros = allMicros;
        this.currentMicroId = currentMicroId;
        this.status = status;
        this.basename = basename;
        this.bundleJSPending = bundleJSPending;
        this.microRoutes = microRoutes;
    }
    get currentMicroFront() {
        return this.allMicros.get(this.currentMicroId);
    }
}
let MFStore = (_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.Flexiness) === null || _a === void 0 ? void 0 : _a.domainApp) === null || _b === void 0 ? void 0 : _b.MFStore;
export function getMFStore() {
    var _a;
    if (!MFStore) {
        MFStore = new MicroFrontendStore(
        // allMicros
        new Map(), 
        // currentMicroId
        '', 
        // status
        null, 
        // basename
        '/', 
        // bundleJSPending
        [], 
        // microRoutes
        []);
        globalThis.Flexiness = {
            // @ts-expect-error
            ...globalThis === null || globalThis === void 0 ? void 0 : globalThis.Flexiness,
            domainApp: { ...(_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.Flexiness) === null || _a === void 0 ? void 0 : _a.domainApp, MFStore }
        };
    }
    return MFStore;
}
//# sourceMappingURL=micro-frontend-store.js.map