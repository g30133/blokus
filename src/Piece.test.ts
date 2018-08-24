import Piece from './Piece';
import Util from './Util'

/*
function dumpBoard(board:string[], numRows:number, numCols:number) {
    console.log(`dumpBoard(${board})`)
    let dump:string = ''
    for (let i = 0; i < numRows * numCols; i++) {
        if (i % numCols === 0) {
            dump += '\n'
        }
        
        dump += (board[i] === '') ? '.' : board[i]
    }
    console.log(dump)
}
*/
describe('piece should render', () => {
    let arsenal:string[]

    beforeEach(() => {
        arsenal = []
        for (let i = 0; i < 20 * 10; i++) {
            arsenal.push('')
        }
    })

    describe('with 0deg rotation', () => {
        it('1u', () => {
            const p = new Piece('r', '1u')
            p.setupPosition(10, 20, 1, 1, '0deg', 'front')
            p.emit(arsenal)
            expect(arsenal[1 * 20 + 1]).toBe('r')
        })
        
        it('2u', () => {
            const p = new Piece('r', '2u')
            p.setupPosition(10, 20, 1, 1, '0deg', 'front')
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
        })
    
        it('3uI', () => {
            const p = new Piece('r', '3uI')
            p.setupPosition(10, 20, 1, 1, '0deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[3 * 20 + 1]).toBe('r')
        })
    
        it('3uL', () => {
            const p = new Piece('r', '3uL')
            p.setupPosition(10, 20, 1, 1, '0deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
        })

        it('5uW', () => {
            const p = new Piece('r', '5uW')
            p.setupPosition(10, 20, 1, 1, '0deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
            expect(arsenal[3 * 20 + 3]).toBe('r')
        })

        it('5uX', () => {
            const p = new Piece('r', '5uX')
            p.setupPosition(10, 20, 1, 1, '0deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })
    })

    describe('90deg rotation', () => {
        it('1u', () => {
            const p = new Piece('r', '1u')
            p.setupPosition(10, 20, 1, 1, '90deg', 'front') 
            p.emit(arsenal)
            expect(arsenal[1 * 20 + 1]).toBe('r')
        })
        
        it('2u', () => {
            const p = new Piece('r', '2u')
            p.setupPosition(10, 20, 1, 1, '90deg', 'front') 
            p.emit(arsenal)

            //p.dump()
            //Util.dumpBoard(arsenal, 10, 20)

            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
        })
    
        it('3uI', () => {
            const p = new Piece('r', '3uI')
            p.setupPosition(10, 20, 1, 1, '90deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[1 * 20 + 3]).toBe('r')
        })
    
        it('3uL', () => {
            const p = new Piece('r', '3uL')
            p.setupPosition(10, 20, 1, 1, '90deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
        })

        it('5uW', () => {
            const p = new Piece('r', '5uW')
            p.setupPosition(10, 20, 1, 1, '90deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[1 * 20 + 3]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[3 * 20 + 1]).toBe('r')
        })

        it('5uX', () => {
            const p = new Piece('r', '5uX')
            p.setupPosition(10, 20, 1, 1, '90deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })
    })

    describe('180deg rotation', () => {
        it('1u', () => {
            const p = new Piece('r', '1u')
            p.setupPosition(10, 20, 1, 1, '180deg', 'front') 
            p.emit(arsenal)
            expect(arsenal[1 * 20 + 1]).toBe('r')
        })
        
        it('2u', () => {
            const p = new Piece('r', '2u')
            p.setupPosition(10, 20, 1, 1, '180deg', 'front') 
            p.emit(arsenal)

            //p.dump()
            //Util.dumpBoard(arsenal, 10, 20)

            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
        })
    
        it('3uI', () => {
            const p = new Piece('r', '3uI')
            p.setupPosition(10, 20, 1, 1, '180deg', 'front') 
            p.emit(arsenal)
    
            //p.dump()
            //Util.dumpBoard(arsenal, 10, 20)
    
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[3 * 20 + 1]).toBe('r')
        })
    
        it('3uL', () => {
            const p = new Piece('r', '3uL')
            p.setupPosition(10, 20, 1, 1, '180deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
        })

        it('5uW', () => {
            const p = new Piece('r', '5uW')
            p.setupPosition(10, 20, 1, 1, '180deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 3]).toBe('r')
        })

        it('5uX', () => {
            const p = new Piece('r', '5uX')
            p.setupPosition(10, 20, 1, 1, '180deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })
    })

    describe('270deg rotation', () => {
        it('1u', () => {
            const p = new Piece('r', '1u')
            p.setupPosition(10, 20, 1, 1, '270deg', 'front') 
            p.emit(arsenal)
            expect(arsenal[1 * 20 + 1]).toBe('r')
        })
        
        it('2u', () => {
            const p = new Piece('r', '2u')
            p.setupPosition(10, 20, 1, 1, '270deg', 'front') 
            p.emit(arsenal)

            p.dump()
            Util.dumpBoard(arsenal, 10, 20)

            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
        })
    
        it('3uI', () => {
            const p = new Piece('r', '3uI')
            p.setupPosition(10, 20, 1, 1, '270deg', 'front') 
            p.emit(arsenal)

            //p.dump()
            //Util.dumpBoard(arsenal, 10, 20)

            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[1 * 20 + 3]).toBe('r')
        })
    
        it('3uL', () => {
            const p = new Piece('r', '3uL')
            p.setupPosition(10, 20, 1, 1, '270deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
        })

        it('5uW', () => {
            const p = new Piece('r', '5uW')
            p.setupPosition(10, 20, 1, 1, '270deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 3]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 1]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })

        it('5uX', () => {
            const p = new Piece('r', '5uX')
            p.setupPosition(10, 20, 1, 1, '270deg', 'front') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })
    })

    describe('with 0deg rotation and flip to back', () => {
        it('1u', () => {
            const p = new Piece('r', '1u')
            p.setupPosition(10, 20, 1, 1, '0deg', 'back')
            p.emit(arsenal)
            expect(arsenal[1 * 20 + 1]).toBe('r')
        })
        
        it('2u', () => {
            const p = new Piece('r', '2u')
            p.setupPosition(10, 20, 1, 1, '0deg', 'back')
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
        })
    
        it('3uI', () => {
            const p = new Piece('r', '3uI')
            p.setupPosition(10, 20, 1, 1, '0deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[3 * 20 + 1]).toBe('r')
        })
    
        it('3uL', () => {
            const p = new Piece('r', '3uL')
            p.setupPosition(10, 20, 1, 1, '0deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
        })

        it('5uW', () => {
            const p = new Piece('r', '5uW')
            p.setupPosition(10, 20, 1, 1, '0deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 3]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 1]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })

        it('5uX', () => {
            const p = new Piece('r', '5uX')
            p.setupPosition(10, 20, 1, 1, '0deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })
    })

    describe('with 90deg rotation and flip to back', () => {
        it('1u', () => {
            const p = new Piece('r', '1u')
            p.setupPosition(10, 20, 1, 1, '90deg', 'back')
            p.emit(arsenal)
            expect(arsenal[1 * 20 + 1]).toBe('r')
        })
        
        it('2u', () => {
            const p = new Piece('r', '2u')
            p.setupPosition(10, 20, 1, 1, '90deg', 'back')
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
        })
    
        it('3uI', () => {
            const p = new Piece('r', '3uI')
            p.setupPosition(10, 20, 1, 1, '90deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[1 * 20 + 3]).toBe('r')
        })
    
        it('3uL', () => {
            const p = new Piece('r', '3uL')
            p.setupPosition(10, 20, 1, 1, '90deg', 'back') 
            p.emit(arsenal)
//            console.log('3uL_____________________________________')
//            p.dump()
//            Util.dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
        })

        it('5uW', () => {
            const p = new Piece('r', '5uW')
            p.setupPosition(10, 20, 1, 1, '90deg', 'back') 
            p.emit(arsenal)

//            console.log('5uW_____________________________________')
//            p.dump()
//            Util.dumpBoard(arsenal, 10, 20)
            
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 3]).toBe('r')
        })

        it('5uX', () => {
            const p = new Piece('r', '5uX')
            p.setupPosition(10, 20, 1, 1, '90deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })
    })

    describe('with 180deg rotation and flip to back', () => {
        it('1u', () => {
            const p = new Piece('r', '1u')
            p.setupPosition(10, 20, 1, 1, '180deg', 'back')
            p.emit(arsenal)

            Util.dumpBoard(arsenal, 10, 20)

            expect(arsenal[1 * 20 + 1]).toBe('r')
        })
        
        it('2u', () => {
            const p = new Piece('r', '2u')
            p.setupPosition(10, 20, 1, 1, '180deg', 'back')
            p.emit(arsenal)

            Util.dumpBoard(arsenal, 10, 20)

            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
        })
    
        it('3uI', () => {
            const p = new Piece('r', '3uI')
            p.setupPosition(10, 20, 1, 1, '180deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[3 * 20 + 1]).toBe('r')
        })
    
        it('3uL', () => {
            const p = new Piece('r', '3uL')
            p.setupPosition(10, 20, 1, 1, '180deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
        })

        it('5uW', () => {
            const p = new Piece('r', '5uW')
            p.setupPosition(10, 20, 1, 1, '180deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[1 * 20 + 3]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[3 * 20 + 1]).toBe('r')
        })

        it('5uX', () => {
            const p = new Piece('r', '5uX')
            p.setupPosition(10, 20, 1, 1, '180deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })
    })

    describe('with 270deg rotation and flip to back', () => {
        it('1u', () => {
            const p = new Piece('r', '1u')
            p.setupPosition(10, 20, 1, 1, '90deg', 'back')
            p.emit(arsenal)
            expect(arsenal[1 * 20 + 1]).toBe('r')
        })
        
        it('2u', () => {
            const p = new Piece('r', '2u')
            p.setupPosition(10, 20, 1, 1, '90deg', 'back')
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
        })
    
        it('3uI', () => {
            const p = new Piece('r', '3uI')
            p.setupPosition(10, 20, 1, 1, '90deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[1 * 20 + 3]).toBe('r')
        })

        it('3uL', () => {
            const p = new Piece('r', '3uL')
            p.setupPosition(10, 20, 1, 1, '270deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
        })

        it('5uW', () => {
            const p = new Piece('r', '5uW')
            p.setupPosition(10, 20, 1, 1, '270deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
            expect(arsenal[3 * 20 + 3]).toBe('r')
        })

        it('5uX', () => {
            const p = new Piece('r', '5uX')
            p.setupPosition(10, 20, 1, 1, '270deg', 'back') 
            p.emit(arsenal)
    //        dumpBoard(arsenal, 10, 20)
            expect(arsenal[1 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 1]).toBe('r')
            expect(arsenal[2 * 20 + 2]).toBe('r')
            expect(arsenal[2 * 20 + 3]).toBe('r')
            expect(arsenal[3 * 20 + 2]).toBe('r')
        })
    })

})
