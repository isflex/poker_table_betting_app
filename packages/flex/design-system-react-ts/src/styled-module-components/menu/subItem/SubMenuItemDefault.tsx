import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { SubMenuItemWebProps } from './SubMenuItemProps'

/**
 * SubMenuItem Component - A Sub Item Menu Component
 * @param children {ReactNode} Children for SubMenuItem
 * @param className {string} Additionnal CSS Classes
 */

const SubMenuItem = ({ className, classList, ...others }: SubMenuItemWebProps): JSX.Element => (
  <ul className={classNames(className, validate(classList))} {...others} />
)

export default SubMenuItem
