import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { AccordionBodyProps } from './AccordionBodyProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Accordion Body Component
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param children {ReactNode} Children for Accordion body
 */
const AccordionBody = ({ children, className, classList, ...others }: AccordionBodyProps): JSX.Element => (
  <div className={classNames(styles.accordionBody, styles.isClipped, className, validate(classList))} {...others}>
    <div className={styles.accordionContent}>{children}</div>
  </div>
)

export default AccordionBody
