import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { SliceListProps } from './SliceListProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Slice List Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for SliceList (Slice)
 * @param transparent {boolean} Apply transparent on Slices container
 * @param selectable {boolean} List of checkable Slice
 */
const SliceList = ({ children, className, classList, transparent, selectable, ...others }: SliceListProps): React.JSX.Element => {
  const classes = classNames(
    styles.slices,
    transparent && styles.isTransparent,
    selectable && styles.sliceSelect,
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceList
