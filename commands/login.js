module.exports = {
  command: function (username, password, callback) {
      return this.url('https://checkout.sandbox.netsuite.com/c.4515330_SB3/sca-dev-elbrus/checkout.ssp?is=login&login=T&n=2&fragment=login-register#login-register')
        .setValue('input#login-email.login-register-login-form-input', username)
        .setValue('input#login-password.login-register-login-form-input', password)
        .click('button#login-button.login-register-login-submit')
        .waitForElementVisible('a.header-profile-welcome-link', 30000)
  }
}