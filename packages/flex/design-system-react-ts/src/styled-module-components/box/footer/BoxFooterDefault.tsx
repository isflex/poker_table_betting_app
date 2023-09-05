import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { BoxFooterProps } from './BoxFooterProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Box Footer Component
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param children {ReactNode} Children
 */
const BoxFooter = ({ className, classList, children, ...others }: BoxFooterProps): JSX.Element => (
  <div className={classNames(styles.boxFooter, className, validate(classList))} {...others}>
    {children}
  </div>
)

export default BoxFooter
