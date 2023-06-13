import { sum } from '~/utils/helpers';

describe('sum function', () => {
  it('returns the sum of two numbers', () => {
    expect(sum(1, 2)).to.equal(3);
    expect(sum(-1, 1)).to.equal(0);
    expect(sum(0, 0)).to.equal(0);
  });
});
