import { IdFrontend, StatusFrontend, BasenameFrontend, BundleJSProps, UniversalRoute, MicroFronts } from 'flexiness';
declare type RenderRoute = () => void;
export declare class MicroFrontendStore {
    allMicros: MicroFronts;
    currentMicroId: IdFrontend;
    status: StatusFrontend;
    basename: BasenameFrontend;
    bundleJSPending: BundleJSProps[];
    microRoutes: UniversalRoute[];
    constructor(allMicros: MicroFronts, currentMicroId: IdFrontend, status: StatusFrontend, basename: BasenameFrontend, bundleJSPending: BundleJSProps[], microRoutes: UniversalRoute[]);
    microFront: (id: IdFrontend) => import("flexiness").MicroFront | undefined;
    get currentMicroFront(): import("flexiness").MicroFront | undefined;
    setId: (newId: IdFrontend) => void;
    setStatus: (newStatus: StatusFrontend) => void;
    setBasename: (newBasename: BasenameFrontend) => void;
    addFrontendBundleJS: (newScript: BundleJSProps) => void;
    addRoutes: (newRoutes: UniversalRoute[]) => void;
    updateAllMicros: () => void;
    renderRoute: RenderRoute;
}
export declare function getMFStore(): MicroFrontendStore;
export {};
