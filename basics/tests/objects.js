import test from 'blue-tape'

import { collectByFirstLetter } from './../exercises/objects'

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
