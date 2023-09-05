import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { TimelineWebProps } from './TimelineProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Timeline Component
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 * @param notifications {boolean} Timeline notification rendering
 */
const Timeline = ({ className, classList, notifications, ...others }: TimelineWebProps): React.JSX.Element => {
  const classes = classNames(styles.timeline, notifications && notifications, className, validate(classList))

  return <div className={classes} {...others} />
}

export default Timeline
