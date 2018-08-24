import * as C from './constants'

import Util from './Util'
import Piece from './Piece'
//import Board from './Board';

describe('util helper functions', () => {
    let board:string[]

    let r1u:Piece
    let g2u:Piece
    let b3uI:Piece
    let y3uL:Piece

    beforeEach(() => {
        board = []
        for (let i = 0; i < C.MAIN_BOARD_NUM_ROWS * C.MAIN_BOARD_NUM_COLS; i++) {
            board.push('')
        }
        board[0] = 'r'
        board[1] = 'r'

        board[18] = 'g'
        board[19] = 'g'
        board[20+19] = 'g'

        board[20 * 18] = 'b'
        board[20 * 19] = 'b'
        board[20 * 19 + 1] = 'b'

        board[20 * 18 + 18] = 'y'
        board[397] = 'y'
        board[398] = 'y'
        board[399] = 'y'
        
        r1u = new Piece('r', '1u')
        g2u = new Piece('g', '2u')
        b3uI = new Piece('b', '3uI')
        y3uL = new Piece('y', '3uL')

        Util.dumpBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS)

    })

    it('Util.isPieceInBoard()', () => {
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 0, 0)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 0, 1)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 0, 18)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 0, 19)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 18)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 19)).toBe(true)

        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 18, 18)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 18, 17)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 18, 16)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 18, 15)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 17, 17)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 17, 16)).toBe(true)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 10, 19)).toBe(false)
        expect(Util.isPieceInBoard(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 19, 10)).toBe(false)
    })

    it('Util.isPieceCollidingWithAnyOtherPieces()', () => {
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 0, 0)).toBe(true)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 0, 1)).toBe(true)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 0, 18)).toBe(true)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 0, 19)).toBe(true)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 18)).toBe(false)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 19)).toBe(true)

        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 18, 18)).toBe(true)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 18, 17)).toBe(true)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 18, 16)).toBe(true)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 18, 15)).toBe(false)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 17, 17)).toBe(true)
        expect(Util.isPieceCollidingWithAnyOtherPieces(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 17, 16)).toBe(false)
    })

    it('Util.isTouchingCornersWithSameColor()', () => {
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 2)).toBe(true)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 17)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 18, 2)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 18, 16)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 10, 10)).toBe(false)

        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 1, 2)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 1, 17)).toBe(true)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 17, 2)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 17, 16)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 10, 10)).toBe(false)

        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 1, 2)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 1, 17)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 16, 2)).toBe(true)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 16, 16)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 16, 10)).toBe(false)

        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 1, 2)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 1, 17)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 17, 2)).toBe(false)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 16, 16)).toBe(true)
        expect(Util.isTouchingCornersWithSameColor(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 17, 15)).toBe(true)
    })

    it('Util.isSharingSideWithSameColorFromDifferentPiece()', () => {
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 0, 2)).toBe(true)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 0)).toBe(true)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 1)).toBe(true)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 2)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 1, 17)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 18, 2)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 18, 16)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, r1u, 10, 10)).toBe(false)

        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 0, 17)).toBe(true)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 1, 18)).toBe(true)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 2, 19)).toBe(true)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 0, 16)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 1, 17)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 2, 18)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 1, 2)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 1, 17)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 17, 2)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 17, 16)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, g2u, 10, 10)).toBe(false)

        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 1, 2)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 1, 17)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 16, 2)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 16, 16)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, b3uI, 16, 10)).toBe(false)

        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 1, 2)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 1, 17)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 17, 2)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 16, 16)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 17, 15)).toBe(false)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 18, 15)).toBe(true)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 17, 16)).toBe(true)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 16, 17)).toBe(true)
        expect(Util.isSharingSideWithSameColorFromDifferentPiece(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, y3uL, 16, 18)).toBe(true)
    })
})

