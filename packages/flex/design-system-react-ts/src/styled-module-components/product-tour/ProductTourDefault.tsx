import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { is, has, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { ProductTourWebProps } from './ProductTourProps'
import { Icon, IconName, IconSize } from '../icon'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Product Tour Component
 * @param children {ReactNode} Title child
 * @param className {string} Additionnal css classes
 * @param active {boolean} Display component
 * @param arrowDirection {ArrowDirection} UP|BOTTOM||LEFT|RIGHT - Display arrow
 * @param arrowAlign {ArrowAlign} ONE_FIFTH|ONE_QUARTER|ONE_THRID|TWO_FIFTHS|THREE_FIFTHS|
 * TWO_THIRDS|THREE_QUARTERS|FOUR_FIFTHS
 * @param closeable {boolean} Display close icon
 * @param avatarSrc {string} Display avatar if source
 * @param avatarDirection {AvatarDirection} LEFT|RIGHT
 */
const ProductTour = ({
  children,
  className,
  classList,
  active,
  arrowDirection,
  arrowAlign,
  closeable,
  avatarSrc,
  avatarDirection,
  ...others
}: ProductTourWebProps): React.JSX.Element => {
  const [display, setDisplay] = useState<boolean>(active || false)

  useEffect(() => {
    setDisplay(active || false)
  }, [active])

  const classes = classNames(
    styles.productTour,
    display && styles.isActive,
    // avatarDirection && has(`icon-${avatarDirection}`),
    avatarDirection && styles[camelCase(has(`icon-${avatarDirection}`)) as keyof Styles],
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      {arrowDirection && (
        <div className={classNames(
          styles.arrow,
          styles[camelCase(is(arrowDirection)) as keyof Styles],
          arrowAlign && styles[camelCase(is(arrowAlign)) as keyof Styles]
        )} />
      )}
      {avatarSrc && (
        <span className={classNames(styles.icon, styles.isMedium)}>
          <img className={styles.isRounded} src={avatarSrc} />
        </span>
      )}
      {closeable && (
        <div style={{ cursor: 'pointer' }} onClick={() => setDisplay(!display)}>
          <Icon size={IconSize.SMALL} name={IconName.UI_TIMES} className={styles.close} />
        </div>
      )}
      <div className={'product-tour-content'}>{children}</div>
    </div>
  )
}

export default ProductTour
