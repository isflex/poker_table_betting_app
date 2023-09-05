import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { ColumnsItemProps } from './ColumnsItemProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Columns Item Component - Columns Child
 * @param size {ColumnsSize} Size 1-12
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param narrow {boolean} Narrow column item
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 * @param mobileSize {ColumnsSize} Apply => is-size-mobile
 * @param tabletSize {ColumnsSize} Apply => is-size-tablet
 * @param desktopSize {ColumnsSize} Apply => is-size-desktop
 */
const ColumnsItem = ({
  className,
  classList,
  size,
  mobileSize,
  tabletSize,
  desktopSize,
  narrow,
  ...others
}: ColumnsItemProps): React.JSX.Element => {
  const classes = classNames(
    styles.column,
    size && styles[camelCase(is(`${size}`)) as keyof Styles],
    mobileSize && styles[camelCase(is(`${mobileSize}-mobile`)) as keyof Styles],
    tabletSize && styles[camelCase(is(`${tabletSize}-tablet`)) as keyof Styles],
    desktopSize && styles[camelCase(is(`${desktopSize}-desktop`)) as keyof Styles],
    narrow && styles.isNarrow,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}
export default ColumnsItem
