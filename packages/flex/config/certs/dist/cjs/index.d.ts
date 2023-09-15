import { PathLike } from 'fs';
declare const optionsHTTPSMkCert: () => {
    key: string;
    cert: string;
};
declare const optionsHTTPSMkCertPathsRelative: (dir: PathLike) => {
    key: string;
    cert: string;
};
export { optionsHTTPSMkCert as optionsHTTPS, optionsHTTPSMkCertPathsRelative as optionsHTTPSPathsRelative };
