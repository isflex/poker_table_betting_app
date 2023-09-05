import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { TitleProps } from './TitleProps'
import { TitleLevel, TitleMarkup } from './TitleEnum'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Default property (TitleLevel.LEVEL1 = 1) to level property
 */
const defaultProps: TitleProps = {
  level: TitleLevel.LEVEL1,
}

/**
 * Title component
 * @param children {ReactNode} Title child
 * @param level {TitleLevel|number} Title size : 1-7
 * @param inverted {Boolean} Title white color
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param markup {string} h1 | h2 | h3 | h4 | h5 | h6 | p | span | div
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param typo
 * @param skeleton
 * @param others
 */
const Title = ({
  level,
  markup,
  children,
  className,
  classList,
  typo,
  skeleton,
  inverted,
  ...others
}: TitleProps): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)
  const classes = classNames(
    {
      [styles.title]: true,
      [styles[camelCase(is(`${level}`)) as keyof Styles]]: level,
    },
    typo,
    isLoading ? styles[camelCase(is('loading')) as keyof Styles] : styles[camelCase(is('loaded')) as keyof Styles],
    inverted && styles[camelCase(is('inverted')) as keyof Styles],
    className,
    validate(classList),
  )

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  /**
   * If no markup return div with default level 1
   * key in Enum works only in TS or with number enum for JS
   * for string enum (as in this case) we need to use Object.values.includes for JS usage
   * string enum aren't reverse mapped so the first solution doesn't work
   */
  const Tag = markup && (markup in TitleMarkup || Object.values(TitleMarkup).includes(markup)) ? markup : 'div'

  return (
    <Tag className={classes} {...others}>
      {children}
    </Tag>
  )
}

Title.defaultProps = defaultProps

export default Title
