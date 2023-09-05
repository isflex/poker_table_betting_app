import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { SliceContentProps } from './SliceContentProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Slice Content Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for Slice Content
 */
const SliceContent = ({ children, className, classList, ...others }: SliceContentProps): React.JSX.Element => {
  const classes = classNames(
    styles.sliceContent,
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceContent
