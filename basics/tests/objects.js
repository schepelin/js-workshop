import test from 'blue-tape'

import {
  collectByFirstLetter,
  wordsCount,
} from './../exercises/objects'

test('collectByFirstLetter function', (t) => {
  t.deepEqual(
    collectByFirstLetter('test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'),
    {
      t: ['test', 'trust'],
      f: ['farm', 'foo'],
      b: ['bar'],
      h: ['ham', 'harm'],
    }
  )
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
    'It works count uppercase')

  t.end()
})
