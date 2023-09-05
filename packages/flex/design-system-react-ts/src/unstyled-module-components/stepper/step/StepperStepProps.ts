import { StepperStepMarkup } from './StepperStepEnum'

/**
 * Stepper Step Interface
 */
export interface StepperStepProps {
  children?: React.ReactNode | string
  active?: boolean
  current?: boolean
  done?: boolean
  label?: string
  step?: number | string
  className?: string
  markup?: StepperStepMarkup
}
