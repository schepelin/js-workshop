import test from 'blue-tape'

import {
    concat,
    oddElements,
    wordsCount,
} from './../src/basics/strings'

test('concat function', (t) => {
    t.equal(concat('test', 'bar'), 'testbar')
    t.equal(concat('test'), 'test')
    t.equal(concat('1', '2', '3'), '123')

    t.end()
})

test('oddElements function', (t) => {
    t.equal(oddElements('test'), 'ts')
    t.equal(oddElements(''), '')

    t.end()
})

test('wordsCount function', (t) => {
    t.equal(wordsCount(''), 0)
    t.equal(wordsCount('test'), 1)
    t.equal(wordsCount('test bar baz'), 3)

    t.end()
})
