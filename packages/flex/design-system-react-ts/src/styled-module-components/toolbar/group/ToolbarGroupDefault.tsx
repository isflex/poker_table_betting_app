import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { ToolbarGroupWebProps } from './ToolbarGroupProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Toolbar Group
 * @param className {string} Additionnal CSS Classes
 * @param elastic {boolean} Is elastic
 */
const ToolbarGroup = ({ className, classList, elastic, ...others }: ToolbarGroupWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.toolbarGroup,
    elastic && styles.isElastic,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default ToolbarGroup
