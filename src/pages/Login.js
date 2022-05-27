import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Button, Typography, Input, InputLabel, Box, Stack } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import GlobalContext from '../context/GlobalContext';
// import PersonIcon from '@mui/icons-material/Person';
// import Spinner from 'react-bootstrap/Spinner';
// import { createUser } from '../services/userAPI';

function Login() {
  const history = useHistory();

  const {
    login,
    setLogin,
    isButtonDisabled,
    setIsButtonDisabled,
  } = useContext(GlobalContext);

  const handleLoginInput = ({ target }) => {
    const inputControl = 3;
    if (target.value.length > inputControl) {
      setLogin(target.name);
      setIsButtonDisabled(false);
    }
  };

  console.log(login);

  return (
    // loginButtonClicked
    //   ? this.redirectValidation()
    //   : (
    <Box>
      <Stack
        direction="row"
        spacing={ 10 }
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h1" component="h1">
          TrybeTunes
        </Typography>
        <Box style={ { display: 'flex-column' } }>
          <InputLabel
            htmlFor="login-name-input"
          >
            <Input
              // inputProps={ ariaLabel }
              data-testid="login-name-input"
              type="text"
              placeholder="user@email.com"
              onChange={ handleLoginInput }
            />
          </InputLabel>
          <Button
            style={ { marginTop: '15px' } }
            padding="1"
            variant="contained"
            startIcon={ <LoginIcon /> }
            type="submit"
            data-testid="login-submit-button"
            onClick={ () => history.push('/search') }
            disabled={ isButtonDisabled }
          >
            Entrar
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userLogin: '',
//       loading: false,
//       isButtonDisabled: true,
//       loginButtonClicked: false,
//     };
//   }

//   onInputUserChange = (event) => {
//     const { value } = event.target;
//     this.setState({
//       userLogin: value,
//     }, () => {
//       this.buttonValidationOnInput();
//     });
//   }

//   buttonValidationOnInput= () => {
//     const { userLogin } = this.state;
//     const inputControl = 3;
//     if (userLogin.length >= inputControl) {
//       return this.setState({ isButtonDisabled: false });
//     } return this.setState({ isButtonDisabled: true });
//   }

//   onLoginButtonCLick = () => {
//     const {
//       userLogin,
//     } = this.state;

//     this.setState({
//       loginButtonClicked: true,
//     });
//     const userName = { name: userLogin };
//     createUser(userName)
//       .then(() => this.setState({ loading: true }));
//   }

//   redirectValidation = () => {
//     const { loading } = this.state;
//     if (loading) return <Redirect to="/search" />;
//     return (
//       <Spinner animation="border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>
//     );
//   }

//   render() {
//     const {
//       isButtonDisabled,
//       loginButtonClicked,
//     } = this.state;

//     const ariaLabel = { 'aria-label': 'description' };

//     return (
//       loginButtonClicked
//         ? this.redirectValidation()
//         : (
//           <Box>
//             <Stack
//               direction="row"
//               spacing={ 10 }
//               justifyContent="center"
//               alignItems="center"
//               minHeight="100vh"
//             >
//               <Typography variant="h1" component="h1">
//                 TrybeTunes
//               </Typography>
//               <Box style={ { display: 'flex-column' } }>
//                 <InputLabel
//                   htmlFor="login-name-input"
//                 >
//                   <Input
//                     inputProps={ ariaLabel }
//                     data-testid="login-name-input"
//                     type="text"
//                     name="userLogin"
//                     placeholder="user@email.com"
//                     onChange={ this.onInputUserChange }
//                   />
//                 </InputLabel>
//                 <Button
//                   style={ { marginTop: '15px' } }
//                   padding="1"
//                   variant="contained"
//                   startIcon={ <LoginIcon /> }
//                   type="submit"
//                   data-testid="login-submit-button"
//                   onClick={ this.onLoginButtonCLick }
//                   disabled={ isButtonDisabled }
//                 >
//                   Entrar
//                 </Button>
//               </Box>
//             </Stack>
//           </Box>
//         )
//     );
//   }
// }

export default Login;
