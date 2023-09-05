import { ClickEvent } from '../../../events/OnClickEvent'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Tabs Item Interface
 */
export interface TabsItemProps {
  children: React.ReactChild
  onClick?: ClickEvent
  active?: boolean
  className?: string
  classList?: string[]
  id?: string
}
