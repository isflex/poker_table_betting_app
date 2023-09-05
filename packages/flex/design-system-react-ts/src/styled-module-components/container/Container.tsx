import React from 'react'
import classNames from 'classnames'
import { ContainerProps } from './ContainerProps'
import { is } from 'flex-design-system-react-ts/services'

/**
 * Container Component
 * @param fluid {boolean} Make the container usable across the width of your section
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const Container = ({ className, fluid, ...others }: ContainerProps): React.JSX.Element => {
  const classes = classNames('container', fluid && is('fluid'), className)

  return <div className={classes} {...others} />
}

export default Container
