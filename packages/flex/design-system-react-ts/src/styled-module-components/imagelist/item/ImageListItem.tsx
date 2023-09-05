/* eslint-disable no-console */

import composeClasses from '../../../mui/composeClasses'
import clsx from 'clsx'
import { camelCase } from 'lodash'
import * as React from 'react'
import { isFragment } from 'react-is'
import ImageListContext from '../ImageListContext'
import imageListItemClasses, { getImageListItemUtilityClass } from './imageListItemClasses'
import { ImageListItemProps } from './ImageListItemProps'
import { ImageListItemRootProps } from './ImageListItemRootProps'
import { ImageListItemRootMarkup } from '../ImageListTagEnum'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

const useUtilityClasses = (ownerState: ImageListItemProps) => {
  const { classes, variant } = ownerState

  const slots = {
    root: ['root', variant],
    img: ['img'],
  }

  return composeClasses(slots, getImageListItemUtilityClass, classes)
}

const ImageListItemRoot = (props: ImageListItemRootProps): React.JSX.Element => {

  const {
    markup,
    ownerState,
    children,
    style,
    className
  } = props
  const Tag =
    markup && (markup in ImageListItemRootMarkup || Object.values(ImageListItemRootMarkup).includes(markup)) ? markup : 'li'

  const rootStyle = (): React.CSSProperties => {
    return ({
      display: 'block',
      position: 'relative',
      ...(ownerState.variant === 'standard' && {
        // For titlebar under list item
        display: 'flex',
        flexDirection: 'column',
      }),
      ...(ownerState.variant === 'woven' && {
        height: '100%',
        alignSelf: 'center',
        '&:nthOfType(even)': {
          height: '70%',
        },
      }),
      [`& .${imageListItemClasses.img}`]: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        display: 'block',
        ...(ownerState.variant === 'standard' && {
          height: 'auto',
          flexGrow: 1,
        }),
      },
      ...style
    })
  }

  return (
    <Tag style={{ ...rootStyle() }} className={
      clsx(
        className,
        styles.imageListItemRoot,
        styles[camelCase(`image-list-item-${ownerState.variant}`) as keyof Styles]
      )
    }>
      {children}
    </Tag>
  )
}

// const ImageListItem = React.forwardRef(function ImageListItem(props, ref) {
const ImageListItem =  React.forwardRef<unknown, ImageListItemProps>((props, ref) => {

  const {
    children,
    className,
    cols = 1,
    rows = 1,
    style,
    ...other
  } = props

  // @ts-expect-error
  const { rowHeight = 'auto', gap, variant } = React.useContext(ImageListContext)

  let height: string | number | undefined = 'auto'
  if (variant === 'woven') {
    height = undefined
  } else if (rowHeight !== 'auto') {
    height = rowHeight * rows + gap * (rows - 1)
  }

  const ownerState = {
    ...props,
    cols,
    gap,
    rowHeight,
    rows,
    variant,
  }

  const classes = useUtilityClasses(ownerState)

  // console.log('ImageListItem', classes)
  // console.log('ImageListItem Style', styles[camelCase(`${classes.img}`) as keyof Styles])
  // console.log('ImageListItem Style', styles.imageListItemImg)

  return (
    <ImageListItemRoot
      markup={ImageListItemRootMarkup.LI}
      className={clsx(classes.root, className)}
      ref={ref}
      style={{
        height,
        gridColumnEnd: variant !== 'masonry' ? `span ${cols}` : undefined,
        gridRowEnd: variant !== 'masonry' ? `span ${rows}` : undefined,
        marginBottom: variant === 'masonry' ? gap : undefined,
        ...style,
      }}
      ownerState={ownerState}
      {...other}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null
        }

        if (process.env.NODE_ENV !== 'production') {
          if (isFragment(child)) {
            console.error(
              [
                "MUI: The ImageListItem component doesn't accept a Fragment as a child.",
                'Consider providing an array instead.',
              ].join('\n'),
            )
          }
        }

        if (child.type === 'img') {
          return React.cloneElement(child, {
            key: `${variant}-img-${index}`,
            className: clsx(
              classes.img,
              styles[camelCase(`${classes.img}`) as keyof Styles],
              child.props.className
            ),
          })
        }

        return child
      })}
    </ImageListItemRoot>
  )
})

export default ImageListItem
