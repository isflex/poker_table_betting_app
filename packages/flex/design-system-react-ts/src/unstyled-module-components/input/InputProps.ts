import { IconName } from '../icon'
import {
  InputAutoCapitalize,
  InputAutoCompleteType,
  InputKeyboardAppearance,
  InputKeyboardType,
  InputStatus,
  InputTextContentType,
  InputType,
} from './InputEnum'

export interface InputChangeEvent {
  inputName: string
  inputValue: string
}

type InputChangeEventHandler = (event: InputChangeEvent) => void

export interface InputKeyboardEvent {
  inputName: string
  inputValue: string
  inputKeyCode: number
}

type InputKeyboardEventHandler = (event: InputKeyboardEvent) => void

export interface InputClickEvent {
  inputName: string
  inputValue: string
}

type InputClickEventHandler = (event: InputClickEvent) => void

export interface InputNativeEvents {
  onClick?: InputClickEventHandler
  onChange?: InputChangeEventHandler
}

export interface InputWebEvents {
  onChange?: InputChangeEventHandler
  onKeyUp?: InputKeyboardEventHandler
  onKeyPress?: InputKeyboardEventHandler
  onIconClick?: InputClickEventHandler
  onClick?: InputClickEventHandler
}

/**
 * Input Interface
 */
export interface InputProps {
  type?: InputType
  content?: string
  placeholder?: string
  defaultValue?: string
  value?: string
  disabled?: boolean
  loading?: boolean
  hasIcon?: boolean
  customIcon?: IconName
  iconClassname?: string
  status?: InputStatus
  help?: string
  name?: string
  search?: boolean
  className?: string
  hovered?: boolean
  focused?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any | null
  keyboardStyle?: InputKeyboardAppearance
  autoCapitalize?: InputAutoCapitalize
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  autoCorrect?: any
  autoCompleteType?: InputAutoCompleteType
  textContentType?: InputTextContentType
  keyboardType?: InputKeyboardType
  forceControl?: boolean
}
