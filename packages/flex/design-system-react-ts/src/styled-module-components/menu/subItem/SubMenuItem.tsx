import React from 'react'
import { SubMenuItemWebProps } from './SubMenuItemProps'

/**
 * SubMenuItem Component - A Sub Item Menu Component
 * @param children {ReactNode} Children for SubMenuItem
 * @param className {string} Additionnal CSS Classes
 */

const SubMenuItem = ({ className, ...others }: SubMenuItemWebProps): JSX.Element => (
  <ul className={className} {...others} />
)

export default SubMenuItem
