import React from 'react'
import { ViewProps } from './ViewProps'
import classNames from 'classnames'
import { is } from 'flex-design-system-react-ts/services'

/**
 * View Component (DIV EQUIVALENT)
 * @param children {string} View child
 * @param style {CSSProperties} View custom style
 * - ------------------ WEB PROPERTIES ---------------
 * @param className {string} Additionnal css classes
 * @param loading {Loading} Loading View
 */
const View = ({ children, style, className, loading, ...others }: ViewProps): React.JSX.Element => {
  const classes = classNames(loading && is(loading.getClassName()), className)
  if (!children) {
    return <div style={style} {...others} />
  }

  return (
    <div style={style} className={classes} {...others}>
      {children}
    </div>
  )
}

export default View
