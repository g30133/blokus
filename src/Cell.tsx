import * as React from 'react';
import './Cell.css';

interface CellProps {
    ix:number
    val:string
    onCellDown:(ix:number) => void
    onCellUp: (ix:number) => void
}

class Cell extends React.Component<CellProps> {
    constructor(props:CellProps) {
        super(props)
        this.onCellDown = this.onCellDown.bind(this)
        this.onCellUp = this.onCellUp.bind(this)
    }
    public render() {
        return (
            <div
                className={'cell ' + this.props.val}
                onPointerDown={this.onCellDown}
                onPointerUp={this.onCellUp}
                //onTouchStart={this.onCellDown}
                //onTouchEnd={this.onCellUp}
            >
            </div>
        )
    }

    private onCellDown() {
        this.props.onCellDown(this.props.ix)
    }

    private onCellUp() {
        this.props.onCellUp(this.props.ix)
    }
}

export default Cell