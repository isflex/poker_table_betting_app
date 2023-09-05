import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { AccordionProps } from './AccordionProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Accordion Component
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param boxed {boolean} Boxed Accordion
 */
const Accordion = ({ className, classList, boxed, ...others }: AccordionProps): React.JSX.Element => {
  const classes = classNames(styles.accordions, boxed && styles[camelCase(is('boxed')) as keyof Styles], className, validate(classList))
  return <section className={classes} {...others} />
}

export default Accordion
