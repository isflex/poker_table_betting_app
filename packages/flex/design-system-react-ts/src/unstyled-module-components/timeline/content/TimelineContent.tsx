import React from 'react'
import classNames from 'classnames'
import { TimelineContentWebProps } from './TimelineContentProps'
import { Text, TextMarkup } from '../../text'
import { Link } from '../../link'
// import { BrowserRouter } from 'react-router-dom'
// import { FlexBrowserRouter } from '@flexiness/domain-lib-flex-browser-router'

/**
 * Timeline Content Component
 * @param children {ReactNode} Use it if you want custom children for content
 * @param className {string} Additionnal CSS Classes
 * @param heading {string} Text heading
 * @param content {string} Text content
 * @param link {string} Url link
 * @param contentLink {string} Text for link
 */
const TimelineContent = ({
  children,
  className,
  heading,
  content,
  link,
  contentLink,
  ...others
}: TimelineContentWebProps): JSX.Element => {
  const classes = classNames('timeline-content', className)

  if (children) {
    return <div className={classes} {...others} />
  }

  return (
    <div className={classes} {...others}>
      {/* <FlexBrowserRouter> */}
      {heading && (
        <Text className='heading' markup={TextMarkup.P}>
          {heading}
        </Text>
      )}
      {content && <Text markup={TextMarkup.P}>{content}</Text>}
      {link && (
        <Link removeLinkClass plain to={link}>
          {contentLink || link}
        </Link>
      )}
      {/* </FlexBrowserRouter> */}
    </div>
  )
}

export default TimelineContent
