
/*
collect array's element to object with first letters as keys
and sorted words array as a value
['test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'] -> {
  't': ['test', 'trust'],
  'f': ['farm', 'foo'],
  'b': ['bar'],
  'h': ['ham', 'harm'],
}
*/
export function collectByFirstLetter(...words) {
  return {}
}


/*
Functon counts a words in givent text.
returns an object with word as key and it's frequence as value
Note: It should ignore punctuation marks and uppercese symbols!

'awesome! Test it! It should works' yields
{
  awesome: 1,
  test: 1,
  it: 2,
  should: 1,
  works: 1,
}
'' yields {}
*/
export function wordsCount(text) {
  const result = {}
  const clean = item => item.replace('?', '').replace('!', '').replace(',', '').replace('.', '').toLowerCase()
  for (let word of text.split(' ')) {
    const cleaned = clean(word)
    if (cleaned.length) result[cleaned] = (result[cleaned] || 0) + 1

  }
  return result
}
