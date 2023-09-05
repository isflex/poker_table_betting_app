import React from 'react'
import classNames from 'classnames'
import { has, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { ToolbarWebProps } from './ToolbarProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Toolbar Component
 * @param className {string} Additionnal CSS Classes
 * @param background {BackgroundStyle} Custom background color
 */
const Toolbar = ({ className, classList, background, ...others }: ToolbarWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.toolbar,
    background && styles[camelCase(has(background.getClassName())) as keyof Styles],
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default Toolbar
