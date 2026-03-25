export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const c3 = reverseArray(collection_3);
  const mergedc1c2 = mergeAndSortedTwoArray(collection_1, collection_2);
  return mergeAndSortedTwoArray(mergedc1c2, c3);
}

function reverseArray(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function mergeAndSortedTwoArray(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i++;
  }

  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
}
