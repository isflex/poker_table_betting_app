import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface InfoBlockProps {
  // children?: React.JSX.Element | React.JSX.Element[] | string | number
  children?: GenericChildren | string | number
  boxed?: boolean
  className?: string
  classList?: string[]
}
