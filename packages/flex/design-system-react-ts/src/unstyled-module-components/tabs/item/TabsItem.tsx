import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Text, TextMarkup } from '../../text'
import { TabsItemProps } from './TabsItemProps'

/**
 * Tabs Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TabsItem = ({ active, children, className, onClick, ...others }: TabsItemProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<boolean>(active || false)

  // accessibility
  const a11y = {
    li: {
      role: 'presentation',
    },
    a: {
      role: 'tab',
      'aria-selected': activeItem,
    },
  }

  useEffect(() => {
    setActiveItem(active || false)
  }, [active])

  return (
    <li
      className={classNames(className, { 'is-active': activeItem })}
      {...a11y.li}
      {...others}
      onClick={(e: React.MouseEvent) => {
        const target = e.target as HTMLFormElement
        setActiveItem(active || false)
        target.active = active
        if (onClick) {
          onClick(e)
        }
      }}
    >
      {children && typeof children.valueOf() === 'string' && (
        <Text markup={TextMarkup.A} {...a11y.a} {...others}>
          {String(children)}
        </Text>
      )}
    </li>
  )
}

export default TabsItem
