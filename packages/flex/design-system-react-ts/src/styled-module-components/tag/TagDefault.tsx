import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { TagProps } from './TagProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Tag Component
 * @param children {ReactNode} Add childrens for tag
 * @param variant {TagVariant} Available tag variants
 * @param deletable {boolean} Adding delete icon
 * @param inverted {boolean} Inverted tag
 * @param onClick {Function} OnClick Event
 * @param className {string} Additionnal CSS Classes
 **/
const Tag = ({ children, className, classList, variant, deletable, onClick, inverted, ...others }: TagProps): React.JSX.Element => {
  const [display, setDisplay] = useState<boolean>(deletable || false)
  const classes = classNames(
    styles.tag,
    deletable && styles.isHidden,
    variant && styles[camelCase(is(`${variant}`)) as keyof Styles],
    inverted && styles.isInverted,
    className,
    validate(classList)
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickHandle = (e: any) => {
    setDisplay(!display)
    if (onClick) {
      onClick(e)
    }
  }

  const deleteClasses = classNames(
    styles.tags,
    variant && styles[camelCase(is(`${variant}`)) as keyof Styles],
    deletable && [styles.hasAddons, is('delete')],
    inverted && styles.isInverted,
    className,
    validate(classList)
  )

  useEffect(() => {
    setDisplay(deletable || false)
  }, [deletable])

  // Deletable tag
  if (deletable && display) {
    return (
      <div className={deleteClasses}>
        <span className={classNames(styles.tag)}>{children}</span>
        <a onClick={onClickHandle} className={classNames(styles.tag)} />
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
