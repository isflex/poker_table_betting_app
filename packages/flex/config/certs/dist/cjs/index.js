"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsHTTPSPathsRelative = exports.optionsHTTPS = void 0;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const fs_1 = tslib_1.__importDefault(require("fs"));
// const optionsHTTPSDevCert = () => {
//   return {
//     key: fs.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`)
//       ? fs.readFileSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`, 'utf8')
//       : fs.readFileSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/devcert/devcert.key`, 'utf8'),
//     cert: fs.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`)
//       ? fs.readFileSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`, 'utf8')
//       : fs.readFileSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/devcert/devcert.cert`, 'utf8'),
//   }
// }
const optionsHTTPSMkCert = () => {
    return {
        key: fs_1.default.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`)
            ? fs_1.default.readFileSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`, 'utf8')
            : fs_1.default.readFileSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/mkcert/privkey.pem`, 'utf8'),
        cert: fs_1.default.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`)
            ? fs_1.default.readFileSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`, 'utf8')
            : fs_1.default.readFileSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/mkcert/fullchain.pem`, 'utf8'),
    };
};
exports.optionsHTTPS = optionsHTTPSMkCert;
const optionsHTTPSMkCertPathsRelative = (dir) => {
    return {
        key: fs_1.default.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`)
            ? path.relative(`${dir}`, `/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`)
            : path.relative(`${dir}`, `${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/mkcert/privkey.pem`),
        cert: fs_1.default.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`)
            ? path.relative(`${dir}`, `/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`)
            : path.relative(`${dir}`, `${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/mkcert/fullchain.pem`),
    };
};
exports.optionsHTTPSPathsRelative = optionsHTTPSMkCertPathsRelative;
// import * as fs from 'fs/promises'
// export const optionsHTTPS = async () => {
//   return {
//     key: await fs.access(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`)
//       ? await fs.readFile(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`, 'utf8')
//       : await fs.readFile(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/devcert.key`, 'utf8'),
//     cert: await fs.access(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`)
//       ? await fs.readFile(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`, 'utf8')
//       : await fs.readFile(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/devcert.cert`, 'utf8'),
//   }
// }
//# sourceMappingURL=index.js.map