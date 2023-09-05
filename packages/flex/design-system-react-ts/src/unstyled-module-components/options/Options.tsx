import React from 'react'
import classNames from 'classnames'
import { OptionsProps } from './OptionsProps'
import { is } from '../../services'

/**
 * Options Component
 * @param className {string} Additionnal CSS Classes
 * @param inverted {boolean} Inverted options
 */
const Options = ({ className, inverted, ...others }: OptionsProps): JSX.Element => {
  const classes = classNames('options', inverted && is('inverted'), className)

  return <div className={classes} {...others} />
}

export default Options
