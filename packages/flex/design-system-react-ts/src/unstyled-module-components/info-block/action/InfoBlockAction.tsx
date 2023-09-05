import React from 'react'
import classNames from 'classnames'
import { InfoBlockActionProps } from './InfoBlockActionProps'
import { has } from '../../../services'
import { Button } from '../../button'
import { VariantState } from '../../../objects/facets'

/**
 * Info Block Action
 * @param children {ReactNode} Button text content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const InfoBlockAction = ({ className, children, onClick, ...others }: InfoBlockActionProps): JSX.Element => {
  const classes = classNames('info-block-action', has('text-centered'), className)

  return (
    <div className={classes} {...others}>
      {children && typeof children.valueOf() === 'string' ? (
        <Button onClick={onClick} variant={VariantState.PRIMARY}>
          {children}
        </Button>
      ) : (
        children
      )}
    </div>
  )
}

export default InfoBlockAction
