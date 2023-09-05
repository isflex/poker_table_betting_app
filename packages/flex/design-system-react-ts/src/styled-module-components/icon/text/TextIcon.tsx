import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import { IconProps } from '../IconProps'
import { IconPosition, TextIconMarkup } from '../IconEnum'
import { is } from '../../../services'

const TextIcon = ({
  className, textClassName, name, content, position, markup, ...others
}: IconProps): React.JSX.Element => {
// }: IconProps): React.JSX.Element | React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> => {
  const Tag = markup && (markup in TextIconMarkup || Object.values(TextIconMarkup).includes(markup)) ? markup : 'span'

  if (position) {
    return (
      <span
        className={classNames(
          'icon-and-text',
          (position === IconPosition.UP || position === IconPosition.DOWN) && is('stacked'),
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
    <span className={classNames('icon-and-text', className)}>
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
