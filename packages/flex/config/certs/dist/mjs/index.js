/* eslint-disable @typescript-eslint/no-unused-vars */
import * as path from 'path';
import fs from 'fs';
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
        key: fs.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`)
            ? fs.readFileSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`, 'utf8')
            : fs.readFileSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/mkcert/privkey.pem`, 'utf8'),
        cert: fs.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`)
            ? fs.readFileSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`, 'utf8')
            : fs.readFileSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/mkcert/fullchain.pem`, 'utf8'),
    };
};
const optionsHTTPSMkCertPathsRelative = (dir) => {
    return {
        key: fs.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`)
            ? path.relative(`${dir}`, `/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/privkey.pem`)
            : path.relative(`${dir}`, `${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/mkcert/privkey.pem`),
        cert: fs.existsSync(`/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`)
            ? path.relative(`${dir}`, `/etc/letsencrypt/live/${process.env.FLEX_DOMAIN_NAME}/fullchain.pem`)
            : path.relative(`${dir}`, `${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/mkcert/fullchain.pem`),
    };
};
export { optionsHTTPSMkCert as optionsHTTPS, optionsHTTPSMkCertPathsRelative as optionsHTTPSPathsRelative };
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