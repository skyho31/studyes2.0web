import { combineReducers } from 'redux';
import Dummy from './dummy';

const allReducers = combineReducers({
	dummy: Dummy
})

export default allReducers;

