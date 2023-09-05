/* eslint-disable no-console */
import { createElement } from 'react'
import ReactDOM from 'react-dom'
import log from 'loglevel'
import UniversalRouter from 'universal-router'
import { browserHistory } from '../routing/browser-history'
import { getRouter } from '../routing/router'

import {
  toJS,
  makeAutoObservable,
  observable,
  action,
  // computed
} from 'mobx'

import {
  // HostnameFrontend,
  IdFrontend,
  StatusFrontend,
  BasenameFrontend,
  BundleJSProps,
  UniversalRoute,
  // RouteResult,
  MicroFronts,
  // MicroFront,
  FlexGlobalThis,
} from 'flexiness'

declare let globalThis: FlexGlobalThis
// const globalThis: FlexGlobalThis = {}
declare type getMFStore = () => MicroFrontendStore
declare type RenderRoute = () => void

export class MicroFrontendStore {
  constructor(
    public allMicros: MicroFronts,
    public currentMicroId: IdFrontend,
    public status: StatusFrontend,
    public basename: BasenameFrontend,
    public bundleJSPending: BundleJSProps[],
    public microRoutes: UniversalRoute[]
  ) {
    makeAutoObservable(this, {
      allMicros: observable,
      currentMicroId: observable,
      status: observable,
      basename: observable,
      bundleJSPending: observable,
      microRoutes: observable,
      // microFront: computed,
      setId: action,
      setStatus: action,
      addFrontendBundleJS: action,
      renderRoute: action
    })
    this.allMicros = allMicros
    this.currentMicroId = currentMicroId
    this.status = status
    this.basename = basename
    this.bundleJSPending = bundleJSPending
    this.microRoutes = microRoutes
  }

  microFront = (id: IdFrontend) => {
    return this.allMicros.get(id)
  }

  get currentMicroFront () {
    return this.allMicros.get(this.currentMicroId)
  }

  // Maybe should use location.hostname as key for Map
  // https://stackoverflow.com/questions/47135661/how-can-i-get-a-key-in-a-javascript-map-by-its-value/47136047#47136047
  setId = (newId: IdFrontend) => {
    this.currentMicroId = newId
    // this.allMicros.set(newId, {
    //   status: null,
    //   basename: '/',
    //   bundleJSPending: [],
    //   microRoutes: [],
    // })
  }

  setStatus = (newStatus: StatusFrontend) => {
    this.status = newStatus
    this.updateAllMicros()
  }

  setBasename = (newBasename: BasenameFrontend) => {
    this.basename = newBasename
    if (typeof newBasename === 'string') browserHistory.replace(newBasename)
    this.updateAllMicros()
  }

  addFrontendBundleJS = (newScript: BundleJSProps) => {
    if (
      !this.bundleJSPending.filter(
        (registeredScripts) => registeredScripts.path === newScript.path
      ).length
    ) {
      this.bundleJSPending.push(newScript)
    }
    // TODO : more concise w/ destructuring ?
    // this.bundleJSPending = [{ ...this.bundleJSPending, ...newScript }];

    this.updateAllMicros()
  }

  addRoutes = (newRoutes: UniversalRoute[]) => {
    this.microRoutes = [...this.microRoutes, ...newRoutes]

    this.updateAllMicros()
  }

  /*
  ///// HELPER FUNCTIONS /////
  */

  updateAllMicros = () => {
    const flexRouter = getRouter()
    const { history } = flexRouter
    if (this.allMicros.get(this.currentMicroId)) {
      this.allMicros.set(this.currentMicroId, {
        microId: this.currentMicroId,
        port: window?.location?.port || null,
        key: history.location.key,
        pathname: history.location.pathname,
        status: this.status,
        basename: this.basename,
        bundleJSPending: this.bundleJSPending,
        microRoutes: this.microRoutes,
      })
    } else {
      this.allMicros.set(this.currentMicroId, {
        microId: this.currentMicroId,
        port: window?.location?.port || null,
        key: history.location.key,
        pathname: history.location.pathname,
        status: null,
        basename: '/',
        bundleJSPending: [],
        microRoutes: [],
      })
    }
    // console.log(toJS(this.allMicros))
  }

  renderRoute: RenderRoute = async () => {
    const root = document.getElementById('root')
    const routes = toJS(this.microRoutes)
    const universalRouter = new UniversalRouter(routes, { context: { MFStore: getMFStore() } })
    const flexRouter = getRouter()
    const { location, history } = flexRouter

    try {
      const page = await universalRouter.resolve({
        pathname: location.pathname
      })
      if (page.redirect) {
        return history.push({ pathname: page.redirect, search: '' })
      }
      // eslint-disable-next-line react/no-render-return-value
      return ReactDOM.hydrate(page, root)
    } catch (err) {
      log.error('Error UniversalRouter : ', err)
      // eslint-disable-next-line react/no-render-return-value
      return ReactDOM.render(createElement('p', {}, 'Wrong way'), root)
    }
  }
}

let MFStore: MicroFrontendStore | undefined = globalThis?.Flexiness?.domainApp?.MFStore
export function getMFStore() {
  if (!MFStore) {
    MFStore = new MicroFrontendStore(
      // allMicros
      new Map(),

      // currentMicroId
      '',

      // status
      null,

      // basename
      '/',

      // bundleJSPending
      [],

      // microRoutes
      []
    )
    globalThis.Flexiness = {
      // @ts-expect-error
      ...globalThis?.Flexiness,
      domainApp: { ...globalThis?.Flexiness?.domainApp, MFStore }
    }
  }
  return MFStore
}