describe('blokus', () => {
    let board:string[]
    let piece1u:Piece
    let piece2u:Piece
    let piece3uI:Piece
    let piece3uL:Piece

    let piece4uI:Piece

    let piece5uX:Piece

    describe('the very first move of the game by player r', () => {
        beforeEach(() => {
            board = []
            for (let i = 0; i < C.MAIN_BOARD_NUM_ROWS * C.MAIN_BOARD_NUM_COLS; i++) {
                board.push('')
            }
            
            piece1u = new Piece('r', '1u')
            piece2u = new Piece('r', '2u')
            piece3uI = new Piece('r', '3uI')
            piece3uL = new Piece('r', '3uL')
            piece4uI = new Piece('r', '4uI')
            piece5uX = new Piece('r', '5uX')
        })

        it('piece1u', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 0, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 0, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 19, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 19, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 1, 1, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 10, 10, true)).toBe(false)
        })

        it('piece2ul', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 0, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 0, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 19, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 18, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 18, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 1, 1, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 10, 10, true)).toBe(false)
        })

        it('piece3uI', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 0, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 0, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 19, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 18, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 18, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 17, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 17, 19, true)).toBe(true)
        })
    
        it('piece3uL', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 0, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 18, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 18, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 19, true)).toBe(false)
        })
    
        it('piece4uI', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 0, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 16, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 0, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 16, 19, true)).toBe(true)
        })
    
        it('piece5uX', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 19, 19, true)).toBe(false)
        })
    })

    describe('the second move of the game by player g', () => {
        beforeEach(() => {
            board = []
            for (let i = 0; i < C.MAIN_BOARD_NUM_ROWS * C.MAIN_BOARD_NUM_COLS; i++) {
                board.push('')
            }
            board[0] = 'r'
            
            piece1u = new Piece('g', '1u')
            piece2u = new Piece('g', '2u')
            piece3uI = new Piece('g', '3uI')
            piece3uL = new Piece('g', '3uL')
            piece4uI = new Piece('g', '4uI')
            piece5uX = new Piece('g', '5uX')
        })

        it('piece1u', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 0, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 19, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 19, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 1, 1, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 10, 10, true)).toBe(false)
        })

        it('piece2u', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 0, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 19, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 18, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 18, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 1, 1, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 10, 10, true)).toBe(false)
        })

        it('piece3uI', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 0, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 19, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 18, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 18, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 17, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 17, 19, true)).toBe(true)
        })
    
        it('piece3uL', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 18, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 18, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 19, true)).toBe(false)
        })
    
        it('piece4uI', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 16, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 0, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 16, 19, true)).toBe(true)
        })
    
        it('piece5uX', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 19, 19, true)).toBe(false)
        })
    })

    describe('the third move of the game by player b', () => {
        beforeEach(() => {
            board = []
            for (let i = 0; i < C.MAIN_BOARD_NUM_ROWS * C.MAIN_BOARD_NUM_COLS; i++) {
                board.push('')
            }
            board[0] = 'r'
            board[19] = 'g'
            
            piece1u = new Piece('b', '1u')
            piece2u = new Piece('b', '2u')
            piece3uI = new Piece('b', '3uI')
            piece3uL = new Piece('b', '3uL')
            piece4uI = new Piece('b', '4uI')
            piece5uX = new Piece('b', '5uX')
        })

        it('piece1u', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 19, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 19, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 1, 1, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 10, 10, true)).toBe(false)
        })

        it('piece2u', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 19, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 18, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 18, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 1, 1, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 10, 10, true)).toBe(false)
        })

        it('piece3uI', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 19, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 18, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 18, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 17, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 17, 19, true)).toBe(true)
        })
    
        it('piece3uL', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 18, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 18, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 19, true)).toBe(false)
        })
    
        it('piece4uI', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 16, 0, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 16, 19, true)).toBe(true)
        })
    
        it('piece5uX', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 19, 19, true)).toBe(false)
        })
    })

    describe('the fourth move of the game by player y', () => {
        beforeEach(() => {
            board = []
            for (let i = 0; i < C.MAIN_BOARD_NUM_ROWS * C.MAIN_BOARD_NUM_COLS; i++) {
                board.push('')
            }
            board[0] = 'r'
            board[19] = 'g'
            board[20 * 19] = 'b'
            
            piece1u = new Piece('y', '1u')
            piece2u = new Piece('y', '2u')
            piece3uI = new Piece('y', '3uI')
            piece3uL = new Piece('y', '3uL')
            piece4uI = new Piece('y', '4uI')
            piece5uX = new Piece('y', '5uX')
        })

        it('piece1u', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 19, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 1, 1, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 10, 10, true)).toBe(false)
        })

        it('piece2u', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 19, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 18, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 18, 19, true)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 1, 1, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece2u, 10, 10, true)).toBe(false)
        })

        it('piece3uI', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 19, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 18, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 18, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 17, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uI, 17, 19, true)).toBe(true)
        })
    
        it('piece3uL', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 18, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 18, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece3uL, 19, 19, true)).toBe(false)
        })
    
        it('piece4uI', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 18, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 17, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 16, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece4uI, 16, 19, true)).toBe(true)
        })
    
        it('piece5uX', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 0, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 19, 0, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 0, 19, true)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece5uX, 19, 19, true)).toBe(false)
        })
    })

    describe('THE FIFTH MOVE OF THE GAME BY PLAYER R', () => {
        beforeEach(() => {
            board = []
            for (let i = 0; i < C.MAIN_BOARD_NUM_ROWS * C.MAIN_BOARD_NUM_COLS; i++) {
                board.push('')
            }

            // rrr
            //  r
            board[0] = 'r'
            board[1] = 'r'
            board[2] = 'r'
            board[21] = 'r'

            board[19] = 'g'
            board[20 * 19] = 'b'
            board[399] = 'y'
            
            piece1u = new Piece('r', '1u')
            piece2u = new Piece('r', '2u')
            piece3uI = new Piece('r', '3uI')
            piece3uL = new Piece('r', '3uL')
            piece4uI = new Piece('r', '4uI')
            piece5uX = new Piece('r', '5uX')
        })

        it('piece1u', () => {
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 0, 0, false)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 1, 1, false)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 2, 2, false)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 3, 3, false)).toBe(false)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 2, 0, false)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 1, 3, false)).toBe(true)
            expect(Util.isValidMove(board, C.MAIN_BOARD_NUM_ROWS, C.MAIN_BOARD_NUM_COLS, piece1u, 1, 18, false)).toBe(false)
        })
    })
})

