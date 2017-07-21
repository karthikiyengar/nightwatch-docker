describe('login', () => {
  it('should open the test.assos.com page', (client) => {
    client
      .url('http://test.assos.com')
      .waitForElementVisible('body', 1000)
  })
  it('should lead to the my accounts page on login', (client) => {
    client
      .login('test.paperplane@gmail.com', '123assos')
      .assert.visible('h2.section-title')
      .assert.containsText('h2.section-title', 'My Settings')
  })
  it('should preserve the session when redirected to test.assos.com after login', (client) => {
    client
      .login('test.paperplane@gmail.com', '123assos')
      .url('http://test.assos.com')
      .waitForElementVisible('a.header-profile-welcome-link', 1000)
      .assert.containsText('a.header-profile-welcome-link', 'Welcome')
  })
})