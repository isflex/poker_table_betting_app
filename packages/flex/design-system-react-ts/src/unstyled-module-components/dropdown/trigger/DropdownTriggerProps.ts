export interface DropdownTriggerClickEvent {
  active: boolean
}

type DropdownTriggerClickEventHandler = (event: DropdownTriggerClickEvent) => void

/**
 * Dropdown Trigger Interface
 */
export interface DropdownTriggerProps {
  children?: React.ReactNode | string
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
}
