import React from 'react'
import classNames from 'classnames'
import { FooterWrapperWebProps } from './FooterWrapperProps'
import { is } from '../../../services'

/**
 * Footer Wrapper Component - Article for Header & Body
 * @param children {ReactNode} Children for Subfooter
 * @param className {string} Additionnal CSS Classes
 */
const FooterWrapper = ({ className, ...others }: FooterWrapperWebProps): JSX.Element => {
  const classes = classNames('accordion', is('active'), className)

  return <article className={classes} {...others} />
}

export default FooterWrapper
