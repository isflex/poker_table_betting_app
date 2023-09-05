import { getMFStore } from '../stores'

export const getLocationPath = (path: string) => {
  const MFStore = getMFStore()
  const { basename } = MFStore
  const location = basename === '/'
    ? path
    : path === '/'
      ? basename
      : `${basename}${path}`
  return location
}

export const useLocation = (path: string) => {
  return getLocationPath(path)
}
