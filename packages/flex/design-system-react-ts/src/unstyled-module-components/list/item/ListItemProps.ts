/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { IconName } from '../../icon'

export enum ListIconStatus {
  SUCCESS = 'success',
  DANGER = 'danger',
}

export interface ListItemProps {
  children?: ReactNode
  className?: string
  customIcon?: IconName
  status?: ListIconStatus
  title?: string
  description?: string
}
