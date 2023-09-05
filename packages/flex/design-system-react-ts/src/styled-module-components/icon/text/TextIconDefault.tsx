import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import Icon from '../IconDefault'
import { IconProps } from '../IconProps'
import { IconPosition, TextIconMarkup } from '../IconEnum'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

const TextIcon = ({
  className, classList, textClassName, name, content, position, markup, ...others
}: IconProps): React.JSX.Element => {
// }: IconProps): React.JSX.Element & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> => {
  const Tag = markup && (markup in TextIconMarkup || Object.values(TextIconMarkup).includes(markup)) ? markup : 'span'

  if (position) {
    return (
      <span
        className={classNames(
          styles.iconAndText,
          (position === IconPosition.UP || position === IconPosition.DOWN) && styles.isStacked,
          className,
        )}
      >
        {
          (position === IconPosition.RIGHT || position === IconPosition.DOWN) &&
            content &&
            (content && typeof content.valueOf() === 'string' ? (
              <Tag className={textClassName}>{String(content)}</Tag>
            ) : (
              content
            ))
          // <Tag className={textClassName}>{content}</Tag>
        }
        <Icon name={name} className={className} {...others} />
        {
          (position === IconPosition.UP || position === IconPosition.LEFT) &&
            content &&
            (content && typeof content.valueOf() === 'string' ? (
              <Tag className={textClassName}>{String(content)}</Tag>
            ) : (
              content
            ))
          // <Tag className={textClassName}>{content}</Tag>
        }
      </span>
    )
  }

  return (
    <span className={classNames(styles.iconAndText, className, validate(classList))}>
      <Icon name={name} {...others} />
      {content && typeof content.valueOf() === 'string' ? (
        <Tag className={textClassName}>{String(content)}</Tag>
      ) : (
        content
      )}
      {/* {content && <Tag className={textClassName}>{content}</Tag>} */}
    </span>
  )
}

export default TextIcon
