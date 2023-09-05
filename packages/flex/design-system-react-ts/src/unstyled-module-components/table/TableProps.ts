import { Fullwidth } from '../../objects/facets/Fullwidth'

export interface TableProps extends Fullwidth {
  children?: React.ReactNode | string
  bordered?: boolean
  comparative?: boolean
  className?: string
}
