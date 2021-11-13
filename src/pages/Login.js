import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      // state original ao carregar a page
      // é o nome do usuário e o que precisa ser capturado
      userLogin: '',
      loading: false,
      isButtonDisabled: true,
    };
  }

  // logica do event do botão

  onInputUserChange = ({ event }) => {
    console.log({ event });
  }

  onLoginButtonCLick = (event) => {
    event.preventDefault();
    console.log('O botão está funcionando!');
  }

  buttonValidationOnInput= () => {
    // checa o input no campo do user e valida, liberando o botao
    const { userLogin } = this.state;
    const inputControl = 3;
    if (userLogin.length > inputControl) {
      // lembra que eventos alteram o STATE!!!
      this.setState({ isButtonDisabled: false });
      // Erro de unused associado a falta do state dentro do render e no filho!!
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  // logica do asyn?

  render() {
    const {
      isButtonDisabled,
      buttonValidationOnInput,
      onInputUserChange,
      onLoginButtonCLick,
    } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <input
            data-testid="login-name-input"
            type="text"
            name="userLogin"
            id="userLogin"
            value=""
            placeholder="User name"
            onChange={ onInputUserChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            onClick={ onLoginButtonCLick }
            disable={ isButtonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;