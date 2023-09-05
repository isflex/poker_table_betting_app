import React from 'react'
import classNames from 'classnames'
import { AccordionProps } from './AccordionProps'
import { is } from '../../services/classify'

/**
 * Accordion Component
 * @param className {string} Additionnal CSS Classes
 * @param boxed {boolean} Boxed Accordion
 */
const Accordion = ({ className, boxed, ...others }: AccordionProps): JSX.Element => {
  const classes = classNames('accordions', boxed && is('boxed'), className)
  return <section className={classes} {...others} />
}

export default Accordion
