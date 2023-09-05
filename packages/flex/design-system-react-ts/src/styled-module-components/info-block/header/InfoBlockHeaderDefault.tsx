import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { InfoBlockHeaderProps } from './InfoBlockHeaderProps'
import { Icon, IconName } from '../../icon'
import { Title, TitleLevel } from '../../title'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Info Block Header
 * @param children {string} Header title content
 * @param status {InfoBlockStatus} Icon status for header => SUCCESS|WARNING|DANGER
 * @param customIcon {IconName} Custom Icon for Info Block Header
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const InfoBlockHeader = ({ className, classList, status, children, customIcon, ...others }: InfoBlockHeaderProps): React.JSX.Element => {
  const classes = classNames(
    'info-block-header',
    styles.hasTextCentered,
    className,
    validate(classList)
  )

  return (
    <header className={classes} {...others}>
      {status && (
        <Icon
          name={
            (customIcon && customIcon) || (status === 'warning' && IconName.EXCLAMATION_CIRCLE) || IconName.CHECK_CIRCLE
          }
          className={classNames(styles.isLarge, {
            [styles.isWarning]: status === 'warning',
            [styles.isSuccess]: status === 'success',
          })}
        />
      )}
      <span>
        {children && typeof children.valueOf() === 'string' ? (
          <Title level={TitleLevel.LEVEL3}>{children}</Title>
        ) : (
          children
        )}
      </span>
    </header>
  )
}

export default InfoBlockHeader
