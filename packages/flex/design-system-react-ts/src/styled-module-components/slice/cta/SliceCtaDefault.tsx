import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { SliceCtaProps } from './SliceCtaProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Slice Cta Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for Slice Cta
 */
const SliceCta = ({ children, className, classList, ...others }: SliceCtaProps): React.JSX.Element => {
  const classes = classNames(
    styles.sliceCallToAction,
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceCta
