//We have the actions in Actions.js
//In Reducer.js we will dispath the actions and update them

//Switch case block with all the possibilities present in Actions.js
const Reducer = (state, action) => {
    switch (action.type) {
      //type from Actions.js
      case "LOGIN_START":
        return {
          user: null,
          //Fetching data for the login
          isFetching: true,
          //No error because we are still fetching
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          isFetching: false,
          //The login was a sucess so error=false.
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          isFetching: false,
          //The login was a failure so error=true
          error: true,
        };
      case "LOGOUT":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;