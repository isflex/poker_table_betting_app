import React from 'react'
import classNames from 'classnames'
import { has, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { HeroProps } from './HeroProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Hero Component
 * @param children {ReactNode} Hero Children
 * @param backgroundSrc {string} If source, it will display background option
 * @param variant {VariantState} Hero background color : primary|secondary|tertiary
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 */
const Hero = ({ children, className, classList, backgroundSrc, variant, ...others }: HeroProps): React.JSX.Element => {
  const classes = classNames(
    styles.hero,
    variant && styles[camelCase(has(`background-${variant.getClassName()}`)) as keyof Styles],
    backgroundSrc && [styles.isPrimary, styles.hasBackground],
    className,
    validate(classList)
  )

  if (variant) {
    return (
      <section className={classes} {...others}>
        <div className={classNames(styles.heroBody)}>{children}</div>
      </section>
    )
  }

  return (
    <section
      {...(backgroundSrc && { style: { backgroundImage: `url(${backgroundSrc})` } })}
      className={classes}
      {...others}
    >
      <div className={classNames(styles.heroBody)}>{children}</div>
    </section>
  )
}

export default Hero
