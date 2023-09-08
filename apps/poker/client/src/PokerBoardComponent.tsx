import React from 'react'
import { castDraft } from 'immer'
import {
  PokerBoardComponentProps
} from 'flexiness'

import classNames from 'classnames'
const {
  Button,
  // ButtonMarkup,
  // Link,
  View,
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

const PokerBoardComponent: React.FC<PokerBoardComponentProps> = (props) => {
  const { pointOptions, currentlyVoting, activePlayers, observers, showVotes } = props.board

  function changeCurrentlyVoting(e: React.ChangeEvent<HTMLTextAreaElement>) {
    props.changeCurrentlyVoting(e.target.value)
  }

  const results = showVotes && {
    average: props.board.averageVote,
    voteCounts: props.board.voteCounts
  }

  return (
    <div>
      <Title level={TitleLevel.LEVEL6} style={{ lineHeight: 'inherit' }}>
        Currently Voting
      </Title>
      <form action='#' className='mb-2'>
        <div className='form-group'>
          <textarea className='form-control' value={currentlyVoting} onChange={changeCurrentlyVoting}/>
        </div>
        <div className='grid gap-4 grid-rows-1 grid-cols-2' style={{ maxWidth: '30vw' }}>
          <Button variant={VariantState.SECONDARY} onClick={props.clearVotes}>
            Clear Votes
          </Button>
          <Button variant={VariantState.SECONDARY} onClick={props.showVotes}>
            Show Votes
          </Button>
        </div>
      </form>
      {
        props.vote &&
        <>
          <Title level={TitleLevel.LEVEL6} style={{ lineHeight: 'inherit' }}>
            Vote:
          </Title>
          <div className='voteOptions mb-3'>
            {
              pointOptions.map(it => (
                <button className={`btn btn-primary mr-2${it === props.myPlayer.vote ? ' active' : ''}`}
                  key={it}
                  // @ts-expect-error
                  onClick={() => props.vote(it)}>{it}</button>
              ))
            }
          </div>
        </>
      }
      <div className='row'>
        <div className='col'>
          <Title level={TitleLevel.LEVEL6} style={{ lineHeight: 'inherit' }}>
            Players
          </Title>
          <table className='table table-responsive'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Vote</th>
              </tr>
            </thead>
            <tbody>
              <>
                {activePlayers.filter(player => props.board.isTableJoined(player, props.activeTable?.tableId)).map(player => 
                  <tr key={player.id}>
                    <td>{player.joining ? 'Incoming player...' : player.name}</td>
                    <td>
                      {
                        showVotes || player === props.myPlayer
                          ? player.vote
                          : (player.vote !== null ? '...' : '')
                      }
                    </td>
                  </tr>
                )}
              </>
            </tbody>
          </table>
          {
            !!observers.length &&
            <>
              <h3>Observers</h3>
              <p>{observers.map(it => it.name).join(', ')}</p>
            </>
          }
        </div>
        <div className='col'>
          {
            results &&
            <>
              <h3>Results</h3>
              <p>Average: {results.average.toFixed(2)}</p>
              <table className='table table-responsive'>
                <thead>
                  <tr>
                    <th>Vote</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    results.voteCounts.map(it => (
                      <tr key={it.vote}>
                        <td>{it.vote}</td>
                        <td>{it.count}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default PokerBoardComponent
