import { Invertable } from '../../objects/facets/Invertable'

export interface RadioChangeEvent {
  radioId: string
  radioValue: string
  radioName: string
  radioChecked: boolean
}

type RadioChangeEventHandler = (event: RadioChangeEvent) => void

export interface RadioClickEvent {
  radioId: string
  radioValue: string
  radioName: string
  radioChecked: boolean
}

type RadioClickEventHandler = (event: RadioClickEvent) => void

/**
 * Radio Interface
 */
export interface RadioProps extends Invertable {
  children?: React.ReactNode | string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checked?: any
  disabled?: boolean
  readonly?: boolean
  id?: string
  label?: string
  labelClassName?: string
  onClick?: RadioClickEventHandler
  onChange?: RadioChangeEventHandler
  className?: string
  name?: string
  value?: string
}
