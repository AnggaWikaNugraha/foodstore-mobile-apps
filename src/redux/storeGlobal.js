import {combineReducers} from 'redux';
import StateRegister from './reducer/auth/register'
import StateLogin from './reducer/auth/login'

const reducer = combineReducers({
  StateRegister,
  StateLogin
});


export default reducer;