import { ClickEvent } from '../../events/OnClickEvent'
import { TileMarkup } from './TileEnum'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Tile Interface
 */
export interface TileProps {
  children?: GenericChildren | string
  onClick?: ClickEvent
  child?: boolean
  parent?: boolean
  ancestor?: boolean
  vertical?: boolean
  markup?: TileMarkup
  to?: string
  className?: string
  classList?: string[]
}
