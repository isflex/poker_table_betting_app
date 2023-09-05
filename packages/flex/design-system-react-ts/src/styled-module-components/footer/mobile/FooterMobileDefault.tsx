import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { FooterMobileWebProps } from './FooterMobileProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Footer Mobile Component
 * @param children {ReactNode} Mobile Footer Children
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 */
const FooterMobile = ({ children, className, classList, ...others }: FooterMobileWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.isFooterMobile,
    styles.isHiddenDesktop,
    className,
    validate(classList)
  )

  // Mobile Footer
  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default FooterMobile
