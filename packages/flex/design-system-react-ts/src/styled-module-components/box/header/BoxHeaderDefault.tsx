import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { Text } from '../../text'
import { BoxHeaderProps } from './BoxHeaderProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Box Header Component
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param children {ReactNode} Children
 * @param help {string} Box Header Help Sticker
 */
const BoxHeader = ({ children, className, classList, help, ...others }: BoxHeaderProps): JSX.Element => (
  <header className={classNames(styles.boxHeader, className, validate(classList))} {...others}>
    {children && typeof children.valueOf() === 'string' ? <p>{children}</p> : children}
    {help && <Text className='box-header-help sticker is-small is-success'>{String(children)}</Text>}
  </header>
)

export default BoxHeader
