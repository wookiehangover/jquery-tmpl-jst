module("jquery-tmpl-jst");

test("creates a global JST object",function(){
  expect(1);
  ok(window.JST);
});

test("creates static templates object",function(){
  expect(1);
  ok(window.JST.templates);
});

test("sample template should exist",function(){
  expect(2);
  ok(window.JST.sample);
  ok(window.JST.templates.sample);
});

module("sample template");

test("template should compile as expected", function(){
  expect(2);
  var tmp = window.JST.sample({ title: 'foobar', foo: [ 'bar', 'bar', 'bar' ] }),
      content = $('<div>').html( tmp );

  equals( content.find('h1').text(), 'foobar');
  equals( content.find('div').length, 3);
});


module("multiple templates");

test("should created sub templates", function(){
  expect(4);

  ok(window.JST.multiple);
  ok(window.JST.multiple_header);
  ok(window.JST.multiple_footer);
  ok(window.JST.multiple_foo_bar);
});

