import { __, curry } from 'ramda';

/**
 * __ is a special "placeholder" value to apply partial application on any of the
 * other ramda functions
 */

const sum = curry((a: number, b: number) => {
  return a + b;
});

const increment = sum(__, 1);

increment(10);
