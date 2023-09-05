import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { BoxTableContainerProps } from './BoxTableContainerProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Box Table Component
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param children {ReactNode} Children
 */
const BoxTableContainer = ({ className, classList, ...others }: BoxTableContainerProps): JSX.Element => (
  <div className={classNames(styles.box, styles.tableContainer, className, validate(classList))} {...others} />
)

export default BoxTableContainer
