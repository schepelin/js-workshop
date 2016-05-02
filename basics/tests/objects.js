import test from 'tape-catch'

import {
  collectByFirstLetter,
  wordsCount,
  only,
} from './../exercises/objects'

test('collectByFirstLetter', (t) => {
  t.deepEqual(
    collectByFirstLetter('test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'),
    {
      t: ['test', 'trust'],
      f: ['farm', 'foo'],
      b: ['bar'],
      h: ['ham', 'harm'],
    },
    'It works'
  )
  t.end()
})

test('only function', (t) => {
  t.deepEqual(only({}), {}, 'It works for empty object')
  t.deepEqual(only({foo: 42}, 'test'), {}, 'It ignores keys does not exist')
  t.deepEqual(only({foo: 42, bar: 52}, 'foo'), {foo: 42}, 'It ignores keys does not exist')
  t.end()
})

test('wordsCount function', (t) => {
  t.deepEqual(wordsCount(''), {}, 'It works for empty text')
  t.deepEqual(wordsCount('test'), { test: 1 }, 'It works for one word')
  t.deepEqual(wordsCount('test!'), { test: 1 }, 'It ignores exclamation mark')
  t.deepEqual(wordsCount('test?'), { test: 1 }, 'It ignores question mark')
  t.deepEqual(wordsCount('test,'), { test: 1 }, 'It ignores commas')
  t.deepEqual(wordsCount('test.'), { test: 1 }, 'It ignores dots')
  t.deepEqual(
    wordsCount('Simple sentence for test reason! Test should works fine!'),
    {
      simple: 1,
      sentence: 1,
      for: 1,
      test: 2,
      reason: 1,
      should: 1,
      works: 1,
      fine: 1,
    },
    'It counts uppercase')

  t.end()
})
