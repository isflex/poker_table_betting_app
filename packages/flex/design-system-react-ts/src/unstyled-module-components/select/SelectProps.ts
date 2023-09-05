export interface SelectChangeEvent {
  selectValue?: string
  selectName?: string
  selectId?: string
}

type SelectChangeEventHandler = (event: SelectChangeEvent) => void

/**
 * Select Interface
 */
export interface SelectProps {
  className?: string
  id?: string
  name?: string
  value?: string
  label?: string
  selected?: string
  nullable?: boolean
  onChange?: SelectChangeEventHandler
  children?: React.ReactNode | string
  dynamicPlaceholder?: boolean
  placeholder?: string
}
