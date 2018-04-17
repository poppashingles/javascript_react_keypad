var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('keypad functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  it('should display the order buttons', function(){
    // Set variables to the buttons
    getAButton = element(by.css('#get-a-button'));
    getBButton = element(by.css('#get-b-button'));
    getCButton = element(by.css('#get-c-button'));

    // Test that the buttons are rendering to the page
    expect(getAButton.isDisplayed()).to.eventually.be.true;
    expect(getBButton.isDisplayed()).to.eventually.be.true;
    expect(getCButton.isDisplayed()).to.eventually.be.true;
  });

});
