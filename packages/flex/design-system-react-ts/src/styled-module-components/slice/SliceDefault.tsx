import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { SliceProps } from './SliceProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Slice Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for Slice
 * @param onClick {Function} onClick Event Slice
 * @param disabled {boolean} Disabled Slice
 * @param longCta {boolean} Change to the CTA line
 * @param selectable {boolean} Apply Field, Control classes wrapped
 */
const Slice = ({ children, className, classList, onClick, disabled, longCta, selectable, ...others }: SliceProps): React.JSX.Element => {
  const classes = classNames(
    styles.slice,
    disabled && styles.isDisabled,
    longCta && styles.hasLongCta,
    className,
    validate(classList)
  )

  if (selectable) {
    return (
      <div onClick={onClick && onClick} className={classes} {...others}>
        <div className={styles.field}>
          <div className={styles.control}>{children}</div>
        </div>
      </div>
    )
  }

  return (
    <div onClick={onClick && onClick} className={classes} {...others}>
      {children}
    </div>
  )
}

export default Slice
