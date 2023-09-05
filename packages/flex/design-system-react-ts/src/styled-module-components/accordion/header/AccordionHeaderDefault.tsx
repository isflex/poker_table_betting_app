import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { AccordionHeaderProps } from './AccordionHeaderProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

// accessibility
const a11y = {
  'aria-label': 'toggle',
}

/**
 * Accordion Header
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param toggle {boolean} Toggle Header
 * @param toggleBox {string} toggle direction
 * @param toggleBoxClass {string} Additionnal Classes for toggle box
 */
const AccordionHeader = ({
  children,
  className,
  classList,
  toggle,
  toggleBox,
  toggleBoxClass,
  ...others
}: AccordionHeaderProps): React.JSX.Element => {
  const toggleBtnClasses = classNames(styles.toggle, styles.button, styles.isBordered, styles.isShadowless, toggleBoxClass)

  return (
    <div className={classNames(styles.accordionHeader, className, validate(classList))} {...others}>
      {toggleBox === 'left' && <button className={toggleBtnClasses} {...a11y} />}
      {children}
      {toggle && <button className={styles.toggle} {...a11y} />}
      {toggleBox === 'right' && <button className={toggleBtnClasses} {...a11y} />}
    </div>
  )
}

export default AccordionHeader
