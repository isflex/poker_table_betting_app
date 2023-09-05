import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { TimelineItemWebProps } from './TimelineItemProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Timeline Item Component
 * @param className {string} Additionnal CSS Classes
 * @param active {boolean} Active Timeline Item
 */
const TimelineItem = ({ className, classList, active, ...others }: TimelineItemWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.timelineItem,
    active && styles.active,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default TimelineItem
