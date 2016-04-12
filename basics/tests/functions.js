import test from 'blue-tape'

import {
  map,
} from './../exercises/functions'

test('map function', (t) => {
  t.deepEqual(map([1, 2, 3], x => x * x), [1, 4, 9])
  t.deepEqual(map(['foo', 'bar', 'baz'], x => x.toUpperCase()), ['FOO', 'BAR', 'BAZ'])
  t.deepEqual(map(['a', 'b', 'c'], x => x + x), ['aa', 'bb', 'cc'])
  t.end()
})
