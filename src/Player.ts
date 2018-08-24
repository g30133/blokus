import * as C from './constants'

import Piece, { rotateType, flipType } from './Piece'

export type PlayerType = 'r' | 'g' | 'b' | 'y'

class Player {
    type:PlayerType
    emitBoard:string[] = []
    pieces:Piece[] = []

    constructor(type:PlayerType) {
        this.type = type

        this.init()
    }

    // return index of the piece if found
    //        -1 otherwise
    public findPiece(index:number) {
        console.log('findPiece(' + this.emitBoard[index] + ')')
        const pieceIndex = this.pieces.findIndex((p) => {
            if(p.unitIxs.indexOf(index) !== -1) return true
            return false
        })
        return pieceIndex
    }

    private init() {
        this.initEmitBoard()

        // initialize pieces
        this.pieces.push(new Piece(this.type, '1u'))
        this.pieces.push(new Piece(this.type, '2u'))
        this.pieces.push(new Piece(this.type, '3uI'))
        this.pieces.push(new Piece(this.type, '3uL'))

        this.pieces.push(new Piece(this.type, '4uI'))
        this.pieces.push(new Piece(this.type, '4uL'))
        this.pieces.push(new Piece(this.type, '4uT'))
        this.pieces.push(new Piece(this.type, '4uO'))
        this.pieces.push(new Piece(this.type, '4uZ'))

        this.pieces.push(new Piece(this.type, '5uI'))
        this.pieces.push(new Piece(this.type, '5uL'))
        this.pieces.push(new Piece(this.type, '5uN'))
        this.pieces.push(new Piece(this.type, '5uP'))
        this.pieces.push(new Piece(this.type, '5uU'))
        this.pieces.push(new Piece(this.type, '5uY'))
        this.pieces.push(new Piece(this.type, '5uT'))
        this.pieces.push(new Piece(this.type, '5uV'))
        this.pieces.push(new Piece(this.type, '5uW'))
        this.pieces.push(new Piece(this.type, '5uZ'))
        this.pieces.push(new Piece(this.type, '5uF'))
        this.pieces.push(new Piece(this.type, '5uX'))
    }

    private initEmitBoard() {
        this.emitBoard = []
        for (let r = 0;  r < C.ARSENAL_BOARD_NUM_ROWS; r++) {
            for (let c = 0; c < C.ARSENAL_BOARD_NUM_COLS; c++) {
                this.emitBoard.push('')
            }
        }
    }

    public emit(numRow:number, numCols:number, startRow:number, startCol:number, rotateAngle:rotateType, flipSide:flipType) {
        this.initEmitBoard()

        let rowIx = startRow
        let colIx = startCol
        for (let i = 0; i < this.pieces.length; i++) {
            this.pieces[i].setupPosition(numRow, numCols, rowIx, colIx, rotateAngle, flipSide)
            this.pieces[i].emit(this.emitBoard)

            // update rowIx and colIx for next piece
            const piece = this.pieces[i]
            colIx += (rotateAngle === '0deg' || rotateAngle === '180deg') ? piece.width + 1 : piece.height + 1
            if (colIx > numCols - 6) {
                colIx = startCol
                rowIx += (rotateAngle === '0deg' || rotateAngle === '180deg') ? 6 : 4
            }
        }
    }
}

export default Player