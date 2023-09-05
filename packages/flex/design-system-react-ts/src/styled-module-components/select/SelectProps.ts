export interface SelectChangeEvent {
  selectValue?: string
  selectName?: string
  selectId?: string
}

type SelectChangeEventHandler = (event: SelectChangeEvent) => void

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Select Interface
 */
export interface SelectProps {
  className?: string
  classList?: string[]
  id?: string
  name?: string
  value?: string
  label?: string
  selected?: string
  nullable?: boolean
  onChange?: SelectChangeEventHandler
  children?: GenericChildren | string
  dynamicPlaceholder?: boolean
  placeholder?: string
}
