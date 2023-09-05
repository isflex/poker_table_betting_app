import Stylable from '../Stylable'
import Classable from '../Classable'

enum AlertStateEnum {
  SUCCESS,
  INFO,
  WARNING,
  DANGER,
  DEBUG,
  TERTIARY,
}

/**
 * Alert State
 */
export class AlertState implements Stylable, Classable {
  constructor(private alertEnum: AlertStateEnum) {
    return
  }

  public static SUCCESS = new AlertState(AlertStateEnum.SUCCESS)

  public static INFO = new AlertState(AlertStateEnum.INFO)

  public static WARNING = new AlertState(AlertStateEnum.WARNING)

  public static DANGER = new AlertState(AlertStateEnum.DANGER)

  public static DEBUG = new AlertState(AlertStateEnum.DEBUG)

  public static TERTIARY = new AlertState(AlertStateEnum.TERTIARY)

  getClassName(): string {
    switch (this.alertEnum) {
        case AlertStateEnum.SUCCESS:
          return 'success'
        case AlertStateEnum.INFO:
          return 'info'
        case AlertStateEnum.WARNING:
          return 'warning'
        case AlertStateEnum.DANGER:
          return 'danger'
        case AlertStateEnum.DEBUG:
          return 'debug'
        case AlertStateEnum.TERTIARY:
          return 'tertiary'
        default:
          return ''
    }
  }

  getStyle(): string {
    switch (this.alertEnum) {
        case AlertStateEnum.SUCCESS:
          return '#009060'
        case AlertStateEnum.INFO:
          return '#109db9'
        case AlertStateEnum.WARNING:
          return '#f6b027'
        case AlertStateEnum.DANGER:
          return '#d42d02'
        case AlertStateEnum.DEBUG:
          return '#ed6638bf'
        case AlertStateEnum.TERTIARY:
          return '#25465f'
        default:
          return ''
    }
  }
}

export interface AlertProps {
  alert?: AlertState
}
