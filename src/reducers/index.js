import { combineReducers } from 'redux';
import LoginState from './login';

const allReducers = combineReducers({
	loginState: LoginState
})

export default allReducers;

