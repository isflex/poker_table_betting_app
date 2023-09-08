import React from 'react'
import PropTypes from 'prop-types'
import { uniqueNamesGenerator, starWars, adjectives, animals, colors } from 'unique-names-generator'
import classNames from 'classnames'
const {
  Button,
  // ButtonMarkup,
  // Link,
  Input,
  InputType,
  // IconName,
  // View,
  // Text,
  Title,
  // Rows,
  // RowItem,
  // Columns,
  // ColumnsItem,
  TitleLevel,
  // TitleMarkup,
  VariantState,
  styles
} = await import('flex_design_system_react_ts_styled')

export default class JoinComponent extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    defaultValue: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      name: this.props.defaultValue || '',
      observer: false,
    }
  }

  generateName = () => {
    const i = Math.floor(Math.random() * Math.floor(2))
    const nouns = [animals, starWars]
    const name = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, nouns[i], ],
      length: Math.floor(Math.random() * Math.floor(4)),
      separator: ' ',
      style: 'capital'
    })
    this.setState({ name })
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = event => {
    this.props.onSubmit(this.state.name, this.state.observer, this.props.activeTable)
    event.preventDefault()
  }

  render() {

    return (
      <div style={{ marginTop: '2rem' }}>

        {(this.props.activeTable !== undefined && !this.props.isTableJoined) &&
        <div className={classNames(styles.isFlex, styles.isAlignContentCenter, styles.isFullwidth)}
          style={{ minHeight: '4rem', padding: '2rem 0', verticalAlign: 'center' }}>
          <Title level={TitleLevel.LEVEL3} className={classNames(styles.isInline, styles.isMarginless )}
            style={{ lineHeight: 'inherit' }}>
            Play at this table ?
          </Title>
          <form onSubmit={this.handleSubmit} className='form-inline'>
            <div className='grid gap-4 grid-rows-1 grid-cols-3' style={{ padding: '0 2rem' }}>
              <Button variant={VariantState.PRIMARY} type='submit' className='col-span-2'>
                Join
              </Button>
              <div className='form-check form-check-inline mb-2 mr-sm-2'>
                <input type='checkbox' className='form-check-input' id='ObserverCheckbox'
                  checked={this.state.checked}
                  onChange={e => this.setState({ observer: e.target.checked })}/>
                <label htmlFor='ObserverCheckbox' className='form-check-label'>As Observer</label>
              </div>
            </div>
          </form>
        </div>
        }

        <div className={classNames(styles.isFlex, styles.isAlignContentCenter, styles.isFullwidth)}
          style={{ minHeight: '4rem', padding: '2rem 0', verticalAlign: 'center' }}>
          <Title level={TitleLevel.LEVEL3} className={classNames(styles.isInline, styles.isMarginless )}
            style={{ lineHeight: 'inherit' }}>
            Who am I ?
          </Title>
          <div className='grid gap-4 grid-rows-1 grid-cols-3' style={{ padding: '0 2rem' }}>
            <Input
              type={InputType.TEXT} name='name'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Enter Player Name'
              className='col-span-2'
            />
            <Button variant={VariantState.SECONDARY} onClick={this.generateName} type='button'>
              Generate Name
            </Button>
          </div>
        </div>

      </div>
    )
  }
}
