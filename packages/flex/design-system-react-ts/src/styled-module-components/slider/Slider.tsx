import React from 'react'
import classNames from 'classnames'
import { SliderProps } from './SliderProps'
import { Columns, ColumnsItem } from '../columns'
import { Icon, IconName } from '../icon'
import { Text } from '../text'
import { is, has } from '../../services'

/**
 * Slider component
 * @param children {ReactNode} Slider child
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param iconClassName {string} Additionnal css classes for Icon
 * @param motionLess {boolean} Disable behaviour on desktop
 */

type children = true | React.ReactChild | React.ReactFragment | React.ReactPortal

const Slider = ({ className, iconClassName, children, motionLess, ...others }: SliderProps): React.JSX.Element => {
  const classes = classNames(motionLess && is('motionless-desktop'), className)
  const dotsClasses = classNames(has('text-centered'), is('fullwidth'))

  return (
    <div className={classes} {...others} data-slider>
      {/* Multiple Childs */}
      {React.Children.toArray(children as children).length >= 2 ? (
        <>
          <Columns className={is('vcentered')} mobile>
            <ColumnsItem narrow>
              <Icon className={iconClassName} name={IconName.UI_ARROW_LEFT_R} data-slider-prev />
            </ColumnsItem>

            <ColumnsItem>
              <Columns className={is('overflow-hidden')} mobile data-slider-pages>
                {children && typeof children.valueOf() === 'string' ? <Text>{children as string}</Text> : children}
              </Columns>
            </ColumnsItem>

            <ColumnsItem narrow>
              <Icon className={iconClassName} name={IconName.UI_ARROW_RIGHT_R} data-slider-next />
            </ColumnsItem>
          </Columns>

          <div className={dotsClasses}>
            <div className={is('dark')} data-slider-dots />
          </div>
        </>
      ) : (
        <Columns flex centered>
          {children && typeof children.valueOf() === 'string' ? <Text>{children as string}</Text> : children}
        </Columns>
      )}
    </div>
  )
}

export default Slider
