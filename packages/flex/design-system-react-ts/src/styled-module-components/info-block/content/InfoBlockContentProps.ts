import { ColumnsSize } from '../../columns/ColumnsTypes'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface InfoBlockContentProps {
  children?: GenericChildren | string
  size?: ColumnsSize
  className?: string
  classList?: string[]
}
