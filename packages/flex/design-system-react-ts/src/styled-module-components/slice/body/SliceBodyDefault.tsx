import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { SliceBodyProps } from './SliceBodyProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Slice Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for Slice
 */
const SliceBody = ({ children, className, classList, ...others }: SliceBodyProps): React.JSX.Element => {
  const classes = classNames(
    styles.sliceBody,
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceBody
