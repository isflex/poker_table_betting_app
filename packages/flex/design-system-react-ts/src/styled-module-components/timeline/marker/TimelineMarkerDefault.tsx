import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { TimelineMarkerWebProps } from './TimelineMarkerProps'
import { Icon, IconSize } from '../../icon'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Timeline Item Component
 * @param className {string} Additionnal CSS Classes
 * @param iconClassname {string} Additionnal CSS Classes for icon
 * @param iconName {IconName} Icon Name - sample : IconName.ENVELOPE
 */
const TimelineItem = ({ className, classList, iconClassname, iconName, ...others }: TimelineMarkerWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.timelineMarker,
    styles.isIcon,
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      <div className={styles.cardHeaderIcon}>
        <Icon className={classNames(iconClassname, styles.hasTextGrey)} name={iconName} size={IconSize.SMALL} />
      </div>
    </div>
  )
}

export default TimelineItem
