export default function( state=false, action ){
	switch(action.type) {
		case "LOGIN_ACTION":
			return action.payload;
		default:
			return state;
	}
}