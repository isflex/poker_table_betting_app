import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
// import { camelCase } from 'lodash'
import { FooterWebProps } from './FooterProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Footer Component
 * @param children {ReactNode} Footer Children
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 * @param fullwidth {boolean} Footer fullwidth
 */
const Footer = ({ children, className, classList, fullwidth, ...others }: FooterWebProps): React.JSX.Element => {
  const classes = classNames(
    fullwidth && styles.isFullwidth,
    className,
    validate(classList)
  )

  return (
    <footer className={classes} {...others}>
      <div className={styles.footer}>{children}</div>
    </footer>
  )
}

export default Footer
