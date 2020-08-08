import { all } from 'ramda';

/**
 * (a -> Boolean) -> [a] -> Boolean
 *
 * Takes a predicate function and an array, returning true if all
 * the elements in the given array return true from the predicate
 * function
 */

const isEven = (num: number) => num % 2 === 0;

// false
all(isEven, [1, 2, 3, 4]);

const allEven = all(isEven);

// true
allEven([2, 4, 6]);
