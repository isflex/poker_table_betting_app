import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { FooterBodyWebProps } from './FooterBodyProps'

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
const FooterHeader = ({ children, className, classList, ...others }: FooterBodyWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.accordionBody,
    className,
    validate(classList)
  )

  const classesContent = classNames(styles.accordionContent)

  return (
    <div className={classes} {...others}>
      <div className={classesContent}>{children}</div>
    </div>
  )
}

export default FooterHeader
