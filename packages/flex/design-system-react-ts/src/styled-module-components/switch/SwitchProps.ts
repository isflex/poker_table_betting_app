import { AlertProps } from '../../objects/facets/Alert'
import { Invertable } from '../../objects/facets/Invertable'

export interface SwitchChangeEvent {
  switchState: boolean
  switchName: string
}

type SwitchChangeEventHandler = (event: SwitchChangeEvent) => void

export interface SwitchProps extends AlertProps, Invertable {
  checked?: boolean
  onChange?: SwitchChangeEventHandler
  label?: string
  disabled?: boolean
  readonly?: boolean
  className?: string
  classList?: string[]
  id?: string
  value?: string
  name?: string
}
