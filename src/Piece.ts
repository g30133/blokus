type PieceColor = 'r' | 'g' | 'b' | 'y'
type PieceType = '1u' | '2u' | '3uI' | '3uL' | '4uI' | '4uL' | '4uT' | '4uO' | '4uZ' |
                 '5uI' | '5uL' | '5uN' | '5uP' | '5uU' | '5uY' | '5uT' | '5uV' | '5uW'
                 | '5uZ' | '5uF' | '5uX'

export type rotateType = '0deg' | '90deg' | '180deg' | '270deg'
interface unitDelta {
    dr:number
    dc:number
}

export type flipType = 'front' | 'back'

interface unitDelta {
    dr:number
    dc:number
}

class Piece {
    type:PieceType
    color:PieceColor
    unitIxs:number[] = []
    unitDeltas:unitDelta[] = []
    width:number
    height:number

    constructor(color:PieceColor, type:PieceType) {
        this.color = color
        this.type = type

        this.init()
    }

    public dump() {
        console.log(`Piece:
        ${this.type} ${this.color} ${this.width} ${this.height}
        ${JSON.stringify(this.unitDeltas)}
        ${JSON.stringify(this.unitIxs)}`)
    }

    private init() {
        switch (this.type) {
            case '1u':
                this.width = 1
                this.height = 1
                this.unitDeltas.push({ dr:0, dc:0 })
            break

            case '2u':
                this.width = 1
                this.height = 2
                this.unitDeltas.push({ dr:0, dc:0})
                this.unitDeltas.push({ dr:1, dc:0})
                break

            case '3uI':
            this.width = 1
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})
            this.unitDeltas.push({ dr:1, dc:0})
            this.unitDeltas.push({ dr:2, dc:0})            
            break
            
            case '3uL':
                this.width = 2
                this.height = 2
                this.unitDeltas.push({ dr:0, dc:0 })
                this.unitDeltas.push({ dr:1, dc:0 })
                this.unitDeltas.push({ dr:1, dc:1 })
            break

            case '4uI':
            this.width = 1
            this.height = 4
            this.unitDeltas.push({ dr:0, dc:0})
            this.unitDeltas.push({ dr:1, dc:0})
            this.unitDeltas.push({ dr:2, dc:0})
            this.unitDeltas.push({ dr:3, dc:0})
                
            break

