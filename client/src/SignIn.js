import React, { useState } from 'react'
import { LoginService } from './Services'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const SignIn=()=>{

    let navigate = useNavigate()

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    return(
        <div>
            <h1>SignIn</h1>
            <p>username</p>
            <input onChange={(e)=>{
                setUsername(e.target.value)
            }}></input>
            <p>password</p>
            <input onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
            <br/>
            <button onClick={()=>{
                if(username && password){
                    LoginService(username, password).then((res)=>{
                        // console.log(res.token)
                        if(res.token){
                            localStorage.setItem('token', res.token)
                            navigate('/')
                        }else{
                            Swal.fire("Username or Password is wrong")
                        }
                    })
                }else{
                    Swal.fire("Please provide your information")
                }
            }}><p>Login</p></button>
        </div>
    )
}

export default SignIn