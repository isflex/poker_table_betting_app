import { getMFStore } from '../stores';
export const getLocationPath = (path) => {
    const MFStore = getMFStore();
    const { basename } = MFStore;
    const location = basename === '/'
        ? path
        : path === '/'
            ? basename
            : `${basename}${path}`;
    return location;
};
export const useLocation = (path) => {
    return getLocationPath(path);
};
//# sourceMappingURL=use-location.js.map