            case '4uL':
            this.width = 2
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:2, dc:0})                
            this.unitDeltas.push({ dr:2, dc:1})                
            break

            case '4uT':
            this.width = 2
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:1, dc:1})                
            this.unitDeltas.push({ dr:2, dc:0})                
            break

            case '4uO':
            this.width = 2
            this.height = 2
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:0, dc:1})                
            this.unitDeltas.push({ dr:1, dc:1})                
            this.unitDeltas.push({ dr:1, dc:0})                
            break

            case '4uZ':
            this.width = 2
            this.height = 3 
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:1, dc:1})                
            this.unitDeltas.push({ dr:2, dc:1})                
            break

            case '5uI':
            this.width = 1
            this.height = 5
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:2, dc:0})                
            this.unitDeltas.push({ dr:3, dc:0})                
            this.unitDeltas.push({ dr:4, dc:0})                
            break

            case '5uL':
            this.width = 2
            this.height = 4
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:2, dc:0})                
            this.unitDeltas.push({ dr:3, dc:0})                
            this.unitDeltas.push({ dr:3, dc:1})                
            break

            case '5uN':
            this.width = 2
            this.height = 4
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:2, dc:0})                
            this.unitDeltas.push({ dr:2, dc:1})                
            this.unitDeltas.push({ dr:3, dc:1})                
            break

            case '5uP':
            this.width = 2
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:2, dc:0})                
            this.unitDeltas.push({ dr:0, dc:1})                
            this.unitDeltas.push({ dr:1, dc:1})                
            break

            case '5uU':
            this.width = 2
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:0, dc:1})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:2, dc:0})                
            this.unitDeltas.push({ dr:2, dc:1})                
            break

            case '5uY':
            this.width = 2
            this.height = 4
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:1, dc:1})                
            this.unitDeltas.push({ dr:2, dc:0})                
            this.unitDeltas.push({ dr:3, dc:0})                
            break

            case '5uT':
            this.width = 3
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:0, dc:1})                
            this.unitDeltas.push({ dr:0, dc:2})                
            this.unitDeltas.push({ dr:1, dc:1})                
            this.unitDeltas.push({ dr:2, dc:1})                
            break

            case '5uV':
            this.width = 3
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:2, dc:0})                
            this.unitDeltas.push({ dr:2, dc:1})                
            this.unitDeltas.push({ dr:2, dc:2})              
            break

            case '5uW':
            this.width = 3
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:1, dc:1})                
            this.unitDeltas.push({ dr:2, dc:1})                
            this.unitDeltas.push({ dr:2, dc:2})                
            break

            case '5uZ':
            this.width = 3
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:0, dc:1})                
            this.unitDeltas.push({ dr:1, dc:1})                
            this.unitDeltas.push({ dr:2, dc:1})                
            this.unitDeltas.push({ dr:2, dc:2})                
            break

            case '5uF':
            this.width = 3
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:0})                
            this.unitDeltas.push({ dr:0, dc:1})                
            this.unitDeltas.push({ dr:1, dc:1})                
            this.unitDeltas.push({ dr:1, dc:2})                
            this.unitDeltas.push({ dr:2, dc:1})                
            break

            case '5uX':
            this.width = 3
            this.height = 3
            this.unitDeltas.push({ dr:0, dc:1})                
            this.unitDeltas.push({ dr:1, dc:0})                
            this.unitDeltas.push({ dr:1, dc:1})                
            this.unitDeltas.push({ dr:1, dc:2})                
            this.unitDeltas.push({ dr:2, dc:1})                
            break

            default:
                console.log('Unexpected type:' + this.type)
        }
    }

    private getFlippedColIx(startCol:number, hDistance:number, colIx:number):number {
        return 2 * startCol + hDistance - colIx - 1;
    }

    // @startRow, @startCol:
    //        upper left corner of the bounding rectangle which just contains this piece
    //        whether or not it's rotated
    // return true when setup position was successful
    //        false otherwiise
    public setupPosition(
        numRows:number, numCols:number, startRow:number, startCol:number,
        rotateAngle:rotateType, flipSide:flipType):boolean {
        console.log(`Piece setupPosition(${numRows}, ${numCols}, ${startRow}, ${startCol}, ${rotateAngle}, ${flipSide})`)

        this.unitIxs = []

        /////////////////////////////////////////////////////////////////////////////
        // rotate first, then flip algorithm
        // the order whether rotate first then flip or the other way around matters
        // HERE WE ROTATE FIRST, THEN FLIP ACROSS VERTICAL AXIS
        ////////////////////////////////////////////////////////////////////////////

        for (let i = 0; i < this.unitDeltas.length; i++) {
            const delta = this.unitDeltas[i]
            switch (rotateAngle) {
                case '0deg': {
                    const r = startRow + delta.dr
                    let c = startCol + delta.dc
                    if (flipSide === 'back') {
                        c = this.getFlippedColIx(startCol, this.width, c)
                    }
                    if (r < 0 || r >= numRows || c < 0 || c >= numCols) return false
                    this.unitIxs.push(numCols * r + c)
                }
                break;
                case '90deg': { 
                    const r = startRow + delta.dc
                    let c = startCol - delta.dr + (this.height - 1)
                    if(flipSide === 'back') {
                        c = this.getFlippedColIx(startCol, this.height, c)
                    }
                    if (r < 0 || r >= numRows || c < 0 || c >= numCols) return false
                    this.unitIxs.push(numCols * r + c)
                }
                break;
                case '180deg': {
                    const r = startRow - delta.dr + (this.height - 1)
                    let c = startCol - delta.dc + (this.width - 1)
                    if(flipSide === 'back') {
                        c = this.getFlippedColIx(startCol, this.width, c)
                    }
                    if (r < 0 || r >= numRows || c < 0 || c >= numCols) return false
                    this.unitIxs.push(numCols * r + c)
                }
                break;
                case '270deg': {
                    const r = startRow - delta.dc + (this.width - 1)
                    let c = startCol + delta.dr
                    if(flipSide === 'back') {
                        c = this.getFlippedColIx(startCol, this.height, c)
                    }
                    if (r < 0 || r >= numRows || c < 0 || c >= numCols) return false
                    this.unitIxs.push(numCols * r + c)
                }
                break;
                default: {
                    console.log('Unexpected rotateAngle:' + rotateAngle)
                    return false
                }
            }
        }

        return true
    }

    public emit(board:string[]) {
        //console.log('unitIndexes:' + JSON.stringify(this.unitIxs))
        for(let index = 0; index < this.unitIxs.length; index++) {
            board[this.unitIxs[index]] = this.color
        }
    }
}

export default Piece;