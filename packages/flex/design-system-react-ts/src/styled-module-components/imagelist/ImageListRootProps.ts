// import { ImageListProps } from './ImageListProps'
// import { GenericChildren } from 'flex-design-system-react-ts/generics'
import { ImageListRootMarkup } from './ImageListTagEnum'
import { ImageListProps } from './ImageListProps'

export interface ImageListRootProps {
  className?: string
  markup?: ImageListRootMarkup
  ref: React.ForwardedRef<unknown>
  ownerState: ImageListProps
  style?: React.CSSProperties
  children: React.ReactNode,
}
