import { InfoBlockStatus } from '../InfoBlockEnum'
import { IconName } from '../../icon'

export interface InfoBlockHeaderProps {
  children?: string
  className?: string
  status?: InfoBlockStatus
  customIcon?: IconName
}
