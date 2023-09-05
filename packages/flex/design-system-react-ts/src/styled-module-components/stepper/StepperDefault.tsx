import React from 'react'
import classNames from 'classnames'
import { has, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { StepperProps } from './StepperProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Stepper Component
 * @param className Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 * @param centered Center the stepper
 */
const Stepper = ({ className, classList, centered, ...others }: StepperProps): React.JSX.Element => {
  const classes = classNames(styles.stepper, className, validate(classList))

  const centerClasses = classNames(styles.section, styles[camelCase(has('text-centered')) as keyof Styles], className)

  if (centered) {
    return (
      <section className={centerClasses}>
        <div className={classes} {...others} />
      </section>
    )
  }

  return <div className={classes} {...others} />
}

export default Stepper
