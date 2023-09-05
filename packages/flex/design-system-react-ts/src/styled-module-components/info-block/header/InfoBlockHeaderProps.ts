import { InfoBlockStatus } from '../InfoBlockEnum'
import { IconName } from '../../icon'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface InfoBlockHeaderProps {
  children?: GenericChildren | string
  className?: string
  classList?: string[]
  status?: InfoBlockStatus
  customIcon?: IconName
}
