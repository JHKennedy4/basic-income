/* */ 
var inspect = require('../index');
var test = require('tape');
test('inspect', function(t) {
  t.plan(1);
  var obj = [{inspect: function() {
      return '!XYZ¡';
    }}, []];
  t.equal(inspect(obj), '[ !XYZ¡, [] ]');
});