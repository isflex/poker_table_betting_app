import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { ButtonListWebProps } from './ButtonListProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Button List Component
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 */
const ButtonList = ({ className, classList, ...others }: ButtonListWebProps): JSX.Element => (
  <div className={classNames(styles.buttons, className, validate(classList))} {...others} />
)

export default ButtonList
