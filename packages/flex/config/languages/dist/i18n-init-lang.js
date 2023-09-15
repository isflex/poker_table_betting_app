const { parseRemoteUrl } = await import('@flexiness/domain-utils');
let logs;
import accepts from 'accepts';
import { locales, defaultLocale } from './i18n-constants.js';
const isServer = typeof window === 'undefined';
const parseRequest = (request) => {
    if (request) {
        const _accepts = accepts(request).languages();
        logs.push(`flexiness/languages serverside : accepts -> ${_accepts}`);
        const lang = request.acceptsLanguages(locales);
        if (lang) {
            logs.push(`flexiness/languages serverside : The first accepted of [${locales}] is -> ${lang}`);
            return lang;
        }
        else {
            logs.push(`flexiness/languages serverside : None of [${locales}] is accepted`);
            return defaultLocale;
        }
    }
    return defaultLocale;
};
const fetchLngApi = async () => {
    // const _url = new URL(`${process.env.FLEX_GATEWAY_HOST}/api/initLng`)
    // const _parsedHref = _url.hostname === window.location.hostname
    //   ? _url.href : `${_url.protocol}//127.0.0.1:${_url.port || 80}${_url.pathname}`
    // https://dmitripavlutin.com/javascript-fetch-async-await/
    // const response = await fetch(`${_parsedHref}`, {
    const response = await fetch(`${parseRemoteUrl(`${process.env.FLEX_GATEWAY_HOST}/api/initLng`)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Origin: `${window.location.origin}`,
            // Origin: `${_url.origin}`,
        },
        mode: 'cors',
        // credentials: 'include',
        cache: 'default',
    });
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        console.log('////////////////////////////////////////////////////////////');
        console.log('// ENSURE GATEWAY IS RUNNING !!');
        console.log('////////////////////////////////////////////////////////////');
        throw new Error(message);
    }
    const data = await response.json();
    return data.initLng;
};
const parseWindow = async () => {
    return await fetchLngApi() || new URLSearchParams(window?.location?.search).get('lang') || window.navigator.language || defaultLocale;
};
const debugLog = (logs) => {
    if (process.env.DEBUG !== 'true')
        return;
    console.log('///////////////////////////////////////////////////////////////////');
    logs.map((log) => {
        console.log(`${log}`);
    });
    console.log('///////////////////////////////////////////////////////////////////');
};
const initLang = async (request) => {
    logs = [];
    const initLng = isServer
        ? parseRequest(request)
        : await parseWindow();
    logs.push(`flexiness/languages init-lang ${initLng}`);
    globalThis.Flexiness = {
        // @ts-expect-error
        ...globalThis?.Flexiness,
        domainApp: { ...globalThis?.Flexiness?.domainApp, FlexLanguage: initLng }
    };
    debugLog(logs);
    return initLng;
};
export { initLang };
//# sourceMappingURL=i18n-init-lang.js.map