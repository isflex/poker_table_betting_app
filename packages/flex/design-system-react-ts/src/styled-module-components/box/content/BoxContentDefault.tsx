import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { BoxContentProps } from './BoxContentProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Box Content
 * @param children {ReactNode} Box Content Children
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 */
const BoxContent = ({ children, className, classList, ...others }: BoxContentProps): React.JSX.Element => {
  return (
    <div className={classNames(styles.boxContent, className, validate(classList))} {...others}>
      {children}
    </div>
  )
}

export default BoxContent
