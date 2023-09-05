export interface DropdownTriggerClickEvent {
  active: boolean
}

type DropdownTriggerClickEventHandler = (event: DropdownTriggerClickEvent) => void

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Dropdown Trigger Interface
 */
export interface DropdownTriggerProps {
  children?: GenericChildren | string
  onClick?: DropdownTriggerClickEventHandler
  active?: boolean
  label?: string
  placeholder?: string
}

/**
 * Dropdown Trigger Web Interface
 */
export interface DropdownTriggerWebProps extends DropdownTriggerProps {
  className?: string
  classList?: string[]
}
