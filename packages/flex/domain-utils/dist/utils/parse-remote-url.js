const parseServerProd = (url) => {
    // const parsedDomain = parseDomain(url.hostname)
    // // Gateway NextJS has no ssl for dev hmr mode
    // if (url.hostname === `local.${parsedDomain}` && url.port === '3001') return `http://local.${parsedDomain}:3001${url.pathname}`
    return url.href;
};
const parseServerCI = (url) => {
    return `${url.protocol}//127.0.0.1:${url.port || 80}${url.pathname}`;
};
export const parseRemoteUrl = (remoteUrl, remoteName) => {
    const _url = new URL(remoteUrl);
    const _parsedHref = _url.hostname === window.location.hostname
        ? parseServerProd(_url) : parseServerCI(_url);
    if (remoteName)
        window[`${remoteName}_url`] = _parsedHref.replace(/\/$|$/, '/');
    return _parsedHref;
};
// import {
//   ParseRemoteUrl,
//   Window
// } from 'flexiness'
// import psl, { ParsedDomain } from 'psl'
// declare let window: Window
// const parseServerProd = (url: URL) => {
//   const parsedDomain: ParsedDomain = psl.parse(url.hostname).domain
//   // Gateway NextJS has no ssl for dev hmr mode
//   if (url.hostname === `local.${parsedDomain}` && url.port === '3001') return `http://local.${parsedDomain}:3001${url.pathname}`
//   return url.href
// }
// const parseServerCI = (url: URL) => {
//   return `${url.protocol}//127.0.0.1:${url.port || 80}${url.pathname}`
// }
// export const parseRemoteUrl: ParseRemoteUrl = (remoteUrl, remoteName) => {
//   const _url = new URL(remoteUrl)
//   const _parsedHref = _url.hostname === window.location.hostname
//     ? parseServerProd(_url) : parseServerCI(_url)
//   if (remoteName) window[`${remoteName}_url`] = _parsedHref.replace(/\/$|$/, '/')
//   return _parsedHref
// }
// import {
//   ParseRemoteUrl,
//   Window
// } from 'flexiness'
// declare let window: Window
// export const parseRemoteUrl: ParseRemoteUrl = (remoteUrl, remoteName) => {
//   const _url = new URL(remoteUrl)
//   const _parsedHref = _url.hostname === window.location.hostname
//     ? _url.href : `${_url.protocol}//127.0.0.1:${_url.port || 80}${_url.pathname}`
//   // https://stackoverflow.com/questions/11531363/javascript-jquery-add-trailing-slash-to-url-if-not-present
//   if (remoteName) window[`${remoteName}_url`] = _parsedHref.replace(/\/$|$/, '/')
//   return _parsedHref
// }
//# sourceMappingURL=parse-remote-url.js.map