export interface DropdownItemClickEvent {
  itemId: string
  itemValue: string
  itemChecked: boolean
}

type DropdownItemClickEventHandler = (event: DropdownItemClickEvent) => void

export interface DropdownItemChangeEvent {
  itemId: string
  itemValue: string
  itemChecked: boolean
}

type DropdownItemChangeEventHandler = (event: DropdownItemChangeEvent) => void

/**
 * Dropdown Item Interface
 */
export interface DropdownItemProps {
  children?: React.ReactNode | string
  disabled?: boolean
  onClick?: DropdownItemClickEventHandler
  onChange?: DropdownItemChangeEventHandler
  checked?: boolean
}

/**
 * Dropdown Item Web Interface
 */
export interface DropdownItemWebProps extends DropdownItemProps {
  className?: string
  id?: string
  label?: string
  value?: string
  name?: string
  readonly?: boolean
}
