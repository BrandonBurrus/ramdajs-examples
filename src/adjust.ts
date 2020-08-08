import { adjust } from 'ramda';

/**
 * Number -> (a -> a) -> [a] -> [a]
 *
 * Takes an index, a function, and an array. The given
 * function will be applies to the element in the array
 * at the given element, and the adjusted array is returned
 */

// [1, 2, 4, 4]
adjust(2, n => n + 1, [1, 2, 3, 4]);

const upper = (str: string) => str.toUpperCase();

// ['A', 'b', 'c']
adjust(0, upper, ['a', 'b', 'c']);
