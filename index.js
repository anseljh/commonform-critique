var archaic = require('commonform-archaic')
var predicate = require('commonform-predicate')

var rules = [
  require('./rules/phrases'),
  require('./rules/space-around-slashes') ]

var recurse = function(form, path, annotations) {
  return annotations
    // Annotations about `form`
    .concat(
      rules.reduce(
        function(annotations, rule) {
          return annotations.concat(rule(form, path)) },
        [ ]))
    // Annotations about children of `form`.
    .concat(
      form.content.reduce(
        function(annotations, element, index) {
          if (predicate.child(element)) {
            var childForm = element.form
            var childPath = path.concat([ 'content', index, 'form' ])
            return annotations.concat(
              recurse(childForm, childPath, [ ])) }
          else {
            return annotations } },
        [ ])) }

module.exports = function(form) {
  return archaic(form)
    .concat(
      recurse(form, [ ], [ ])
        .map(function(annotation) {
          if (!annotation.hasOwnProperty('source')) {
            annotation.source = 'commonform-critique' }
          if (!annotation.hasOwnProperty('url')) {
            annotation.url = null }
          return annotation })) }
