import React from 'react'
import classNames from 'classnames'
import { is, has, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { ProgressProps } from './ProgressProps'
import { Text, TextLevel } from '../text'
import { Columns, ColumnsItem } from '../columns'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param percent {number} Progress percent
 * @param maxPercent {number} Default max percent is 100
 * @param alert {AlertState} Progress alert variant (SUCCESS|INFO|WARNING|DANGER)
 * @param small {boolean} Small progress
 * @param stacked {boolean} Stacked progress
 * @param uniqueLegend {string} Unique legend
 * @param firstExtremLegend {string} First extremity legend, only with secondExtremLegend property
 * @param secondExtremLegend {string} Second extremity legend, only with firstExtremLegend property
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 */
const Progress = ({
  children,
  className,
  classList,
  percent,
  maxPercent = 100,
  alert,
  small,
  stacked,
  uniqueLegend,
  firstExtremLegend,
  secondExtremLegend,
  ...others
}: ProgressProps): React.JSX.Element => {
  const classes = classNames(
    styles.progress,
    alert && styles[camelCase(is(alert.getClassName())) as keyof Styles],
    !alert && styles[camelCase(is('primary')) as keyof Styles],
    small && styles[camelCase(is('small')) as keyof Styles],
    className,
    validate(classList),
  )

  const stackedClasses = classNames(
    styles.progress,
    stacked && styles[camelCase(is('stacked')) as keyof Styles],
    className,
    validate(classList),
  )

  if (children && stacked) {
    return (
      <div className={stackedClasses} {...others}>
        {children}
      </div>
    )
  }

  return (
    <>
      <progress className={classes} value={percent} max={maxPercent} {...others}>
        {percent}
      </progress>
      {uniqueLegend && (
        <Text className={styles[camelCase(has('text-centered')) as keyof Styles]} level={TextLevel.LEVEL2}>
          {uniqueLegend}
        </Text>
      )}
      {firstExtremLegend && secondExtremLegend && (
        <Columns mobile marginSize={3}>
          <ColumnsItem>
            <Text level={TextLevel.LEVEL2}>{firstExtremLegend}</Text>
          </ColumnsItem>
          <ColumnsItem narrow>
            <Text level={TextLevel.LEVEL2}>{secondExtremLegend}</Text>
          </ColumnsItem>
        </Columns>
      )}
    </>
  )
}

export default Progress
