import * as React from 'react';
import './App.css';

import * as C from './constants'

import Util from './/Util'

import Arsenal from './Arsenal'
import Board from './Board'
import Player, { PlayerType } from './Player'
import { rotateType, flipType } from './Piece'

type ModeType = 'playing' | 'switching'

interface AppState {
  mode: ModeType,
  currPlayerIx: number,
  board: string[],
  currRotateIx: number
  currFlipIx:number
}

class App extends React.Component<any, AppState> {
  players: Player[] = []
  currPieceIx: number = -1
  moveCount:number = 0
  rotateAngles: rotateType[] = []
  flipSides: flipType[] = []

  constructor(props:any) {
    super(props)

    this.onCellDown = this.onCellDown.bind(this)
    this.onCellUp = this.onCellUp.bind(this)
    this.onSwitching = this.onSwitching.bind(this)
    this.onRotateClicked = this.onRotateClicked.bind(this)
    this.onFlipClicked = this.onFlipClicked.bind(this)

    this.state = {
      mode: 'playing',
      currPlayerIx: 0,
      board: [],
      currRotateIx: 0,
      currFlipIx: 0
    }

    this.init()
  }

  private init() {
    for(let i = 0; i < C.MAIN_BOARD_NUM_COLS * C.MAIN_BOARD_NUM_ROWS; i++) {
      this.state.board.push('')
    }

    for(let i = 0; i < C.NUM_PLAYERS; i++) {
      this.players.push(new Player(C.PLAYER_COLORS[i] as PlayerType))
    }

    this.rotateAngles.push('0deg') 
    this.rotateAngles.push('90deg') 
    this.rotateAngles.push('180deg') 
    this.rotateAngles.push('270deg')

    this.flipSides.push('front')
    this.flipSides.push('back')
  }

  public render() {
    console.log('App render()')
    console.log('state:' + JSON.stringify(this.state))
    Util.dumpBoard(this.state.board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS)

    const player = this.players[this.state.currPlayerIx]
    player.emit(
      C.ARSENAL_BOARD_NUM_ROWS, C.ARSENAL_BOARD_NUM_COLS,
      C.ARSENAL_BOARD_START_ROW, C.ARSENAL_BOARD_START_COL,
      this.rotateAngles[this.state.currRotateIx],
      this.flipSides[this.state.currFlipIx])

    let screen:any
    if (this.state.mode === 'playing') {
      screen =
        <div className="app">
          <Board
            board={this.state.board}
            onCellUp={this.onCellUp}
            onCellDown={this.onCellDown}
          />
          <Arsenal
            arsenal={player.emitBoard}
            onCellDown={this.onCellDown}
            onCellUp={this.onCellUp}            
          />
          <div className='buttons'>
            <div className='rotate' onClick={this.onRotateClicked}>Rotate</div>
            <div className='flip' onClick={this.onFlipClicked}>Flip</div>
          </div>
        </div>
    }
    else if (this.state.mode === 'switching') {
      screen =
        <div className="app">
          <Board
            board={this.state.board}
            onCellUp={this.onCellUp}
            onCellDown={this.onCellDown}
          />
          <Arsenal
            arsenal={player.emitBoard}
            onCellDown={this.onCellDown}
            onCellUp={this.onCellUp}
          />
          <div className='buttons'>
            <div className='rotate'>Rotate</div>
            <div className='flip'>Flip</div>
          </div>
        </div>
      setTimeout(this.onSwitching, C.SWITCHING_DELAY);
    }
    else {
      screen =
        <div className="app">
          Unexpected mode:{this.state.mode}
        </div>
    }
    
    return screen
  }

  private onSwitching() {
    console.log('onSwitching()')

    this.currPieceIx = -1
    this.setState(prevState => {
      return {
        mode: 'playing',
        currPlayerIx: (prevState.currPlayerIx + 1) % C.NUM_PLAYERS,
        currRotateIx: 0,
        currFlipIx: 0
      }
    })

  }

  // @src: 'board' or 'arsenal'
  private onCellDown(index:number, src:string) {
    console.log(`onCellDown(${index}, ${src})`)
    if (src === 'arsenal') {
      this.currPieceIx = this.players[this.state.currPlayerIx].findPiece(index)
      console.log('currPieceIx:' + this.currPieceIx)
    }
  }

  // @src: 'board' or 'arsenal'
  private onCellUp(index:number, src:string) {
    console.log(`onCellUp(${index}, ${src})`)
    if(this.currPieceIx === -1) {
      console.log('tried to use invaild piece')
      return
    }
    if (src === 'board') {
      this.setState((prevState) => {
        let updatedMode = prevState.mode
        let updatedBoard = Array.from(prevState.board)

        const player = this.players[this.state.currPlayerIx]
        const piece = player.pieces[this.currPieceIx]

        // updating board
        const startRow = Math.floor(index/C.MAIN_BOARD_NUM_COLS)
        const startCol = index%C.MAIN_BOARD_NUM_COLS

        console.log('piece.setupPosition() in onCellUp')
        if (piece.setupPosition(
              C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS,
              startRow, startCol,
              this.rotateAngles[prevState.currRotateIx],
              this.flipSides[prevState.currFlipIx]) &&
            Util.isValidMove(
              updatedBoard, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS,
              piece, startRow, startCol,
              this.moveCount <= 3 ? true : false)) {
          player.pieces.splice(this.currPieceIx, 1)
          console.log('piece.dump() in onCellUP')
          piece.dump()
          this.moveCount++
          updatedMode = 'switching'
          piece.emit(updatedBoard)
        }

        return {
          mode: updatedMode,
          board: updatedBoard,
        }
      })
    }
  }

  private onRotateClicked() {
    console.log('onRotateClicked()')
    this.setState(prevState => {
      return {
        currRotateIx: (prevState.currRotateIx + 1) % 4
      }
    })
  }

  private onFlipClicked() {
    console.log('onFlipClicked()')
    this.setState(prevState => {
      return {
        currFlipIx: (prevState.currFlipIx + 1) % 2
      }
    })
  }
}

export default App;
