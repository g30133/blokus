import * as React from 'react';
import './Arsenal.css';

import * as C from './constants';

import Cell from './Cell'

interface ArsenalProps {
    arsenal: string[]
    onCellDown: (ix:number, src:string) => void
    onCellUp: (ix:number, src:string) => void
}

class Arsenal extends React.Component<ArsenalProps> {
    constructor(props:ArsenalProps) {
        super(props)

        this.onCellDown = this.onCellDown.bind(this)
        this.onCellUp = this.onCellUp.bind(this)
    }
    public render() {
        const arsenal:any[] = []
        for(let i = 0; i < C.ARSENAL_BOARD_NUM_ROWS * C.ARSENAL_BOARD_NUM_COLS; i++) {
            arsenal.push(
                <Cell
                    key={i} ix={i}
                    val={this.props.arsenal[i]}
                    onCellDown={this.onCellDown}
                    onCellUp={this.onCellUp}
                />)
        }
        return (
            <div className='arsenal' onPointerMove={this.onPointerMove}>
                {arsenal}
            </div>
        )
    }

    private onPointerMove() {
        console.log('on pointer move arsenal')
    }

    private onCellDown(ix:number) {
        this.props.onCellDown(ix, 'arsenal')
    }

    private onCellUp(ix:number) {
        this.props.onCellUp(ix, 'arsenal')
    }
}
export default Arsenal