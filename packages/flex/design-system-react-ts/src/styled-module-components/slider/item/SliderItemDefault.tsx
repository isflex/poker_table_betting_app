import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { ColumnsItem } from '../../columns'
import { SliderItemProps } from './SliderItemProps'
// import { Fade } from 'react-awesome-reveal'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Slider Item component
 * @param className {string} Additionnal css classes
 * @param children {ReactNode} Slider Item child
 * @param active {boolean} Default active item
 */
const SliderItem = ({ children, active, className, classList, ...others }: SliderItemProps): React.JSX.Element => {
  const classes = classNames(
    active && styles.isActive,
    className,
    validate(classList)
  )

  return (
    // <Slide direction='right'>
    //   <ColumnsItem size={12} className={classes} {...others} data-slider-page>
    //     {children}
    //   </ColumnsItem>
    // </Slide>
    // <Fade cascade={true} damping={0.25} triggerOnce={true} direction='right' duration={1000}>
    //   <ColumnsItem size={12} className={classes} {...others} data-slider-page>
    //     {children}
    //   </ColumnsItem>
    // </Fade>
    <ColumnsItem size={12} className={classes} {...others} data-slider-page>
      {children}
    </ColumnsItem>
  )
}

export default SliderItem
