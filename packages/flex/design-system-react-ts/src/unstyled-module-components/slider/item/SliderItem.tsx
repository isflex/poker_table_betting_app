import React from 'react'
import classNames from 'classnames'
import { ColumnsItem } from '../../columns'
import { SliderItemProps } from './SliderItemProps'
import { is } from '../../../services'

/**
 * Slider Item component
 * @param className {string} Additionnal css classes
 * @param children {ReactNode} Slider Item child
 * @param active {boolean} Default active item
 */
const SliderItem = ({ children, active, className, ...others }: SliderItemProps): JSX.Element => {
  const classes = classNames(active && is('active'), className)

  return (
    <ColumnsItem size={12} className={classes} {...others} data-slider-page>
      {children}
    </ColumnsItem>
  )
}

export default SliderItem
