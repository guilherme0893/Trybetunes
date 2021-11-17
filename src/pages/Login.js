import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from '../Loading';

class Login extends Component {
  constructor(props) {
    super(props);
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
    // console.log('Estou capturando o input!!');
    const { value } = event.target;
    this.setState({
      userLogin: value,
      // chamar a validação como callback
    }, () => {
      this.buttonValidationOnInput();
    });
  }

  buttonValidationOnInput= () => {
    // checa o input no campo do user e valida, liberando o botao
    const { userLogin } = this.state;
    // console.log(userLogin);
    const inputControl = 3;
    if (userLogin.length >= inputControl) {
      // lembra que eventos alteram o STATE!!!
      return this.setState({ isButtonDisabled: false });
      // Erro de unused associado a falta do state dentro do render e no filho!!
    } return this.setState({ isButtonDisabled: true });
  }

  onLoginButtonCLick = () => {
    // event.preventDefault();
    // console.log('O botão está funcionando!');
    const {
      userLogin,
      // loading,
      // isButtonDisabled,
      // loginButtonClicked,
    } = this.state;

    this.setState({
      loginButtonClicked: true,
    });
    const userName = { name: userLogin };
    // captura o state, ou seja, o valor no input e chama a API
    createUser(userName)
      .then(() => this.setState({ loading: true }));
  }

  redirectValidation = () => {
    const { loading } = this.state;
    if (loading) return <Redirect to="/search" />;
    return <Loading />;
  }

  render() {
    console.log('eu sou o login.js');
    console.log(this.props);
    const {
      isButtonDisabled,
      loginButtonClicked,
    } = this.state;

    return (
      loginButtonClicked
        ? this.redirectValidation()
        : (
          <div data-testid="page-login">
            <form>
              <label htmlFor="login-name-input">
                <input
                  data-testid="login-name-input"
                  type="text"
                  name="userLogin"
                  placeholder="User name"
                  // isso nao é state! estava sendo passado sem o this
                  onChange={ this.onInputUserChange }
                />
              </label>
              <button
                type="submit"
                data-testid="login-submit-button"
                onClick={ this.onLoginButtonCLick }
                disabled={ isButtonDisabled }
              >
                Entrar
              </button>
            </form>
          </div>
        )
    );
  }
}

export default Login;
