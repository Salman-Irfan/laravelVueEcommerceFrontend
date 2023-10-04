import BASE_URL from "../constants/baseUrl";
import axios from "axios";

export function adminLogin ({commit}, data){
    const endpoint = "/admin/login";
    return axios.post(`${BASE_URL}${endpoint}`,data)
        .then(({data})=>{
            commit('setUser', data.user);
            commit('setToken', data.token);
            return data;
        })
}