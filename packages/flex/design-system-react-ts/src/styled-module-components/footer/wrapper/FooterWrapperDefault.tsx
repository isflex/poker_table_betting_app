import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { FooterWrapperWebProps } from './FooterWrapperProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Footer Wrapper Component - Article for Header & Body
 * @param children {ReactNode} Children for Subfooter
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 */
const FooterWrapper = ({ className, classList, ...others }: FooterWrapperWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.accordion,
    styles.isActive,
    className,
    validate(classList)
  )

  return <article className={classes} {...others} />
}

export default FooterWrapper
