import { Loadable } from '../../objects/facets/Loadable'
import { GenericChildren, Styles } from 'flex-design-system-react-ts/generics'

/**
 * View Interface
 */
export interface ViewProps extends Loadable {
  // children?: React.ReactNode | undefined
  children?: GenericChildren | string
  className?: string
  classList?: string[]
  style?: Styles
  theme?: 'light' | 'dark'
}
