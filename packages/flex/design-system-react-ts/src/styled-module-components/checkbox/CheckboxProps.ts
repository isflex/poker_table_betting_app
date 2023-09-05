import { Invertable } from '../../objects/facets/Invertable'

export interface CheckboxChangeEvent {
  checkboxId: string
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
}

type CheckboxChangeEventHandler = (event: CheckboxChangeEvent) => void

export interface CheckboxClickEvent {
  checkboxId: string
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
}

type CheckboxClickEventHandler = (event: CheckboxChangeEvent) => void

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Checkbox Interface
 */
export interface CheckboxProps extends Invertable {
  children?: GenericChildren | string
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  id?: string
  label?: string
  labelClassName?: string
  onClick?: CheckboxClickEventHandler
  onChange?: CheckboxChangeEventHandler
  removeControl?: boolean
  removeField?: boolean
  className?: string
  classList?: string[]
  name?: string
  value?: string
}
