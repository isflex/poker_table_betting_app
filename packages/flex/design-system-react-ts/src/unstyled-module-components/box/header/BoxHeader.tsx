import React from 'react'
import classNames from 'classnames'
import { Text } from '../../text'
import { BoxHeaderProps } from './BoxHeaderProps'

/**
 * Box Header Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children
 * @param help {string} Box Header Help Sticker
 */
const BoxHeader = ({ children, className, help, ...others }: BoxHeaderProps): JSX.Element => (
  <header className={classNames('box-header', className)} {...others}>
    {children && typeof children.valueOf() === 'string' ? <p>{children}</p> : children}
    {help && <Text className='box-header-help sticker is-small is-success'>{String(children)}</Text>}
  </header>
)

export default BoxHeader
