import { ClickEvent } from '../../../events/OnClickEvent'

/**
 * Tabs Item Interface
 */
export interface TabsItemProps {
  children: React.ReactChild
  onClick?: ClickEvent
  active?: boolean
  className?: string
  id?: string
}
