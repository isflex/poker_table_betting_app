import React from 'react'
import { ViewProps } from './ViewProps'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * View Component (DIV EQUIVALENT)
 * @param children {string} View child
 * @param style {CSSProperties} View custom style
 * - ------------------ WEB PROPERTIES ---------------
 * @param className {string} Additionnal css classes
 * @param loading {Loading} Loading View
 * @param theme {Theme} Themed View
 */
const View = ({ children, style, className, classList, loading, theme, ...others }: ViewProps): React.JSX.Element => {
  const classes = classNames(
    loading && styles[camelCase(is(loading.getClassName())) as keyof Styles],
    className,
    validate(classList)
  )

  if (!children) {
    return <div style={style} {...theme ? { ['data-flex-theme']: theme } : {}} {...others} />
  }

  return (
    <div style={style} {...theme ? { ['data-flex-theme']: theme } : {}} className={classes} {...others}>
      {children}
    </div>
  )
}

export default View
