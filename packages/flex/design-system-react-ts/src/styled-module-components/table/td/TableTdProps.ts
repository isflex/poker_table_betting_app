import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface TableTdProps {
  children?: GenericChildren | string
  rowSpan?: number
  colSpan?: number
  className?: string
  classList?: string[]
}
