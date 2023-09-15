"use strict";
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const devcert_1 = tslib_1.__importDefault(require("devcert"));
if (!fs_1.default.existsSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}`)) {
    fs_1.default.mkdirSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}`);
}
const domains = [`${process.env.FLEX_DOMAIN_NAME}`];
devcert_1.default
    .certificateFor(domains, { getCaPath: true, skipHostsFile: true })
    .then(({ key, cert, caPath }) => {
    fs_1.default.writeFileSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/devcert.key`, key);
    fs_1.default.writeFileSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/devcert.cert`, cert);
    fs_1.default.writeFileSync(`${process.env.HOME}/certs/${process.env.FLEX_DOMAIN_NAME}/.capath`, caPath);
})
    .catch(console.error);
// https://www.techrepublic.com/article/how-to-quickly-give-users-sudo-privileges-in-linux/
// https://askubuntu.com/questions/335987/remove-sudo-privileges-from-a-user-without-deleting-the-user
// https://superuser.com/questions/1502762/how-to-create-linux-user-that-would-not-require-password-to-login-with-su
//# sourceMappingURL=generateLocalCerts.js.map