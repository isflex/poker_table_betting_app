import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { SliceImageProps } from './SliceImageProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Slice Image Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Custom children for Slice Image
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param rounded {boolean} Rounded Slice Image
 */
const SliceImage = ({ children, className, classList, src, alt, rounded, ...others }: SliceImageProps): React.JSX.Element => {
  const classes = classNames(
    styles.sliceImage,
    className,
    validate(classList)
  )

  if (children) {
    return (
      <div className={classes} {...others}>
        {children}
      </div>
    )
  }

  return (
    <div className={classes} {...others}>
      <div className={styles.image}>
        <img className={(rounded && styles.isRounded) || ''} src={src} alt={alt} />
      </div>
    </div>
  )
}

export default SliceImage
