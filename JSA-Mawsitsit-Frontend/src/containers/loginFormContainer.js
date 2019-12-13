// External Dependencies
import { connect } from 'react-redux';
import LoginForm from '../components/Login/LoginForm';

// Internal Dependencies
import { fetchLoginAction, updateLoginInfoAction } from '../components/Login/actions/loginAction';

const mapStateToProps = (state) => {
  const { loginInput, loginResponse } = state.loginForm;
  return { loginInput, loginResponse };
};

export default connect(mapStateToProps, {
  onUpdateLoginInfo: updateLoginInfoAction,
  onFetchLogin: fetchLoginAction,
})(LoginForm);
