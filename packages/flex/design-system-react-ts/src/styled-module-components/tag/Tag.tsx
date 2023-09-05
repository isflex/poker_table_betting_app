import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { has, is } from '../../services/classify'
import { TagProps } from './TagProps'

/**
 * Tag Component
 * @param children {ReactNode} Add childrens for tag
 * @param variant {TagVariant} Available tag variants
 * @param deletable {boolean} Adding delete icon
 * @param inverted {boolean} Inverted tag
 * @param onClick {Function} OnClick Event
 * @param className {string} Additionnal CSS Classes
 **/
const Tag = ({ children, className, variant, deletable, onClick, inverted, ...others }: TagProps): React.JSX.Element => {
  const [display, setDisplay] = useState<boolean>(deletable || false)
  const classes = classNames(
    'tag',
    deletable && is('hidden'),
    variant && is(`${variant}`),
    inverted && is('inverted'),
    className
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickHandle = (e: any) => {
    setDisplay(!display)
    if (onClick) {
      onClick(e)
    }
  }

  const deleteClasses = classNames(
    'tags',
    variant && is(`${variant}`),
    deletable && [has('addons'), is('delete')],
    inverted && is('inverted'),
    className
  )

  useEffect(() => {
    setDisplay(deletable || false)
  }, [deletable])

  // Deletable tag
  if (deletable && display) {
    return (
      <div className={deleteClasses}>
        <span className={classNames('tag')}>{children}</span>
        <a onClick={onClickHandle} className={classNames('tag')} />
      </div>
    )
  }

  // Default tag
  return (
    <span onClick={onClick && onClick} className={classes} {...others}>
      {children}
    </span>
  )
}

export default Tag
