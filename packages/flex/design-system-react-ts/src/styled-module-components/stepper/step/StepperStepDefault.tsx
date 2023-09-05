import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { StepperStepProps } from './StepperStepProps'
import { StepperStepMarkup } from './StepperStepEnum'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Stepper Step Component
 * @param children {ReactNode} Stepper Step Children
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param active {boolean} Active step
 * @param markup {StepperStepMarkup} Markup for Step - P|SPAN|DIV|A
 * @param current {boolean} Current step
 * @param done {boolean} Step done
 * @param label {string} Step label
 * @param step {number|string} Step text circle
 */
const StepperStep = ({
  children,
  className,
  classList,
  active,
  markup,
  current,
  done,
  label,
  step,
  ...others
}: StepperStepProps): React.JSX.Element => {
  const classes = classNames(
    styles.step,
    active && styles[camelCase(is('active')) as keyof Styles],
    current && styles[camelCase(is('current')) as keyof Styles],
    done && styles[camelCase(is('done')) as keyof Styles],
    className,
    validate(classList),
  )

  /**
   * If no markup return div
   */
  const Tag =
    markup && (markup in StepperStepMarkup || Object.values(StepperStepMarkup).includes(markup))
      ? markup
      : StepperStepMarkup.DIV

  return (
    <Tag className={classes} data-label={label} {...others}>
      {step || children}
    </Tag>
  )
}

export default StepperStep
