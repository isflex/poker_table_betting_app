import { Fullwidth } from '../../objects/facets/Fullwidth'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface TableProps extends Fullwidth {
  children?: GenericChildren | string
  bordered?: boolean
  comparative?: boolean
  className?: string
  classList?: string[]
}
