'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
  });

  it('has board', function() {
    expect(element(by.css('board')).isPresent()).toBe(true);
  });
});
