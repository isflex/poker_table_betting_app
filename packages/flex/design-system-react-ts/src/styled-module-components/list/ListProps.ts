import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * ListItem Interface
 */
import { ReactNode } from 'react'

export interface ListProps {
  children?: ReactNode
  className?: string
  classList?: string[]
  hasIcon?: boolean
}
