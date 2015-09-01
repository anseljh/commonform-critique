```javascript
var critique = require('commonform-critique')
var assert = require('assert')

assert.deepEqual(
  critique({ content: [ 'to wit' ] }),
  [ { message: 'The phrase "to wit" is archaic.',
      level: 'info',
      path: [ 'content', 0 ],
      source: 'commonform-archaic',
      url: null } ])

assert.deepEqual(
  critique({ content: [ 'to witness' ] }),
  [ ])

assert.deepEqual(
  critique({ content: [ 'in order to' ] }),
  [ { message: 'Replace "in order to" with "to".',
      level: 'info',
      path: [ 'content', 0 ],
      source: 'commonform-critique',
      url: null } ])

assert.deepEqual(
  critique({ content: [ 'this /that' ] }),
  [ { message: 'Remove the space before "/".',
      level: 'info',
      path: [ 'content', 0 ],
      source: 'commonform-critique',
      url: null } ])

assert.deepEqual(
  critique({ content: [ 'this/ that' ] }),
  [ { message: 'Remove the space after "/".',
      level: 'info',
      path: [ 'content', 0 ],
      source: 'commonform-critique',
      url: null } ])

assert.deepEqual(
  critique({ content: [ { form: { content: [ 'this / that' ] } } ] }),
  [ { message: 'Remove the space before "/".',
      level: 'info',
      path: [ 'content', 0, 'form', 'content', 0 ],
      source: 'commonform-critique',
      url: null },
    { message: 'Remove the space after "/".',
      level: 'info',
      path: [ 'content', 0, 'form', 'content', 0 ],
      source: 'commonform-critique',
      url: null } ])
```
