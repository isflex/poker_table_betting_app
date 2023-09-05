import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { ToolbarSpaceWebProps } from './ToolbarSpaceProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Toolbar Space Component
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 */
const ToolbarSpace = ({ className, classList, ...others }: ToolbarSpaceWebProps): JSX.Element => (
  <div className={classNames(styles.toolbarSpace, className, validate(classList))} {...others} />
)

export default ToolbarSpace
