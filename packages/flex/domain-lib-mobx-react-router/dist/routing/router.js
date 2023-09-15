var _a, _b;
import { RouterStore } from '@superwf/mobx-react-router';
import { browserHistory } from './browser-history';
// const globalThis: FlexGlobalThis = {}
// export const Router = new RouterStore(browserHistory);
export class FlexRouterStore extends RouterStore {
}
let router = (_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.Flexiness) === null || _a === void 0 ? void 0 : _a.domainApp) === null || _b === void 0 ? void 0 : _b.router;
export function getRouter() {
    var _a;
    if (!router)
        router = new FlexRouterStore(browserHistory);
    globalThis.Flexiness = {
        // @ts-expect-error
        ...globalThis === null || globalThis === void 0 ? void 0 : globalThis.Flexiness,
        domainApp: { ...(_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.Flexiness) === null || _a === void 0 ? void 0 : _a.domainApp, router }
    };
    return router;
}
//# sourceMappingURL=router.js.map