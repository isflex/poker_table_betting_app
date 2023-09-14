/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */

import React from 'react'
// import jQuery from 'jquery'
import { FlexRouterStore, MicroFrontendStore } from '@flexiness/domain-lib-mobx-react-router'
export { FlexRouterStore, MicroFrontendStore }
// import { UserInterfaceStore } from '@flex-gateway-ssr/nextjs-telenko/src/stores/UIStore'
// export { UserInterfaceStore }
import { Nonce } from './Utils'
import { FlexI18next } from './UIStore'
// import type I18next from 'i18next'

declare global {
  var __webpack_init_sharing__: (scope: string) => Promise<void>
  var __webpack_share_scopes__: any
  var __webpack_nonce__: string
  var __BROWSER__: any
  var __BROWSER_GLOBAL__: any

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface globalThis extends FlexGlobalThis {}
}

export interface Window {
  // jQuery: typeof jQuery
  // $: typeof jQuery
  __remotes__: Record<string, string>
  __initialized: boolean
  [key:string]: any
}

export interface FlexGlobalThis {
  __BROWSER__: any
  __BROWSER_GLOBAL__: any
  Flexiness?: keyof globalThis & Flexiness
}

export interface Flexiness extends Object {
  domainApp?: {
    FlexComponents?: typeof import('flex_design_system_react_ts_styled'),
    MFStore?: MicroFrontendStore,
    // UIStore?: UserInterfaceStore,
    router?: FlexRouterStore,
    React?: typeof React,
    FlexCSPNonce?: Nonce
    FlexLanguage?: FlexI18next['language']
  }
}
