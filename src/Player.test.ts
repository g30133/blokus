import * as C from './constants'
import Util from './Util'
import Player from './Player'

describe('player', () => {
    let player:Player

    beforeEach(() => {
        player = new Player('r')
        player.emit(
            C.ARSENAL_BOARD_NUM_ROWS, C.ARSENAL_BOARD_NUM_COLS,
            C.ARSENAL_BOARD_START_ROW, C.ARSENAL_BOARD_START_COL, '0deg', 'front')
        
        console.log('---------- player.test.ts ---------------')
        console.log('player.pieces.length:' + player.pieces.length)
        Util.dumpBoard(player.emitBoard, C.ARSENAL_BOARD_NUM_ROWS, C.ARSENAL_BOARD_NUM_COLS)
    })

    it('shoul have a set of pieces', () => {
        expect(player.pieces).toHaveLength(C.NUM_PIECES_PER_PLAYER)
        expect(player.type).toBe('r')
    })

    it('should find its piece with given index on emit board', () => {
        expect(player.findPiece(
            C.ARSENAL_BOARD_NUM_COLS * C.ARSENAL_BOARD_START_ROW + C.ARSENAL_BOARD_START_COL)).not.toBe(-1)
    })
    
    it('should find its piece with given index on emit board', () => {
        // 4uI piece
        const pieceIx1 = player.findPiece(C.ARSENAL_BOARD_NUM_COLS * 1 + 13)
        const pieceIx2 = player.findPiece(C.ARSENAL_BOARD_NUM_COLS * 4 + 13)
        expect(pieceIx1).toEqual(pieceIx2)
    })
    
    it('should not find piece with index 0', () => {
        expect(player.findPiece(0)).toBe(-1)
    })

})