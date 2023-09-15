export namespace i18nConfig {
    export { locales };
    export const defaultLocale: string;
    export const queryParameter: string;
    export const header: string;
    export const ignoreJSONStructure: boolean;
    export const localeExtension: string;
    export namespace interpolation {
        const escapeValue: boolean;
    }
    export namespace react {
        const bindI18n: string;
        const bindI18nStore: string;
        const transEmptyNodeValue: string;
        const transSupportBasicHtmlNodes: boolean;
        const transKeepBasicHtmlNodesFor: string[];
        const useSuspense: boolean;
    }
    export namespace detection {
        const order: string[];
        const lookupQuerystring: string;
    }
    export const directory: string;
    export namespace backend {
        const loadPath: string;
        const addPath: string;
    }
}
import { locales } from "./i18n-constants.js";
