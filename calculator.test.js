import getSum, {getSquaredArray, getOddNumbers} from './calculator'
it('should get squared num', () => {
    const res = getSquaredArray([1, 2, 3])
    expect(res).toEqual([1, 4, 9])
})


it('should get odd num', () => {
    const res = getOddNumbers([1, 2, 3, 4, 5])
    expect(res).toEqual([1, 3, 5])
})
it('should get sum of num', () => {
    const res = getSum(8, 4)
    expect(res).toEqual(12)
})