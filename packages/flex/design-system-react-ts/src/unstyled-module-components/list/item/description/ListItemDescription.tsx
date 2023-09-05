import React from 'react'
import { ListItemDescriptionProps } from './ListItemDescriptionProps'

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 */

const ListItemDescription = ({ children, className }: ListItemDescriptionProps): JSX.Element => {
  return <dd className={className}>{children}</dd>
}

export default ListItemDescription
