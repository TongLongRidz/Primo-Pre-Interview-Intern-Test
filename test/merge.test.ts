import { merge } from '../src/merge';

describe('Merge Function', () => {
  test('TC1: Should merge 3 arrays correctly', () => {
    const c1 = [1, 3, 5];
    const c2 = [2, 4, 6];
    const c3 = [9, 7, 0];

    expect(merge(c1, c2, c3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  test('TC2: Empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test('TC3: One empty array', () => {
    expect(merge([1,2], [], [5,4])).toEqual([1,2,4,5]);
  });

  test('TC4: Duplicates members', () => {
    expect(merge([1,2,2], [2,3], [5,4])).toEqual([1,2,2,2,3,4,5]);
  });
});
