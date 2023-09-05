import log from 'loglevel'
import { getRouter } from './router'
import { getMFStore } from '../stores'
import { UseRouterProps } from 'flexiness'

// https://stackoverflow.com/questions/2896626/switch-statement-for-string-matching-in-javascript/2896642
const test = (str: string, type: 'basename' | 'path'): void => {
  switch (str) {
    // https://stackoverflow.com/questions/5293859/javascript-regexp-only-if-first-character-is-not-an-asterisk
    case str.match(/^[^/]/)?.input:
    case str.match(/.+\/$/)?.input:
      return log.error(`A properly formatted ${type} should have a leading slash, but no trailing slash`)
    default:
      break
  }
}

export const getRoutePath = (path: string) => {
  test(path, 'path')
  const MFStore = getMFStore()
  const { basename } = MFStore
  test(basename, 'basename')
  const route = basename === '/'
    ? path
    : path === '/'
      ? basename
      : `${basename}${path}`
  return route
}

export const useRouter = (props: UseRouterProps) => {
  const flexRouter = getRouter()
  const { history } = flexRouter
  history.push(getRoutePath(props.path))
}
