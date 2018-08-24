import * as React from 'react';
import './Board.css';

import Cell from './Cell'

interface BoardProps {
    board: string[]
    onCellDown:(ix:number, src:string) => void 
    onCellUp: (ix:number, src:string) => void
}

class Board extends React.Component<BoardProps> {
    constructor(props:BoardProps) {
        super(props)

        this.onCellDown = this.onCellDown.bind(this)
        this.onCellUp = this.onCellUp.bind(this)
    }
    public render() {
        const cellComponents:any[] = []
        for(let i = 0; i < this.props.board.length; i++) {
            cellComponents.push(
                <Cell key={i} ix={i} val={this.props.board[i]}
                onCellDown={this.onCellDown}
                onCellUp={this.onCellUp}/>
            )
        }
        return (
            <div className="board">
                {cellComponents}
            </div>
        )
    }
    private onCellDown(ix:number) {
        this.props.onCellDown(ix, 'board')
    }

    private onCellUp(ix:number) {
        this.props.onCellUp(ix, 'board')
    }
}
export default Board