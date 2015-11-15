/* */ 
'use strict';
var test = require('tape');
var isCallable = require('./index');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
var genFn = require('make-generator-function');
var arrowFn = require('make-arrow-function')();
var forEach = require('foreach');
var classConstructor;
try {
  var makeClassConstructor = Function('"use strict"; return class Foo {}');
  classConstructor = makeClassConstructor();
} catch (e) {}
test('not callables', function(t) {
  t.test('non-number/string primitives', function(st) {
    st.notOk(isCallable(), 'undefined is not callable');
    st.notOk(isCallable(null), 'null is not callable');
    st.notOk(isCallable(false), 'false is not callable');
    st.notOk(isCallable(true), 'true is not callable');
    st.end();
  });
  t.notOk(isCallable([]), 'array is not callable');
  t.notOk(isCallable({}), 'object is not callable');
  t.notOk(isCallable(/a/g), 'regex literal is not callable');
  t.notOk(isCallable(new RegExp('a', 'g')), 'regex object is not callable');
  t.notOk(isCallable(new Date()), 'new Date() is not callable');
  t.test('numbers', function(st) {
    st.notOk(isCallable(42), 'number is not callable');
    st.notOk(isCallable(Object(42)), 'number object is not callable');
    st.notOk(isCallable(NaN), 'NaN is not callable');
    st.notOk(isCallable(Infinity), 'Infinity is not callable');
    st.end();
  });
  t.test('strings', function(st) {
    st.notOk(isCallable('foo'), 'string primitive is not callable');
    st.notOk(isCallable(Object('foo')), 'string object is not callable');
    st.end();
  });
  t.end();
});
test('@@toStringTag', {skip: !hasSymbols || !Symbol.toStringTag}, function(t) {
  var fn = function() {
    return 3;
  };
  var fakeFunction = {
    toString: function() {
      return String(fn);
    },
    valueOf: function() {
      return fn;
    }
  };
  fakeFunction[Symbol.toStringTag] = 'Function';
  t.notOk(isCallable(fakeFunction), 'fake Function with @@toStringTag "Function" is not callable');
  t.end();
});
var typedArrayNames = ['Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array'];
test('Functions', function(t) {
  t.ok(isCallable(function() {}), 'function is callable');
  t.ok(isCallable(isCallable), 'isCallable is callable');
  t.end();
});
test('Typed Arrays', function(st) {
  forEach(typedArrayNames, function(typedArray) {
    if (typeof global[typedArray] !== 'undefined') {
      st.ok(isCallable(global[typedArray]), typedArray + ' is callable');
    }
  });
  st.end();
});
test('Generators', {skip: !genFn}, function(t) {
  t.ok(isCallable(genFn), 'generator function is callable');
  t.end();
});
test('Arrow functions', {skip: !arrowFn}, function(t) {
  t.ok(isCallable(arrowFn), 'arrow function is callable');
  t.end();
});
test('"Class" constructors', {skip: !classConstructor}, function(t) {
  t.notOk(isCallable(classConstructor), 'class constructors are not callable');
  t.end();
});