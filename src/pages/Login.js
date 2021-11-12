import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      //
      loading: false,
    };
  }
  // logica do event do botão

  // logica do asyn

  render() {
    // aqui vai entrar os states e a logica
    // length de 3
    return (
      <div data-testid="page-login">
        <form>
          <label>
            <input
              data-testid="login-name-input"
            />
          </label>
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
