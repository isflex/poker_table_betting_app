import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
// import { camelCase } from 'lodash'
import { BreadcrumbWebProps } from './BreadcrumbProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Breadcrumb Component
 * @param children {ReactNode} Breadcrumb Children
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 */
const Breadcrumb = ({ children, className, classList, ...others }: BreadcrumbWebProps): React.JSX.Element => {
  return (
    <nav className={classNames(styles.breadcrumb, className, validate(classList))} aria-label='breadcrumbs' {...others}>
      <ul>{children}</ul>
    </nav>
  )
}

export default Breadcrumb
