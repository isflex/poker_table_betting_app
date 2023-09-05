import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { SectionWebProps } from './SectionProps'
import { is } from '../../services'

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param className {string} Additionnal CSS Classes
 * @param skeleton
 * @param others
 */
const Section = ({ className, skeleton, ...others }: SectionWebProps): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  return <section className={classNames('section', className, isLoading ? is('loading') : is('loaded'))} {...others} />
}

export default Section
