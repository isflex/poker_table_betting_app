/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { parseRemoteUrl } from './parse-remote-url.js';
/**
 * Generate randomly generated nonce (base64) for Content Security Policy.
 *
 * @returns [nonce: string] - CSP nonce is the first array element.
 */
const generateNonce = () => {
    // generate random nonce converted to base64. Must be different on every HTTP page load
    const hash = crypto.createHash('sha256');
    hash.update(uuidv4());
    const nonce = hash.digest('base64');
    return [nonce];
};
export function setFlexCSPNonce(nonce) {
    var _a;
    const FlexCSPNonce = nonce;
    globalThis.Flexiness = {
        // @ts-expect-error
        ...globalThis === null || globalThis === void 0 ? void 0 : globalThis.Flexiness,
        domainApp: { ...(_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.Flexiness) === null || _a === void 0 ? void 0 : _a.domainApp, FlexCSPNonce }
    };
}
export function generateFlexCSPNonce() {
    const FlexCSPNonce = generateNonce()[0];
    setFlexCSPNonce(FlexCSPNonce);
    return FlexCSPNonce;
}
export function getFlexCSPNonce() {
    var _a, _b;
    return (_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.Flexiness) === null || _a === void 0 ? void 0 : _a.domainApp) === null || _b === void 0 ? void 0 : _b.FlexCSPNonce;
}
export async function fetchFlexCSPNonce(apiUrl) {
    if (getFlexCSPNonce()) {
        return getFlexCSPNonce();
    }
    else {
        // https://dmitripavlutin.com/javascript-fetch-async-await/
        const response = await fetch(`${parseRemoteUrl(`${apiUrl}/api/nonce`)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Origin: `${window.location.origin}`,
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
        setFlexCSPNonce(data.nonce);
        return getFlexCSPNonce();
    }
}
//# sourceMappingURL=get-csp-nonce.js.map