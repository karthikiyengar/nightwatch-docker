describe('login', () => {
  it('should lead to the my accounts page on login', (client) => {
    client
      .login('test.paperplane@gmail.com', '123assos')
      .assert.title('My Account')
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