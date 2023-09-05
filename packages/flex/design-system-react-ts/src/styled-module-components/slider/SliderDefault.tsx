import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { SliderProps } from './SliderProps'
import { Columns, ColumnsItem } from '../columns'
import { Icon, IconName } from '../icon'
import { Text } from '../text'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

const { setupSlider } = await import('./setup')

/**
 * Slider component
 * @param children {ReactNode} Slider child
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param iconClassName {string} Additionnal css classes for Icon
 * @param motionLess {boolean} Disable behaviour on desktop
 */

type children = true | React.ReactChild | React.ReactFragment | React.ReactPortal

const Slider = ({ className, classList, iconClassName, children, motionLess, ...others }: SliderProps): React.JSX.Element => {
  // const [domReady, setDomReady] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const classes = classNames(
    motionLess && styles.isMotionlessDesktop,
    className,
    validate(classList)
  )
  const dotsClasses = classNames(styles.hasTextCentered, styles.isFullwidth)

  // React.useEffect(() => {
  //   setDomReady(true)
  // }, [])

  React.useEffect(() => {
    // if (ref.current && ref.current.dataset['data-slider-initialized'] === 'true') setupSlider(ref.current)
    if (ref.current) setupSlider(ref.current)
  }, [ref])

  return (
    <div className={classes} {...others} data-slider ref={ref}>
      {/* Multiple Childs */}
      {React.Children.toArray(children as children).length >= 2 ? (
        <Columns className={classNames(styles.isVcentered, styles.isClipped)} mobile>
          <ColumnsItem narrow>
            <Icon className={iconClassName} name={IconName.UI_ARROW_LEFT_R} data-slider-prev />
          </ColumnsItem>

          <ColumnsItem>
            <Columns mobile data-slider-pages>
              {children && typeof children.valueOf() === 'string' ? <Text>{children as string}</Text> : children}
            </Columns>
          </ColumnsItem>

          <ColumnsItem narrow>
            <Icon className={iconClassName} name={IconName.UI_ARROW_RIGHT_R} data-slider-next />
          </ColumnsItem>
        </Columns>
      ) : (
        <Columns flex centered>
          {children && typeof children.valueOf() === 'string' ? <Text>{children as string}</Text> : children}
        </Columns>
      )}

      {React.Children.toArray(children as children).length >= 2 &&
      <div className={dotsClasses}>
        <div className={styles.isGreyDark} data-slider-dots />
      </div>
      }
    </div>
  )
}

export default Slider
