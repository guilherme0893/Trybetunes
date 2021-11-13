import React, { Component } from 'react';
import { createUser } from '../services/userAPI';
import { Redirect } from 'react-router';
import Loading from '../Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      // state original ao carregar a page
      // é o nome do usuário e o que precisa ser capturado
      userLogin: '',
      loading: false,
      isButtonDisabled: true,
      loginButtonClicked: false,
    };
  }

  // logica do event do botão
  onInputUserChange = (event) => {
    // console.log({ event });
    const { value } = event.target;
    this.setState({
      userLogin: value,
      // chamar a validação como callback
    }, () => {
      this.buttonValidationOnInput();
    });
  }

  onLoginButtonCLick = (event) => {
    event.preventDefault();
    // console.log('O botão está funcionando!');
    const { userLogin } = this.state;
    this.setState({ loginButtonClicked: true });
    // captura o state, ou seja, o valor no input e chama a API
    createUser({ name: userLogin })
      .then(() => this.setState({ loading: false }));
  }

  buttonValidationOnInput= () => {
    // checa o input no campo do user e valida, liberando o botao
    const { userLogin } = this.state;
    // console.log(userLogin);
    const inputControl = 3;
    if (userLogin.length >= inputControl) {
      // lembra que eventos alteram o STATE!!!
      this.setState({ isButtonDisabled: false });
      // Erro de unused associado a falta do state dentro do render e no filho!!
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  redirectValidation = () => {
    const { loading } = this.state;
    if (loading) return <Redirect to="/search" />;
    return <Loading />;
  }

  render() {
    const {
      isButtonDisabled,
      onInputUserChange,
      onLoginButtonCLick,
      // userLogin,
    } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <input
            data-testid="login-name-input"
            type="text"
            name="userLogin"
            // value={ userLogin }
            placeholder="User name"
            onChange={ onInputUserChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            onClick={ onLoginButtonCLick }
            disabled={ isButtonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
