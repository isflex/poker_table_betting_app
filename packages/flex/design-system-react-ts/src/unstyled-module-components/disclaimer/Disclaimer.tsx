import React from 'react'
import classNames from 'classnames'
import { DisclaimerWebProps } from './DisclaimerProps'
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from '../accordion'
import { is } from '../../services/index'
import { Title, TitleLevel } from '../title'
import { Text } from '../text'

/**
 * Disclaimer component
 * @param children {React.ReactNode|string} Disclaimer Item Children
 * @param className {string} Additionnal css classes
 * @param title {string} Disclaimer Title
 * @param active {boolean} Active Disclaimer Bar
 */
const Disclaimer = ({ children, className, title, active, ...others }: DisclaimerWebProps): JSX.Element => {
  const classes = classNames('disclaimer', is('tri'), className)

  const wrapperClasses = classNames('disclaimer-header', is('grouped'), is('tri'))

  const classesBody = classNames('accordion-body', is('clipped'), is('tri'))

  const classesContent = classNames('disclaimer-content', active && is('active'), 'subtitle', is('tri'))

  return (
    <Accordion className={classes} {...others}>
      <AccordionItem>
        <AccordionHeader className={wrapperClasses} toggleBox='left' toggleBoxClass={is('bordered')}>
          <Title className={is('tri')} level={TitleLevel.LEVEL6}>
            {title}
          </Title>
        </AccordionHeader>
        <AccordionBody className={classesBody}>
          <div className={classesContent}>
            {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export default Disclaimer
