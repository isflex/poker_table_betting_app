<div align='center'>

# Trilogy React

**50 reusable and React-compatible trilogy components.**

[![snowpack](https://img.shields.io/badge/bootstrapped_with-snowpack-be2edd.svg)](https://www.snowpack.dev)
[![repository](https://img.shields.io/badge/template-spin_app_microfrontend-78E.svg)](https://gitlab.pin.dolmen.bouyguestelecom.fr/COMMUN/frontoffice/trilogy-react-ts)
[![glouton](https://img.shields.io/badge/registry-glouton-43a047.svg)](https://glouton.int.nbyt.fr/artifactory/webapp/#/packages/npm/%2540bytel~2Ftrilogy-react-ts)

🚀 [Getting started](#getting-started)

</div>

---

## Project structure

```py
.
├── android                 # Android app
├── ios                     # Ios app
├── static                  # Public static assets (images,)
├── public                  # Compiled files (not versioned)
├── src                     # Source files
│   ├── components       ◀  # - React functional components
│   ├── events              # - Event type definitions
│   ├── objects             # - Atoms & facets definition & implementation
│   │   ├── atoms           #
│   │   └── facets          #
│   ├── services            # - Trilogy/Bulma-compliant helpers
│   ├── views               # - Mock application that consumes most if not all components
├── LICENSE
├── package.json            # Node package reference
└── README.md
```

## Getting started

1. Start the mock application with:

    ```shell
    yarn          # install dependencies
    yarn start    # start the mock application locally
    ```

2. Access it: **<http://localhost:8080>**

## Commands reference

```shell
yarn          # install all node dependencies

yarn start    # start the service locally, with live reloading

yarn build    # package the node module in the ES6 syntax, in the `lib` folder
```

## Run Native Project 

```shell
yarn          # install all node dependencies

yarn ios      # start and launch the ios simulator

yarn android  # start and launch the android simulator

yarn build    # package the node module in the ES6 syntax, in the `lib` folder
```

---

## Load trilogy icons + Bouygues fonts

```shell
npx react-native link          # Build and put trilogy icons + fonts into /ios & /android folders
```

