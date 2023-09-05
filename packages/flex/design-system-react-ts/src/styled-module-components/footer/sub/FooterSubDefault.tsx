import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { FooterSubWebProps } from './FooterSubProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Footer Sub Component - Subfooter
 * @param children {ReactNode} Children for Subfooter
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 */
const FooterSub = ({ children, className, classList, ...others }: FooterSubWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.isFooterSub,
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      <div>{children}</div>
    </div>
  )
}

export default FooterSub
