export const getSquaredArray = num =>
    num.map(num => num * num)

export const getOddNumbers = num =>
    num.filter(num => (num % 2 === 1))

export default (a, b) => a + b;