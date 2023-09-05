import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface TableTrProps {
  children?: GenericChildren | string
  expandable?: boolean
  expanded?: boolean | React.ReactNode | string
  className?: string
  classList?: string[]
}
