import React from 'react'
import classNames from 'classnames'
import { InfoBlockHeaderProps } from './InfoBlockHeaderProps'
import { has } from '../../../services'
import { Icon, IconName } from '../../icon'
import { Title, TitleLevel } from '../../title'

/**
 * Info Block Header
 * @param children {string} Header title content
 * @param status {InfoBlockStatus} Icon status for header => SUCCESS|WARNING|DANGER
 * @param customIcon {IconName} Custom Icon for Info Block Header
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const InfoBlockHeader = ({ className, status, children, customIcon, ...others }: InfoBlockHeaderProps): JSX.Element => {
  const classes = classNames('info-block-header', has('text-centered'), className)

  return (
    <header className={classes} {...others}>
      {status && (
        <Icon
          name={
            (customIcon && customIcon) || (status === 'warning' && IconName.EXCLAMATION_CIRCLE) || IconName.CHECK_CIRCLE
          }
          className={classNames('is-large', {
            'is-warning': status === 'warning',
            'is-success': status === 'success',
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
