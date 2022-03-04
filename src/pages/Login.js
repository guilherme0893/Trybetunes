import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Button } from 'reactstrap';
import Spinner from 'react-bootstrap/Spinner';
import { createUser } from '../services/userAPI';
// import Loading from '../Loading';

import '../styles/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: '',
      loading: false,
      isButtonDisabled: true,
      loginButtonClicked: false,
    };
  }

  onInputUserChange = (event) => {
    const { value } = event.target;
    this.setState({
      userLogin: value,
    }, () => {
      this.buttonValidationOnInput();
    });
  }

  buttonValidationOnInput= () => {
    const { userLogin } = this.state;
    const inputControl = 3;
    if (userLogin.length >= inputControl) {
      return this.setState({ isButtonDisabled: false });
    } return this.setState({ isButtonDisabled: true });
  }

  onLoginButtonCLick = () => {
    const {
      userLogin,
    } = this.state;

    this.setState({
      loginButtonClicked: true,
    });
    const userName = { name: userLogin };
    createUser(userName)
      .then(() => this.setState({ loading: true }));
  }

  redirectValidation = () => {
    const { loading } = this.state;
    if (loading) return <Redirect to="/search" />;
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  render() {
    const {
      isButtonDisabled,
      loginButtonClicked,
    } = this.state;

    return (
      loginButtonClicked
        ? this.redirectValidation()
        : (
          <div className="mw-100 mh-100">
            <div
              className="pb-3 pt-5 border"
            >
              <h1 className="d-flex justify-content-center">TrybeTunes</h1>
            </div>
            <div
              style={ { backgroundColor: '#353B3C' } }
              className="d-flex justify-content-center flex-wrap pt-5 pb-5"
            >
              <form
                style={ { backgroundColor: '#C6C7C4' } }
                className="border p-5"
                data-testid="page-login"
              >
                <label
                  htmlFor="login-name-input"
                  className="pb-3"
                >
                  <input
                    className="pb-2 pt-2"
                    data-testid="login-name-input"
                    type="text"
                    name="userLogin"
                    placeholder="User name"
                    onChange={ this.onInputUserChange }
                  />
                </label>
                <div
                  className="d-grid gap-2"
                >
                  <Button
                    style={ {
                      backgroundColor: '#846A6A',
                      padding: '2px 10px',
                      // color: 'white',
                      borderRadius: 3,
                    } }
                    variant="primary"
                    size="lg"
                    type="submit"
                    data-testid="login-submit-button"
                    onClick={ this.onLoginButtonCLick }
                    disabled={ isButtonDisabled }
                  >
                    Entrar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )
    );
  }
}

export default Login;
