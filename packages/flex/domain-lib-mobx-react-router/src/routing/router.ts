import {
  FlexGlobalThis
} from 'flexiness'

declare let globalThis: FlexGlobalThis

import { RouterStore } from '@superwf/mobx-react-router'
import { browserHistory } from './browser-history'
// const globalThis: FlexGlobalThis = {}

// export const Router = new RouterStore(browserHistory);

export class FlexRouterStore extends RouterStore {}

let router: FlexRouterStore | undefined = globalThis?.Flexiness?.domainApp?.router
export function getRouter(): FlexRouterStore {
  if (!router) router =  new FlexRouterStore(browserHistory)
  globalThis.Flexiness = {
    // @ts-expect-error
    ...globalThis?.Flexiness,
    domainApp: { ...globalThis?.Flexiness?.domainApp, router }
  }
  return router
}
