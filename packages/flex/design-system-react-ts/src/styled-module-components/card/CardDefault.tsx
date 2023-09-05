import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { CardProps } from './CardProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Card Component
 * @param flat Adding border for Card content
 * @param horizontal Horizontal Card orientation
 * @param floating Floating card
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 * @param skeleton Loading card
 */
const Card = ({ className, classList, flat, horizontal, floating, skeleton, ...others }: CardProps): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  const classes = classNames(
    styles.card,
    flat && styles.isFlat,
    horizontal && [styles.isHorizontal, styles.isVcentered],
    floating && styles.isFloating,
    isLoading ? styles.isLoading : styles.isLoaded,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default Card
