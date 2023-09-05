/* eslint-disable no-console */

import composeClasses from '../../mui/composeClasses'
import clsx from 'clsx'
import { camelCase } from 'lodash'
import * as React from 'react'
import { getImageListUtilityClass } from './imageListClasses'
import ImageListContext from './ImageListContext'
import { ImageListProps } from './ImageListProps'
import { ImageListVariant } from './ImageListVariantEnum'
import { ImageListRootProps } from './ImageListRootProps'
import { ImageListRootMarkup } from './ImageListTagEnum'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

const useUtilityClasses = (ownerState: ImageListProps) => {
  const { classes, variant } = ownerState

  const slots = {
    root: ['root', variant],
  }

  return composeClasses(slots, getImageListUtilityClass, classes)
}

const ImageListRoot = (props: ImageListRootProps): React.JSX.Element => {
  const {
    markup,
    ownerState,
    children,
    style,
    className
  } = props
  const Tag =
    markup && (markup in ImageListRootMarkup || Object.values(ImageListRootMarkup).includes(markup)) ? markup : 'ul'
  const rootStyle = (): React.CSSProperties => {
    return ({
      display: 'grid',
      overflowY: 'auto',
      listStyle: 'none',
      padding: 0,
      // Add iOS momentum scrolling for iOS < 13.0
      WebkitOverflowScrolling: 'touch',
      ...(ownerState.variant === 'masonry' && {
        display: 'block',
      }),
      ...style
    })
  }

  return (
    <Tag style={{ ...rootStyle() }} className={
      clsx(
        className,
        styles.imageListRoot,
        styles[camelCase(`image-list-${ownerState.variant}`) as keyof Styles]
      )
    }>
      {children}
    </Tag>
  )
}

// const ImageList = React.forwardRef(function ImageList(props, ref) {
const ImageList =  React.forwardRef<unknown, ImageListProps>((props, ref) => {
  const {
    children,
    className,
    // cols = 2,
    rowHeight = 'auto',
    gap = 4,
    // style: styleProp,
    variant = 'standard' as ImageListVariant
  } = props

  const contextValue = React.useMemo(
    () => ({ rowHeight, gap, variant }),
    [rowHeight, gap, variant],
  )

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // Detect Internet Explorer 8+
      if (document !== undefined && 'objectFit' in document.documentElement.style === false) {
        console.error(
          [
            'MUI: ImageList v5+ no longer natively supports Internet Explorer.',
            'Use v4 of this component instead, or polyfill CSS object-fit.',
          ].join('\n'),
        )
      }
    }
  }, [])

  // Moved to framework
  // const styleRoot =
  //   variant === 'masonry'
  //     ? { columnCount: cols, columnGap: gap, ...styleProp }
  //     : { gridTemplateColumns: `repeat(${cols}, 1fr)`, gap, ...styleProp }

  // console.log('ImageList', styleRoot)

  const ownerState = { ...props, gap, rowHeight, variant }

  const classes = useUtilityClasses(ownerState)

  // console.log('ImageList', classes)

  return (
    <ImageListRoot
      markup={ImageListRootMarkup.UL}
      className={clsx(classes.root, className)}
      ref={ref}
      // style={styleRoot}
      ownerState={ownerState}
    >
      <ImageListContext.Provider value={contextValue}>{children}</ImageListContext.Provider>
    </ImageListRoot>
  )
})

export default ImageList
