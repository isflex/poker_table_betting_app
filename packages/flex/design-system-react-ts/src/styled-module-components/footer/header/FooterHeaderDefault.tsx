import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { FooterHeaderWebProps } from './FooterHeaderProps'

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
const FooterHeader = ({ className, classList, ...others }: FooterHeaderWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.accordionHeader,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default FooterHeader
