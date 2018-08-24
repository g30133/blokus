//import * as C from './constants'
import Piece from './Piece'
//import { Color } from 'csstype';

class Util {
    public static dumpBoard(board:string[], numRows:number, numCols:number) {
        //console.log(`dumpBoard(${board})`)
        let dump:string = ''
        for (let i = 0; i < numRows * numCols; i++) {
            if (i % numCols === 0) {
                dump += '\n'
            }
            
            dump += (board[i] === '') ? '.' : board[i]
        }
        console.log(dump)
    }

    // @startRow, @startCol: for the piece's upper left corner unit
    // return true when the move is legal
    //        false otherwise
    public static isValidMove(
        board:string[], numRows:number, numCols:number,
        piece:Piece, startRow:number, startCol:number,
        isFirstMove:boolean) {
        //console.log(`isValidMove()`)
        let ret:boolean
        
        if(isFirstMove) {
            //console.log('this.checkCornerFilled: ' + this.checkCornerFilled(piece, numRows, numCols))
            if(this.checkCornerFilled(piece, numRows, numCols) === false) {
                ret = false
            } else {
                //check if all unit positions are valid
                if(this.isPieceInBoard(board, numRows, numCols, piece, startRow, startCol) === false) {
                    ret = false
                } else {
                    if (this.isPieceCollidingWithAnyOtherPieces(board, numRows, numCols, piece, startRow, startCol)) {
                        ret = false
                    }
                    else {
                        ret = true
                    }
                }
            }
        } else {
            if(
                this.isPieceInBoard(board, numRows, numCols, piece, startRow, startCol) == true &&
                this.isPieceCollidingWithAnyOtherPieces(board, numRows, numCols, piece, startRow, startCol) === false &&
                this.isTouchingCornersWithSameColor(board, numRows, numCols, piece, startRow, startCol) === true &&
                this.isSharingSideWithSameColorFromDifferentPiece(board, numRows, numCols, piece, startRow, startCol) === false) {
                ret = true
            } else {
                ret = false
            }
        }
        //console.log(`isValidMove() return ${ret}`)
        return ret
    }

    private static checkCornerFilled(piece:Piece, numRows:number, numCols:number) {
        for(const unitIndex of piece.unitIxs) {
            //console.log('unitIndex: ' + unitIndex)
            if(unitIndex === 0 || unitIndex === numCols-1 ||
                unitIndex === (numRows * numCols) - numCols ||
                unitIndex === (numRows * numCols)-1) {
                //console.log('CORNER IS FILLED')
                return true
            }
        }
        //console.log('CORNER IS NOT FILLED')
        return false
    }

    public static isPieceInBoard(
        board:string[], numRows:number, numCols:number, piece:Piece, startRow:number, startCol:number) {
        return true
        // TODO: we don't need this function at all in isValidMove() ??? 
        //return piece.setupPosition(numRows, numCols, startRow, startCol, '0deg')
    }

    public static isPieceCollidingWithAnyOtherPieces(
        board:string[], numRows:number, numCols:number, piece:Piece, startRow:number, startCol:number) {

        for(const unitIx of piece.unitIxs) {
            //console.log('board[unitIx]:(' + board[unitIx] + ')')
            if(board[unitIx] !== '') return true 
        }
        return false;
    }

    public static isSharingSideWithSameColorFromDifferentPiece(
        board:string[], numRows:number, numCols:number, piece:Piece, startRow:number, startCol:number) {

            for(const unitIx of piece.unitIxs) {
                const neighborIndexes = this.findSideNeighborIndexes(unitIx, numRows, numCols)
                for(const neighborIndex of neighborIndexes) {
                    //console.log('board[neighborIndex]:' + board[neighborIndex])
                    //console.log('board[unitIx]' + board[unitIx])
                    //console.log('pieceContainsIndex():' + this.pieceContainsIndex(piece, neighborIndex)) 
                    if(board[neighborIndex] === piece.color &&
                        board[neighborIndex] !== '' &&
                        this.pieceContainsIndex(piece, neighborIndex) === false) {
                        return true
                    }
                }
            }
        return false
    }

    private static findSideNeighborIndexes(unitIx:number, numRows:number, numCols:number) {
        const neighborIndexes = [
            unitIx-1,
            unitIx+1,
            unitIx+numCols,
            unitIx-numCols
        ]
        for(let i = 0; i < neighborIndexes.length; i++) {
            if(neighborIndexes[i] < 0 || neighborIndexes[i] > (numRows * numCols) - 1)
            neighborIndexes.splice(i, 1)
        }
        //console.log('neighborIndexes:' + neighborIndexes)
        return neighborIndexes
    }

    public static isTouchingCornersWithSameColor(
        board:string[], numRows:number, numCols:number, piece:Piece, startRow:number, startCol:number) {

        //console.log(JSON.stringify(piece.unitIxs))
        for(const unitIx of piece.unitIxs) {
            const neighborIndexes = this.findCornerNeighborIndexes(unitIx, numRows, numCols)
            for(const neighborIndex of neighborIndexes) {
                //console.log('neighborUnit:' + board[neighborIndex] + ' unit:' + board[unitIx])
                if(board[neighborIndex] === piece.color && 
                    board[neighborIndex] !== '' && 
                    this.pieceContainsIndex(piece, neighborIndex) === false) {
                    return true
                }
            }
        }

        return false
    }

    private static findCornerNeighborIndexes(unitIx:number, numRows:number, numCols:number) {
        const neighborIndexes = [
            unitIx-(numCols+1),
            unitIx-(numCols-1),
            unitIx+(numCols-1),
            unitIx+(numCols+1)
        ]
        return neighborIndexes
    }

    private static pieceContainsIndex(piece:Piece, neighborIndex:number) {
        for(const unitIndex of piece.unitIxs) {
            if(neighborIndex === unitIndex) {
                return true
            }
        }
        return false
    }
}

export default Util