import { StepperStepMarkup } from './StepperStepEnum'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Stepper Step Interface
 */
export interface StepperStepProps {
  children?: GenericChildren | string
  active?: boolean
  current?: boolean
  done?: boolean
  label?: string
  step?: number | string
  className?: string
  classList?: string[]
  markup?: StepperStepMarkup
}
