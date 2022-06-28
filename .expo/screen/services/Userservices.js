import env from '../../../Environment/Environment';

const axios = require('axios')

export const registeruser = (user) => {
    return axios.post(`${env.BACKEND_API_URL}/user/registerUser`,user)
}
export const sendOtp = (user) => {
    // console.log(user)
    return axios.post(`${env.BACKEND_API_URL}/otp/sendOtp`,user)
}
export const verifyOtp = (user) => {
    return axios.post(`${env.BACKEND_API_URL}/otp/verifyOtp`,user)
}
export const login = (user) => {
    return axios.post(`${env.BACKEND_API_URL}/user/Login`,user)
}
export const createGroup = (user) => {
   // console.log("Request msg====>",user);
    return axios.post(`${env.BACKEND_API_URL}/user/create_Grp`,user)
}
export const getGroup = (user) => {
    
    return axios.get(`${env.BACKEND_API_URL}/user/get_Grp`,user)
}
export const chatio = (user) => {
    return axios.post(`${env.BACKEND_API_URL}/user/chatio`,user)
}
export const getchatio = (user) => {
    return axios.get(`${env.BACKEND_API_URL}/user/getchatio`,user)
}
export const resetPwd = (user) => {
    // console.log(user,"frontrequest")
    return axios.post(`${env.BACKEND_API_URL}/otp/resetPwd`,user)
}
export const profile = (user) => {
    //console.log(user);
    return axios.post(`${env.BACKEND_API_URL}/user/profile`,user)
}

export const getchatbot = (user) => {
    return axios.get(`${env.BACKEND_API_URL}/ChatBot/getchatbot`,user)
}

export const postchatbot = (user) => {
    // console.log("testingreq",user);
     return axios.post(`${env.BACKEND_API_URL}/ChatBot/chatbot`,user)
}
export const getappuser = (user) => {
    return axios.get(`${env.BACKEND_API_URL}/user/getappuser`,user)
}
