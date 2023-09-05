// import { ImageListProps } from './ImageListProps'
// import { GenericChildren } from 'flex-design-system-react-ts/generics'
import { ImageListItemRootMarkup } from '../ImageListTagEnum'
import { ImageListItemProps } from './ImageListItemProps'

export interface ImageListItemRootProps {
  className?: string
  markup: ImageListItemRootMarkup
  ref: React.ForwardedRef<unknown>
  ownerState: ImageListItemProps
  style: React.CSSProperties
  children: React.ReactNode,
}
