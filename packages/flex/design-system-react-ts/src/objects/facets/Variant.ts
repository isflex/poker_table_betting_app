import Stylable from '../Stylable'
import Classable from '../Classable'

enum VariantStateEnum {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

/**
 * Variant State
 */
export class VariantState implements Stylable, Classable {
  constructor(private variantEnum: VariantStateEnum) {
    return
  }

  public static PRIMARY = new VariantState(VariantStateEnum.PRIMARY)

  public static SECONDARY = new VariantState(VariantStateEnum.SECONDARY)

  public static TERTIARY = new VariantState(VariantStateEnum.TERTIARY)

  getClassName(): string {
    switch (this.variantEnum) {
        case VariantStateEnum.PRIMARY:
          return 'primary'
        case VariantStateEnum.SECONDARY:
          return 'secondary'
        case VariantStateEnum.TERTIARY:
          return 'tertiary'
        default:
          return ''
    }
  }

  getStyle(): string {
    switch (this.variantEnum) {
        case VariantStateEnum.PRIMARY:
          return '#fe544b'
        case VariantStateEnum.SECONDARY:
          return '#009dcc'
        case VariantStateEnum.TERTIARY:
          return '#0055a4'
        default:
          return ''
    }
  }
}

export interface VariantProps {
  variant?: VariantState
}
