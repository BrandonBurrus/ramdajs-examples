import { addIndex, map, filter } from 'ramda';

/**
 * ((a -> b) -> [a] -> *) -> ((a, Int, [a] -> b) -> [a] -> *)
 *
 * Takes an iteration function like map or filter and adds the
 * iteration index and the entire target to the iteration function
 */

const mapIndexed = addIndex<string>(map);
const filterIndexed = addIndex(filter);

// [0, 1, 2]
mapIndexed((_num: string, index: number) => index, ['a', 'b', 'c']);

// ['a', 'b']
filterIndexed((_, index: number) => index < 2, ['a', 'b', 'c', 'd', 'e']);
