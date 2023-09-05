import React from 'react'
import classNames from 'classnames'
import { Text } from '../text'
import { TileProps } from './TileProps'
import { TileMarkup } from './TileEnum'
import { is } from '../../services'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Tile Component
 * @param children {ReactNode} Tile Children
 * @param className {string} Additionnal CSS Classes
 * @param onClick {Function} onClick Event
 * @param to {string} link to url
 * @param ancestor {boolean} Tile is an ancestor
 * @param child {boolean} Tile is a child
 * @param parent {boolean} Tile is a parent
 * @param vertical {boolean} Tile is vertical
 * @param markup {TileMarkup} HTML element : div|a
 */
const Tile = ({
  children,
  className,
  ancestor,
  child,
  markup = TileMarkup.DIV,
  onClick,
  to,
  parent,
  vertical,
  ...others
}: TileProps): JSX.Element => {
  const classes = classNames(
    'tile',
    ancestor && is('ancestor'),
    child && is('child'),
    parent && is('parent'),
    vertical && is('vertical'),
    className,
  )

  const Tag = markup

  const content: React.ReactNode = Array.isArray(children) ? (
    children.map((child: React.ReactNode, index: number) => {
      return child && typeof child.valueOf() === 'string' ? <Text key={index}>{String(child)}</Text> : child
    })
  ) : children && typeof children.valueOf() === 'string' ? (
    <Text>{String(children)}</Text>
  ) : (
    children
  )
  if (to != null) {
    return (
      <RouterLink className={classes} {...others} onClick={onClick} to={to}>
        <span>{content}</span>
      </RouterLink>
    )
  }
  return (
    <Tag className={classes} {...others} onClick={onClick}>
      {content}
    </Tag>
  )
}

export default Tile
