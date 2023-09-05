import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
// import { camelCase } from 'lodash'
import { DisclaimerItemWebProps } from './DisclaimerItemProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Disclaimer Item component
 * @param children {ReactNode} Diclaimer Item Children
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 */
const DisclaimerItem = ({ className, classList, ...others }: DisclaimerItemWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.disclaimerItem,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default DisclaimerItem
