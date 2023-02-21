import {Component} from 'react'

class Register extends Component {
  renderEmailField = () => (
    <>
      <label className="input-label" htmlFor="email">
        Email
      </label>
      <input
        type="text"
        id="email"
        className="password-input-field"
        placeholder="email"
      />
    </>
  )

  renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        onChange={this.onChangePassword}
        placeholder="Password"
      />
    </>
  )

  renderCompnayField = () => (
    <>
      <label className="input-label" htmlFor="company">
        Company Name
      </label>
      <input
        type="text"
        id="company"
        className="username-input-field"
        onChange={this.onChangeUsername}
        placeholder="Companyname"
      />
    </>
  )

  renderAgeField = () => (
    <>
      <label className="input-label" htmlFor="age">
        Age
      </label>
      <input
        type="text"
        id="age"
        className="username-input-field"
        onChange={this.onChangeUsername}
        placeholder="age"
      />
    </>
  )

  renderDOBField = () => (
    <>
      <label className="input-label" htmlFor="dob">
        Date of birth
      </label>
      <input
        type="text"
        id="dob"
        className="username-input-field"
        onChange={this.onChangeUsername}
        placeholder="date of birth"
      />
    </>
  )

  renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-field"
        onChange={this.onChangeUsername}
        placeholder="Username"
      />
    </>
  )

  render() {
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className="login-heading">Create an Account</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderCompnayField()}</div>
          <div className="input-container">{this.renderAgeField()}</div>
          <div className="input-container">{this.renderDOBField()}</div>

          <button type="submit" className="login-button">
            Create Account
          </button>
        </form>
      </div>
    )
  }
}

export default Register
