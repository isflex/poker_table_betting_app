import React from 'react'
import classNames from 'classnames'
import { AccordionProps } from './AccordionProps'
import { is } from 'flex-design-system-react-ts/services'

/**
 * Accordion Component
 * @param className {string} Additionnal CSS Classes
 * @param boxed {boolean} Boxed Accordion
 */
const Accordion = ({ className, boxed, ...others }: AccordionProps): React.JSX.Element => {
  const classes = classNames('accordions', boxed && is('boxed'), className)
  return <section className={classes} {...others} />
}

export default Accordion
