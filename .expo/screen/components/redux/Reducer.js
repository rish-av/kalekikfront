import { Loginuser } from "./Action";

const initialState = {
    user: ''
}
// console.log("reducer", initialState)
function userReducer(state = initialState, action) {
    //    console.log("loginuesrdata",action.payload)
     //console.log("reducertype",action.type)
    switch (action.type) {
        case Loginuser:
            return { ...state, user: action.payload };
        default:
            return state;
    }

}
export default userReducer;
