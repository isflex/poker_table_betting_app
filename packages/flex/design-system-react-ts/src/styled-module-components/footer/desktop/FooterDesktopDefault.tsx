import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { FooterDesktopWebProps } from './FooterDesktopProps'
import { Accordion } from '../../accordion'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Footer Desktop Component
 * @param children {ReactNode} Desktop Footer Children
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 * @param fullwidth {boolean} Footer fullwidth
 */
const FooterDesktop = ({ children, className, classList, fullwidth, ...others }: FooterDesktopWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.isHiddenTouch,
    styles.isFooterDesktop,
    fullwidth && styles.isFullwidth,
    className,
    validate(classList)
  )

  // Desktop Footer
  return (
    <Accordion className={classes} {...others}>
      {children}
    </Accordion>
  )
}

export default FooterDesktop
