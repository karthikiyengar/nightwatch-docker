describe('write a review', () => {
  it('should prompt for a login if the user is not logged in', (client) => {
    client
      .url('http://test.assos.com/Rally-Shorts/newReview')
      .waitForElementVisible('.product-reviews-form', 1000)
      .assert.visible('.product-reviews-form')
      .assert.containsText('.product-reviews-form', `You need to be logged in to write a review, Login`)
  })
})

describe('write a review when logged in', () => {
  beforeEach((client, done) => {
    client.login('test.paperplane@gmail.com', '123assos');
    done();
  })
  it('should show the submit review button when the user is logged in', (client) => {
    client
      .url('http://test.assos.com/Rally-Shorts/newReview')
      .waitForElementVisible('body', 1000)
      .assert.visible('button.product-reviews-form-actions-button-submit')
  })
})