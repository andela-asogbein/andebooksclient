'use strict';

describe('JXtnsion', function() {

  browser.get('index.html');

    it('display the current local date and time', function() {

    expect(element(by.id('header')).isDisplayed()).toBe(true)
  });
});
