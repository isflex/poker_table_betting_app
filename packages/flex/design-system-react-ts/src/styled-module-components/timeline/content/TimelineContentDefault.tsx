import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { TimelineContentWebProps } from './TimelineContentProps'
import { Text, TextMarkup } from '../../text'
import { Link } from '../../link'
// import { Route, BrowserRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import { FlexBrowserRouter } from '@flexiness/domain-lib-flex-browser-router'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Timeline Content Component
 * @param children {ReactNode} Use it if you want custom children for content
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 * @param heading {string} Text heading
 * @param content {string} Text content
 * @param link {string} Url link
 * @param contentLink {string} Text for link
 */
const TimelineContent = ({
  children,
  className,
  classList,
  heading,
  content,
  link,
  contentLink,
  ...others
}: TimelineContentWebProps): React.JSX.Element => {
  const classes = classNames(styles.timelineContent, className, validate(classList))

  if (children) {
    return <div className={classes} {...others} />
  }

  return (
    <div className={classes} {...others}>
      {/* <BrowserRouter> */}
      {heading && (
        <Text className={styles.heading} markup={TextMarkup.P}>
          {heading}
        </Text>
      )}
      {content && <Text markup={TextMarkup.P}>{content}</Text>}
      {link && (
        <Link removeLinkClass plain to={link}>
          {contentLink || link}
        </Link>
      )}
      {/* <Route path='/' />
      </BrowserRouter> */}
    </div>
  )
}

export default TimelineContent
