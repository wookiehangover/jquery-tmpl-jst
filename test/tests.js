module("jquery-tmpl-jst");

test("creates a global JST object",function(){
  expect(1);
  ok(window.JST);
});

test("sample template should exist",function(){
  expect(1);
  ok(window.JST.sample);
});

module("sample template");

test("template should compile as expected", function(){
  expect(2);
  var tmp = window.JST.sample({ title: 'foobar', foo: [ 'bar', 'bar', 'bar' ] }),
      content = $('<div>').html( tmp );

  equals( content.find('h1').text(), 'foobar');
  equals( content.find('div').length, 3);
});


