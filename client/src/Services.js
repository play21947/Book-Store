import axios from 'axios'

const API_URL = 'http://localhost:3001'


export const LoginService=(username, password)=>{
    return new Promise((resolve, reject)=>{
        axios.post(`${API_URL}/api/login`,{
            username: username,
            password: password
        }).then((res)=>{
            resolve(res.data)
        })
    })
}


export const GetUserService=(token)=>{
    return new Promise((resolve, reject)=>{
        axios.get(`${API_URL}/api/user`,{
            headers:{
                'auth-token': token
            }
        }).then((res)=>{
            resolve(res.data)
        })
    })
}


export const GetBookService=()=>{
    return new Promise((resolve, reject)=>{
        axios.get(`${API_URL}/api/books`).then((res)=>{
            resolve(res.data)
        })
    })
}