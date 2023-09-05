import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { IconProps } from '../IconProps'
import { IconName } from '../IconNameEnum'
import { IconStatus } from '../IconEnum'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

const StatusIcon = ({
  className, classList, name, status, statusPosition, size, ...others
}: IconProps): React.JSX.Element => {
// }: IconProps): React.JSX.Element & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> => {
  const ancestorClasses = classNames(
    styles.icon,
    size && styles[camelCase(is(`${size}`)) as keyof Styles],
    styles.isAncestor,
    styles.hasStatus,
    className,
    validate(classList)
  )

  const descendantClasses = classNames(
    styles.icon,
    styles.isCircled,
    styles.isDescendant,
    status && styles[camelCase(is(`${status}`)) as keyof Styles],
    statusPosition && styles[camelCase(is(`${statusPosition}`)) as keyof Styles],
  )

  const iconName = styles[camelCase(name) as keyof Styles]
  const descendantIcon = status === IconStatus.SUCCESS ? IconName.UI_CHECK_CIRCLE_S : IconName.UI_TIMES_CIRCLE_S
  const descendantIconName = styles[camelCase(descendantIcon) as keyof Styles]

  return (
    <span className={ancestorClasses} aria-hidden='true' {...others}>
      <span className={iconName}>
        <span className={descendantClasses}>
          <span className={descendantIconName} />
        </span>
      </span>
    </span>
  )
}

export default StatusIcon
