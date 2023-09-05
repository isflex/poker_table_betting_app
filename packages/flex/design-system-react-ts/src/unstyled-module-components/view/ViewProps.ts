import { Loadable } from '../../objects/facets/Loadable'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Styles = { [key: string]: any }

/**
 * View Interface
 */
export interface ViewProps extends Loadable {
  children?: React.ReactNode | string
  className?: string
  style?: Styles
}
