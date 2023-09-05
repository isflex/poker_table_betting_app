import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface TableThProps {
  children?: GenericChildren | string
  rowSpan?: number
  colSpan?: number
  className?: string
  classList?: string[]
}
