import log from 'loglevel';
import { getRouter } from './router';
import { getMFStore } from '../stores';
// https://stackoverflow.com/questions/2896626/switch-statement-for-string-matching-in-javascript/2896642
const test = (str, type) => {
    var _a, _b;
    switch (str) {
        // https://stackoverflow.com/questions/5293859/javascript-regexp-only-if-first-character-is-not-an-asterisk
        case (_a = str.match(/^[^/]/)) === null || _a === void 0 ? void 0 : _a.input:
        case (_b = str.match(/.+\/$/)) === null || _b === void 0 ? void 0 : _b.input:
            return log.error(`A properly formatted ${type} should have a leading slash, but no trailing slash`);
        default:
            break;
    }
};
export const getRoutePath = (path) => {
    test(path, 'path');
    const MFStore = getMFStore();
    const { basename } = MFStore;
    test(basename, 'basename');
    const route = basename === '/'
        ? path
        : path === '/'
            ? basename
            : `${basename}${path}`;
    return route;
};
export const useRouter = (props) => {
    const flexRouter = getRouter();
    const { history } = flexRouter;
    history.push(getRoutePath(props.path));
};
//# sourceMappingURL=use-router.js.map