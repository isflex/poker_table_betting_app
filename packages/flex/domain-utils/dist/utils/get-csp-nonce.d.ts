import { Nonce } from 'flexiness';
export declare function setFlexCSPNonce(nonce: Nonce): void;
export declare function generateFlexCSPNonce(): string;
export declare function getFlexCSPNonce(): string | undefined;
export declare function fetchFlexCSPNonce(apiUrl: URL['origin']): Promise<string | undefined>;
