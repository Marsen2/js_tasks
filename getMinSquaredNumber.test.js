import getMin from "./getMinSquaredNumber";

it('should get min num', () => {
    const res = getMin([-777, 3, -2, 6, 45, -20])
    expect(res).toEqual(4)
})