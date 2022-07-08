import {calc} from "./calculator";
it('return a + b', () => {
    const result = calc('1 + 2');

    expect(result).toEqual('1 + 2 = 3');
});
it('return a - b', () => {
    const result = calc('1 - 2');

    expect(result).toEqual('1 - 2 = -1');
});
it('return a * b', () => {
    const result = calc('1 * 2');

    expect(result).toEqual('1 * 2 = 2');
});
it('return a / b', () => {
    const result = calc('1 / 2');

    expect(result).toEqual('1 / 2 = 0.5');
});
