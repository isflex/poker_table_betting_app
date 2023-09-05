import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { OptionsProps } from './OptionsProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Options Component
 * @param className {string} Additionnal CSS Classes
 * @param inverted {boolean} Inverted options
 */
const Options = ({ className, classList, inverted, ...others }: OptionsProps): React.JSX.Element => {
  const classes = classNames(
    styles.options,
    inverted && styles.isInverted,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default Options
