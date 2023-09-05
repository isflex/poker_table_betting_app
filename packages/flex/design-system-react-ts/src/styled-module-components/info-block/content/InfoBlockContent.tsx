import React from 'react'
import classNames from 'classnames'
import { InfoBlockContentProps } from './InfoBlockContentProps'
import { is, has } from '../../../services'
import { Columns, ColumnsItem } from '../../columns'
import { Text } from '../../text'

/**
 * Info Block Content
 * @param children {ReactNode} Children content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param size {number} Sizes available => 1 - 12
 */
const InfoBlockContent = ({ className, size, children, ...others }: InfoBlockContentProps): React.JSX.Element => {
  const classes = classNames('info-block-content', has('text-centered'), className)

  return (
    <div className={classes} {...others}>
      <Columns className={is('vcentered')} centered>
        <ColumnsItem size={size || 8}>
          <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
          </div>
        </ColumnsItem>
      </Columns>
    </div>
  )
}

export default InfoBlockContent
