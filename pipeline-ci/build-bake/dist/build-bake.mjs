/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable no-console */
// __dirname is not defined in ES module scope
import * as path from 'path';
import subprocess from 'node:child_process';
import { promisify } from 'node:util';
const execPromise = promisify(subprocess.exec);
import { promises as fs } from 'fs';
// import escapeStringRegexp from 'escape-string-regexp'
// import pc from "picocolors"
import { makeAutoObservable, observable, action, autorun, set, get, toJS } from 'mobx';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
const _OSslashCPU = 'linux/amd64';
const getEnvHCL = dotenv.config({ path: path.resolve(`${process.env.PROJECT_CWD}/pipeline-ci/docker/v2/env/ci/${_OSslashCPU}/.env`), override: true });
if (getEnvHCL.error) {
    throw getEnvHCL.error;
}
const envHCL = dotenvExpand.expand(getEnvHCL).parsed;
console.log('########################################################################');
console.log('⚡️... Loading Local Env Variables ...⚡️');
console.log('########################################################################');
console.log(`env from ${process.env.FLEX_CI_DIR}`, envHCL);
console.log('FLEX_MODE', process.env.FLEX_MODE);
console.log('PROJECT_CWD', process.env.PROJECT_CWD);
console.log('FLEX_IMAGE_REPOSITORY -> ORIGINAL', process.env.FLEX_IMAGE_REPOSITORY);
class Projects {
    constructor(all, yarnWorkspacesLoopCompleted, parsingLoopItem) {
        this.all = all;
        this.yarnWorkspacesLoopCompleted = yarnWorkspacesLoopCompleted;
        this.parsingLoopItem = parsingLoopItem;
        this.byKey = (key) => {
            // console.log(key)
            return get(this.all, key);
        };
        this.increment = ((key, value) => {
            // console.log(value)
            set(this.all, key, value);
            // this.parsingLoopItem = false
        });
        this.finished = (bool) => {
            this.yarnWorkspacesLoopCompleted = bool;
        };
        this.parsing = async (bool) => {
            this.parsingLoopItem = bool;
        };
        makeAutoObservable(this, {
            all: observable,
            yarnWorkspacesLoopCompleted: observable,
            parsingLoopItem: observable,
            increment: action,
            byKey: action,
            finished: action,
            parsing: action
        });
        this.all = all;
        this.yarnWorkspacesLoopCompleted = yarnWorkspacesLoopCompleted;
        this.parsingLoopItem = parsingLoopItem;
    }
    get isFinished() {
        if (this.parsingLoopItem)
            return false;
        return this.yarnWorkspacesLoopCompleted;
        // return this.yarnWorkspacesLoopCompleted && !this.parsingLoopItem
    }
    get allSize() {
        return this.all.size;
    }
}
const projects = new Projects(new Map(), false, false);
const workerData = {
    scope: 'yarn workspaces foreach run flex-bake'
};
let _rootDir;
let _branch;
let _workDirAbs;
let _workDirRel;
let _projName;
let _contextName;
let _imageName;
let _jsonHcl;
let _targetsArray;
// const _flexOutputLoc:string = `${process.env.FLEX_OUTPUT_LOC}`
const _flexOutputLoc = `docker`;
async function setRoot() {
    _rootDir = process.env.PROJECT_CWD;
    return _rootDir;
}
const accessFile = async (path) => {
    try {
        await fs.access(path);
        return true;
    }
    catch (err) {
        // console.log(err)
        return false;
    }
};
async function cleanGeneratedFolder() {
    // const result = await execPromise(`
    //   rm -rf ${process.env.PROJECT_CWD}/${process.env.FLEX_BAKE_DIR}/generated && \
    //   rm -rf ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKERFILES_DIR}/generated && \
    //   rm -rf ${process.env.PROJECT_CWD}/${process.env.FLEX_INCLUDES_DIR}/generated && \
    //   mkdir -p ${process.env.PROJECT_CWD}/${process.env.FLEX_BAKE_DIR}/generated/ && \
    //   mkdir -p ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKERFILES_DIR}/generated/ && \
    //   mkdir -p ${process.env.PROJECT_CWD}/${process.env.FLEX_INCLUDES_DIR}/generated/
    // `)
    const result = await execPromise(`
    rm -rf ${process.env.PROJECT_CWD}/${process.env.FLEX_BAKE_DIR}/generated && \
    rm -rf ${process.env.PROJECT_CWD}/${process.env.FLEX_INCLUDES_DIR}/generated && \
    mkdir -p ${process.env.PROJECT_CWD}/${process.env.FLEX_BAKE_DIR}/generated/ && \
    mkdir -p ${process.env.PROJECT_CWD}/${process.env.FLEX_INCLUDES_DIR}/generated/
  `);
    const { stdout } = result;
    if (!stdout)
        return result;
    return stdout;
}
async function getGitBranch() {
    const result = await execPromise(`git rev-parse --abbrev-ref HEAD`);
    const { stdout } = result;
    if (!stdout)
        return result;
    _branch = stdout.trim();
    const last = new RegExp(`([^\/]+$)`);
    process.env.FLEX_IMAGE_REPOSITORY = String(process.env.FLEX_IMAGE_REPOSITORY).replace(last, `${_branch}`);
    console.log('FLEX_IMAGE_REPOSITORY -> UPDATED', process.env.FLEX_IMAGE_REPOSITORY);
    return _branch;
}
async function editEnvHCL() {
    const result = await execPromise(`
    sed -i -E 's~(FLEX_IMAGE_REPOSITORY=\")(.+)(\")~FLEX_IMAGE_REPOSITORY="${process.env.FLEX_IMAGE_REPOSITORY}"~' \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKER_DIR}/env/ci/${_OSslashCPU}/.env.hcl && \
    sed -i -E 's~(FLEX_BRANCH=\")(.+)(\")~FLEX_BRANCH="${_branch}"~' \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKER_DIR}/env/ci/${_OSslashCPU}/.env.hcl
  `);
    const { stdout } = result;
    if (!stdout)
        return result;
    return stdout;
}
async function editEnv() {
    const result = await execPromise(`
    sed -i -E 's~(FLEX_IMAGE_REPOSITORY=)(.+)~FLEX_IMAGE_REPOSITORY=${process.env.FLEX_IMAGE_REPOSITORY}~' \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKER_DIR}/env/ci/${_OSslashCPU}/.env && \
    sed -i -E 's~(FLEX_BRANCH=)(.+)~FLEX_BRANCH=${_branch}~' \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKER_DIR}/env/ci/${_OSslashCPU}/.env
  `);
    const { stdout } = result;
    if (!stdout)
        return result;
    return stdout;
}
async function getProjectName(projDirAbs) {
    const result = await execPromise(`jq '.name' ${`${projDirAbs}/package.json`}`);
    const { stdout, stderr } = result;
    _projName = stdout.trim().replace(/['"]+/g, '') || '';
    _contextName = _projName.replace(/^\@/, '').replace(/\//, '-').replace(/_/g, '-') || '';
    _imageName = _contextName.replace(/-/g, '_') || '';
    // console.log(_projName)
    // console.log(_contextName)
    // console.log(_imageName)
    projects.increment(`${_projName}`, {
        ...projects.byKey(`${_projName}`),
        projName: `${_projName}`,
        contextName: `${_contextName}`,
        imageName: `${_imageName}`
    });
    // console.log(toJS(projects.byKey(`${_projName}`)))
    return { projName: _projName, contextName: _contextName, imageName: _imageName };
}
async function makeJsonHCL(newProj) {
    // https://unix.stackexchange.com/q/676634
    // https://stackoverflow.com/a/5753719
    const tagsArray = [`${process.env.FLEX_IMAGE_REPOSITORY}:${newProj.imageName}`];
    const cacheFromArray = [`type=${_flexOutputLoc},ref=${process.env.FLEX_IMAGE_REPOSITORY}:${newProj.imageName}`];
    const outputArray = [`type=${_flexOutputLoc}`];
    const result = await execPromise(`
    contextsJson=$(jq -n \
      --arg base-env "target:base_env" \
      --arg install-deps "target:install_deps" \
      --arg build-libs "target:build_libs" \
      '$ARGS.named'
    )
    argsJson=$(jq -n \
      --arg BUILDKIT_INLINE_CACHE "1" \
      --arg CI "${process.env.FLEX_CI}" \
      --arg FLEX_SERVICE "${process.env.FLEX_SERVICE}" \
      --arg FLEX_APP "${process.env.FLEX_APP}" \
      --arg FLEX_DOMAIN_NAME "${process.env.FLEX_DOMAIN_NAME}" \
      --arg FLEX_BASE_DOMAIN "${process.env.FLEX_BASE_DOMAIN}" \
      --arg FLEX_IMAGE_REPOSITORY "${process.env.FLEX_IMAGE_REPOSITORY}" \
      --arg FLEX_HOME "${process.env.FLEX_HOME}" \
      --arg FLEX_MODE "${process.env.FLEX_MODE}" \
      --arg FLEX_BRANCH "${_branch}" \
      --arg FLEX_PROTOCOL "${process.env.FLEX_PROTOCOL}" \
      --arg FLEX_USER "${process.env.FLEX_USER}" \
      --arg FLEX_PROJ_DIR_GENERATED "${newProj.projDirRel}" \
      --arg FLEX_DOCKER_PLATFORM "${_OSslashCPU}" \
      --arg FLEX_CI_ARCH_TAG "${process.env.FLEX_CI_ARCH_TAG}" \
      --arg FLEX_OS "${process.env.FLEX_OS}" \
      --arg FLEX_CPU "${process.env.FLEX_CPU}" \
      '$ARGS.named'
    )
    tagsArray=$(echo '[]' | jq '. + ${JSON.stringify(tagsArray)}')
    cacheFromArray=$(echo '[]' | jq '. + ${JSON.stringify(cacheFromArray)}')
    outputArray=$(echo '[]' | jq '. + ${JSON.stringify(outputArray)}')
    innerJson=$(jq -n \
      --arg context "." \
      --argjson contexts "$contextsJson" \
      --argjson args "$argsJson" \
      --argjson tags "$tagsArray" \
      --argjson cache-from "$cacheFromArray" \
      --argjson output "$outputArray" \
      --arg pull "true" \
      --arg dockerfile "${process.env.FLEX_DOCKER_DIR}/generated/${newProj.imageName}.dockerfile" \
      '$ARGS.named'
    )
    final=$(jq -n \
      --argjson ${newProj.imageName} "$innerJson" \
      '$ARGS.named'
    )
    echo "$final" > "tmp" && mv "tmp" ${process.env.FLEX_DOCKER_DIR}/bake/generated/${newProj.imageName}.json
    echo "$final"
  `);
    const { stdout, stderr } = result;
    if (!stderr) {
        _jsonHcl = stdout;
        projects.increment(`${newProj.projName}`, {
            ...projects.byKey(`${newProj.projName}`),
            jsonHCL: _jsonHcl
        });
        // console.log(toJS(projects.byKey(`${newProj.projName}`)))
    }
}
async function makeGitlabInclude(newProj) {
    const result = await execPromise(`cat \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_INCLUDES_DIR}/template_generated.yml > \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_INCLUDES_DIR}/generated/${newProj.imageName}.yml
  `);
    const { stdout, stderr } = result;
    if (!stderr) {
        return Promise.resolve(stdout);
    }
    Promise.reject(stderr);
}
async function makeProjDockerfileTxt(newProj) {
    const file = await accessFile(`${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKERFILES_DIR}/generated/${newProj.imageName}.dockerfile`);
    if (!file) {
        const result = await execPromise(`cat \
      ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKERFILES_DIR}/template_generated.txt > \
      ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKERFILES_DIR}/generated/${newProj.imageName}.txt
    `);
        const { stdout, stderr } = result;
        if (!stderr) {
            return Promise.resolve(stdout);
        }
        Promise.reject(stderr);
    }
    return Promise.resolve();
}
async function editGitlabInclude(newProj) {
    const result = await execPromise(`envsub \
    --env TARGET_NAME=${newProj.imageName} \
    --env JOB_NAME=${newProj.imageName.toUpperCase()} \
    --env PROJ_DIR=${newProj.projDirRel} \
    --syntax dollar-both \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_INCLUDES_DIR}/template_generated.yml \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_INCLUDES_DIR}/generated/${newProj.imageName}.yml
  `);
    const { stdout, stderr } = result;
    if (!stderr) {
        return Promise.resolve(stdout);
    }
    Promise.reject(stderr);
}
async function editProjDockerfileTxt(newProj) {
    const file = await accessFile(`${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKERFILES_DIR}/generated/${newProj.imageName}.dockerfile`);
    if (!file) {
        const result = await execPromise(`envsub \
      --env CONTEXT_NAME=${newProj.contextName} \
      --env PROJ_NAME=${newProj.projName} \
      --env PROJ_DIR=${newProj.projDirRel} \
      --env TARGET_NAME=${newProj.imageName} \
      --syntax dollar-both \
      ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKERFILES_DIR}/generated/${newProj.imageName}.txt \
      ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKERFILES_DIR}/generated/${newProj.imageName}.dockerfile
    `);
        const { stdout, stderr } = result;
        if (!stderr) {
            return Promise.resolve(stdout);
        }
        Promise.reject(stderr);
    }
    return Promise.resolve();
}
async function removeProjDockerfileTxt(newProj) {
    const result = await execPromise(`rm -rf \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_DOCKERFILES_DIR}/generated/${newProj.imageName}.txt
  `);
    const { stdout, stderr } = result;
    if (!stderr) {
        return Promise.resolve(stdout);
    }
    Promise.reject(stderr);
}
async function exportJsonHCL() {
    console.log('########################################################################');
    console.log('⚡️... Exporting Generated HCL Definitions ...⚡️');
    console.log('########################################################################');
    const result = await execPromise(`
    // jq -s 'reduce.[] as $item ({}; . * $item)' ${process.env.FLEX_DOCKER_DIR}/bake/generated/*.json | \
    // jq '{"target": .}' \
    // > "tmp" && mv "tmp" ${process.env.FLEX_DOCKER_DIR}/bake/generated.json
    
    targetJson=$(jq -s 'reduce.[] as $item ({}; . * $item)' ${process.env.FLEX_DOCKER_DIR}/bake/generated/*.json)
    groupDefaultTargetsArray=$(echo '[]' | jq '. + ${JSON.stringify(_targetsArray)}')
    defaultJson=$(jq -n \
      --argjson targets "$groupDefaultTargetsArray" \
      '$ARGS.named'
    )
    groupJson=$(jq -n \
      --argjson default "$defaultJson" \
      '$ARGS.named'
    )
    final=$(jq -n \
      --argjson group "$groupJson" \
      --argjson target "$targetJson" \
      '$ARGS.named'
    )
    echo "$final" > "tmp" && mv "tmp" ${process.env.FLEX_DOCKER_DIR}/bake/generated.json
    echo "$final"
  `);
    const { stdout } = result;
    if (!stdout)
        return result;
    return stdout;
}
async function ansibleUpdateBuildHCL() {
    console.log('########################################################################');
    console.log('⚡️... Updating Build HCL Definitions ...⚡️');
    console.log('########################################################################');
    const result = await execPromise(`
    ansible-playbook \
    --extra-vars="base_path=${process.env.PROJECT_CWD}" \
    ${process.env.PROJECT_CWD}/${process.env.FLEX_CI_DIR}/ansible/build-bake-generated.yml
  `);
    const { stdout } = result;
    if (!stdout)
        return result;
    return stdout;
}
async function testBake() {
    console.log('########################################################################');
    console.log('⚡️... Merging Bake Definitions ...⚡️');
    console.log('########################################################################');
    const result = await execPromise(`
    docker buildx bake \
    -f ${process.env.FLEX_DOCKER_DIR}/bake/build.hcl \
    -f ${process.env.FLEX_DOCKER_DIR}/bake/generated.json \
    -f ${process.env.FLEX_DOCKER_DIR}/env/ci/${_OSslashCPU}/.env.hcl \
    --print
  `);
    const { stdout } = result;
    if (!stdout)
        return result;
    return stdout;
}
async function getProjects(workerData) {
    let pFinished = false;
    let pArray = [];
    projects.parsing(true);
    const p = subprocess.exec(`${workerData.scope}`);
    if (p.stdout) {
        p.stdout.pipe(process.stdout);
        p.stdout.on('data', async (data) => {
            const lines = data.toString().split('\n');
            const regexProjDir = new RegExp(`^((.+)\/([^\/]+))$`, 'm');
            const regexDone = new RegExp(`^(Done)(.*)$`, 'm');
            const resultProjDir = lines[0].match(regexProjDir);
            const resultDone = lines[0].match(regexDone);
            if (resultProjDir) {
                pArray.push(resultProjDir[0]);
            }
            if (resultDone && resultDone[1] === 'Done') {
                pFinished = true;
            }
        });
    }
    if (p.stderr) {
        p.stderr.on('data', (data) => {
            console.error(`${workerData.scope} | stderr: ${data}`);
        });
    }
    p.on('close', (code) => {
        pArray.forEach(async (projDirAbs, index) => {
            await getProjectName(projDirAbs).then(async (data) => {
                const newProj = {
                    projDirAbs: `${projDirAbs}`,
                    projDirRel: `${path.relative(`${process.env.PROJECT_CWD}`, projDirAbs)}`,
                    projName: `${data.projName}`,
                    contextName: `${data.contextName}`,
                    imageName: `${data.imageName}`,
                    jsonHCL: null,
                };
                projects.increment(`${data.projName}`, newProj);
                // console.log(toJS(projects.byKey(`${newProj.projName}`)))
                await makeJsonHCL(newProj);
                await makeGitlabInclude(newProj);
                await makeProjDockerfileTxt(newProj);
                await editGitlabInclude(newProj);
                await editProjDockerfileTxt(newProj);
                await removeProjDockerfileTxt(newProj);
            }).then(() => {
                console.log(index);
                if (projects.allSize === (index + 1)) {
                    console.log('########################################################################');
                    console.log('⚡️... Done Parsing Workspace Projects ...⚡️');
                    console.log('########################################################################');
                    projects.parsing(false);
                }
            });
        });
        if (pFinished) {
            console.log(`${workerData.scope} process exited with code ${code}`);
            projects.finished(true);
        }
    });
}
console.log('########################################################################');
console.log('⚡️... Getting things ready ...⚡️');
console.log('########################################################################');
await setRoot();
const resultClean = await cleanGeneratedFolder();
console.log(`Result clean :`, resultClean);
const branch = await getGitBranch();
console.log(`Git branch :`, branch);
const resultEditEnvHCL = await editEnvHCL();
console.log(`Result edit env hcl :`, resultEditEnvHCL);
const resultEditEnv = await editEnv();
console.log(`Result edit env :`, resultEditEnv);
await getProjects(workerData);
autorun(async () => {
    if (projects.isFinished) {
        _targetsArray = [];
        toJS(projects.all).forEach((item) => {
            console.log(`Result item.imageName :`, `${item.imageName}`);
            return _targetsArray.push(`${item.imageName}`);
        });
        const resultExport = await exportJsonHCL();
        console.log(`Result JSON exported :`, resultExport);
        const resultAnsibleUpdateBuildHCL = await ansibleUpdateBuildHCL();
        console.log(`Result ansibleUpdateBuildHCL :`, resultAnsibleUpdateBuildHCL);
        const resultTestBake = await testBake();
        console.log(`Result JSON exported :`, resultTestBake);
        console.log('########################################################################');
        console.log('⚡️... All done but wait !! ...⚡️');
        console.log("\
    It sucks, I don't know why dockerfile cannot receive 'build-args' or why 'build-context'\n\
    is lost when 'docker buildx build' command is invoked in ci... Unfortuatley we cannot use\n\
    'docker buildx bake' syntax because we really really need 'add-host' functionality.\n\
    The gateway ssr build process requires dependancy remote node projects to run at compile time.\n\
    These must run on production domain names not just localhost. To cut to the chase, you have\n\
    to manually configure 3 files as a monkey patch, when you are switching git branches:\n\
      - /pipeline-ci/docker/v2/dockerfiles/5b_build_ssr.dockerfile\n\
      - /pipeline-ci/docker/v2/dockerfiles/6b_test_e2e.dockerfile\n\
      - /pipeline-ci/docker/v2/dockerfiles/7b_final.dockerfile\n\
    You gotta manaully specify the registry url for the --from tags. Weird but voilà everthings works\n\
    \n\
    ¯\\_(ツ)_/¯");
        console.log('########################################################################');
    }
    else {
        console.log('########################################################################');
        console.log('⚡️... Parsing Workspace Projects ...⚡️');
        console.log('########################################################################');
    }
});
// Using nodejs I would like to call go programming language to use hclwrite, can you give me some advice ?
// //////////////////////////////////////////////////////////////////////////////////////////
// REsponse from chatGPT
// //////////////////////////////////////////////////////////////////////////////////////////
// Yes, you can use the Go programming language with HCLWrite in a Node.js application by creating
// a Go module that uses HCLWrite and then wrapping that module in a Node.js wrapper.
// Here's a simple example of how you could accomplish this:
// 1) Create a Go module that uses HCLWrite to generate HCL configuration:
// package main
// import (
// 	"github.com/hashicorp/hcl/v2"
// 	"github.com/hashicorp/hcl/v2/hclwrite"
// )
// // GenerateConfig generates HCL configuration
// func GenerateConfig() ([]byte, error) {
// 	f := hclwrite.NewEmptyFile()
// 	rootBody := f.Body()
// 	rootBody.AppendNewline()
// 	block := rootBody.AppendNewBlock("resource", []string{"\"aws_instance\"", "\"example\""})
// 	block.Body().SetAttributeValue("instance_type", "t2.micro")
// 	block.Body().SetAttributeValue("ami", "\"ami-0c55b159cbfafe1f0\"")
// 	return f.Bytes(), nil
// }
// func main() {}
// 2) Compile the Go module and generate a shared library that can be loaded by Node.js:
// go build -buildmode=c-shared -o hclwrite.so hclwrite.go
// 3) Create a Node.js wrapper that loads the Go shared library and calls the GenerateConfig function:
// const ffi = require("ffi");
// const libHCLWrite = ffi.Library("./hclwrite.so", {
//   GenerateConfig: ["string", []],
// });
// const result = libHCLWrite.GenerateConfig();
// console.log(result.toString());
// In this example, the Go module uses HCLWrite to generate HCL configuration and exports a function
// called GenerateConfig that returns the generated configuration as a byte array. The Node.js
// wrapper uses the ffi library to load the Go shared library and call the GenerateConfig function.
// You can use this approach to incorporate Go and HCLWrite into your Node.js application,
// allowing you to leverage the power of both languages to generate and manage HCL configurations.
// //////////////////////////////////////////////////////////////////////////////////////////
// How can I use go programming language within node js
// //////////////////////////////////////////////////////////////////////////////////////////
// REsponse from chatGPT
// //////////////////////////////////////////////////////////////////////////////////////////
// While Node.js and Go are two separate programming languages, they can be used together
// to leverage the strengths of each. One way to use Go with Node.js is to write a Go program
// and then create a Node.js module that interacts with it. The Go program can be compiled
// to a shared library, which can then be loaded as a Node.js module using
// the ffi (Foreign Function Interface) library. This way, you can take advantage of the
// speed and performance of Go in your Node.js application.
// Here's a simple example of how you could use Go from within Node.js:
// // Go program
// package main
// import "C"
// //export Add
// func Add(a, b int) int {
//     return a + b
// }
// func main() {}
// // Node.js code
// const ffi = require('ffi');
// const ref = require('ref');
// const libGo = ffi.Library('./add.so', {
//   'Add': [ 'int', [ 'int', 'int' ] ]
// });
// const result = libGo.Add(2, 3);
// console.log(result);
// In this example, the Go program exports a function called Add that takes two integers
// as arguments and returns their sum. The Node.js code uses the ffi library to load the
// compiled Go shared library and call the Add function.
// It's worth noting that using Go from within Node.js can add complexity to your project
// and make it harder to maintain. In some cases, it might make more sense to simply choose
// one language for your project and stick with it, rather than trying to mix and match.
// //////////////////////////////////////////////////////////////////////////////////////////
// install deps
// build each lib
// build each client side project
// cp each lib -> 3_build_libs.dockerfile
// cp each client side project -> 4_build_client_side.dockerfile
// 5_build_ssr.dockerfile
//# sourceMappingURL=build-bake.mjs.map