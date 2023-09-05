import { ClickEvent } from '../../events/OnClickEvent'
import { TileMarkup } from './TileEnum'

/**
 * Tile Interface
 */
export interface TileProps {
  children?: React.ReactNode | string
  onClick?: ClickEvent
  child?: boolean
  parent?: boolean
  ancestor?: boolean
  vertical?: boolean
  markup?: TileMarkup
  to?: string
  className?: string
}
