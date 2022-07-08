import {reverseArray, getAdults, withdraw}  from "./index"
// TASK 1
it('should reverse arr', () => {
    let res = reverseArray(['tests'])
    expect(res).toEqual('sestt')
});
it('should reverse arr', () => {
    let res = reverseArray(['1num2'])
    expect(res).toEqual('2num1')
});
it('should reverse arr', () => {
    let res = reverseArray(['get'])
    expect(res).toEqual('teg')
});



// TASK 2
it('should get fixed object', () => {
    let res = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })
    expect(res).toEqual({ 'John Doe': 19, Bob: 18 })
});
it('should get fixed object', () => {
    let res = getAdults({ 'Mark': 43434, Landie: 1, Bobs: 18 })
    expect(res).toEqual({ 'Mark': 19, Bobs: 18 })
});
it('should get fixed object', () => {
    let res = getAdults({ 'David': 9, Tom: 2, Bob: 19 })
    expect(res).toEqual({Bob: 19 })
});



// TASK 3
it('should get account balance', () => {
    let res = withdraw((['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50))
    expect(res).toEqual(37)
});
it('should get account balance', () => {
    let res = withdraw((['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10))
    expect(res).toEqual(-1)
});
it('should get account balance', () => {
    let res = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
    expect(res).toEqual({Bob: 19 })
});