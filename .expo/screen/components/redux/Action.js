export const Loginuser="Loginuser";

export const logindata=(data)=>dispatch=>{
    //console.log(data,"data action")
    dispatch({
        type:Loginuser,
        payload:data,
    });
};
