import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { SectionWebProps } from './SectionProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param skeleton
 * @param others
 */
const Section = ({ className, classList, skeleton, ...others }: SectionWebProps): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  return <section className={classNames(
    styles.section,
    isLoading ? styles[camelCase(is('loading')) as keyof Styles] : styles[camelCase(is('loaded')) as keyof Styles],
    className,
    validate(classList),
  )} {...others} />
}

export default Section
