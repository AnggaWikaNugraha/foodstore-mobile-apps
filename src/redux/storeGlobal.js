import {combineReducers} from 'redux';
import StateRegister from './reducer/auth/register'
import StateLogin from './reducer/auth/login'
import StateProducts from './reducer/user/products'

const reducer = combineReducers({
  StateRegister,
  StateLogin,
  StateProducts
});


export default reducer;