import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Disclaimer Item Interface
 */
export interface DisclaimerItemProps {
  children?: GenericChildren | string
}

/**
 * Disclaimer Item Interface
 */
export interface DisclaimerItemWebProps extends DisclaimerItemProps {
  className?: string
  classList?: string[]
}
