export interface OptionsItemChangeEvent {
  optionId: string
  optionValue: string
  optionName: string
  optionChecked: boolean
}

type OptionsItemChangeEventHandler = (event: OptionsItemChangeEvent) => void

export interface OptionsItemClickEvent {
  optionId: string
  optionValue: string
  optionName: string
  optionChecked: boolean
}

type OptionsItemClickEventHandler = (event: OptionsItemClickEvent) => void

/**
 * Options Item Interface
 */
export interface OptionsItemProps {
  children?: React.ReactNode | string
  disabled?: boolean
  readonly?: boolean
  onClick?: OptionsItemClickEventHandler
  onChange?: OptionsItemChangeEventHandler
  className?: string
  id?: string
  name?: string
  value?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checked?: any
  label?: string
}
