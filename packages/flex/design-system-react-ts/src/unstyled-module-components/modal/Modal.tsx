import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { is } from '../../services/classify'
import { ModalProps } from './ModalProps'
import { Box, BoxContent } from '../box'
import { Button, ButtonMarkup } from '../button'
import { Text } from '../text'
import { ModalMarkup } from './ModalEnum'

/**
 * Modal Component
 * @param active {boolean} Activated Modal
 * @param title {string} Title Modal
 * @param content {string} Content text for modal
 * @param triggerContent {string} Trigger custom element
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param triggerMarkup {ModalMarkup} h1|h2|h3|h4|h5|h6|p|span|div|button|a
 * @param triggerClassNames {string} Additionnal CSS Classes for trigger element
 * @param onClose {Function} Additionnal close custom function
 * @param onOpen {Function} Additionnal open custom function
 */
const Modal = ({
  children,
  className,
  active,
  title,
  content,
  triggerMarkup,
  triggerContent,
  triggerClassNames,
  ctaContent,
  ctaOnClick,
  onClose,
  onOpen,
  ...others
}: ModalProps): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(active || false)

  useEffect(() => {
    setDisplay(active || false)
  }, [active])

  const classes = classNames('modal', (display || active) && is('active'), className)

  /**
   * key in Enum works only in TS or with number enum for JS
   * for string enum (as in this case) we need to use Object.values.includes for JS usage
   * string enum aren't reverse mapped so the first solution doesn't work
   */
  const TriggerTag =
    triggerMarkup && (triggerMarkup in ModalMarkup || Object.values(ModalMarkup).includes(triggerMarkup))
      ? triggerMarkup
      : 'button'

  if (children) {
    return (
      <div>
        {triggerContent && (
          <TriggerTag
            onClick={(e: React.MouseEvent) => {
              setDisplay(true)
              if (onOpen) onOpen(e)
            }}
            className={triggerClassNames}
          >
            {triggerContent}
          </TriggerTag>
        )}
        <div className={classes} {...others}>
          <div className='modal-background'></div>
          <div className='modal-content'>
            <Box>
              <BoxContent>
                <button
                  onClick={(e: React.MouseEvent) => {
                    setDisplay(false)
                    if (onClose) onClose(e)
                  }}
                  className='modal-close is-large'
                  aria-label='close'
                ></button>
                {children}
              </BoxContent>
            </Box>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {triggerContent && (
        <TriggerTag
          onClick={(e: React.MouseEvent) => {
            setDisplay(true)
            if (onOpen) onOpen(e)
          }}
          className={triggerClassNames}
        >
          {triggerContent}
        </TriggerTag>
      )}
      <div className={classes} {...others}>
        <div className='modal-background'></div>
        <div className='modal-content'>
          <Box>
            <BoxContent>
              <button
                onClick={(e: React.MouseEvent) => {
                  setDisplay(false)
                  if (onClose) onClose(e)
                }}
                className='modal-close is-large'
                aria-label='close'
              ></button>
              <div className='modal-title'>{title}</div>
              <Text>{content}</Text>
              <Button markup={ButtonMarkup.BUTTON} className={is('primary')} onClick={ctaOnClick}>
                {ctaContent}
              </Button>
            </BoxContent>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Modal
