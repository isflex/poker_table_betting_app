import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import TabsItem from './item'
import { Text } from '../text'
import { TabsProps } from './TabsProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param onClick onClick event
 * @param activeIndex {number} default active tab index
 * @param disabled {boolean} Disabled tabs
 * @param clipped {boolean} Remove the separator bar
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param centered {boolean} Centered tabs
 * @param rightAlign {boolean} Tabs right align
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param fullwidth {boolean} Fullwidth tabs
 */
const Tabs = ({
  children,
  className,
  classList,
  onClick,
  activeIndex,
  disabled,
  rightAlign,
  clipped,
  fullwidth,
  centered,
  ...others
}: TabsProps): React.JSX.Element => {
  const [activateIndex, setActivateIndex] = useState<number>(activeIndex || 0)

  const classes = classNames(
    styles.tabs,
    rightAlign && styles[camelCase(is('right')) as keyof Styles],
    clipped && styles[camelCase(is('clipped')) as keyof Styles],
    fullwidth && styles[camelCase(is('fullwidth')) as keyof Styles],
    centered && styles[camelCase(is('centered')) as keyof Styles],
    className,
    validate(classList),
  )

  const isActive = (index: number, childPropsActive: React.ReactNode) => {
    if (typeof childPropsActive !== 'undefined' && !activateIndex) {
      return childPropsActive
    }
    if (index === activateIndex) {
      return true
    }
  }

  const toggleActive = (e: React.MouseEvent, index: number) => {
    if (disabled) {
      return false
    }
    setActivateIndex(index)
    if (onClick) {
      onClick(e)
    }
  }

  useEffect(() => {
    setActivateIndex(activateIndex)
  }, [activateIndex])

  return (
    <div className={classes} role='tablist' {...others}>
      <ul>
        {children &&
          Array.isArray(children) &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          children.map((child: any, index: number) => {
            const props = {
              active: Boolean(isActive(index, child.props.active)) || false,
              key: index,
              tabIndex: index,
              onClick: (event: React.MouseEvent) => {
                toggleActive(event, index)
                if (child) {
                  if (child.props.onClick) {
                    child.props.onClick(event)
                  }
                }
              },
            }
            return typeof child.valueOf() === 'string' ? (
              <TabsItem active={props.active} onClick={(e: unknown) => onClick && onClick(e)}>
                <Text>{String(child)}</Text>
              </TabsItem>
            ) : (
              React.cloneElement(child, props)
            )
          })}
      </ul>
    </div>
  )
}

export default Tabs
