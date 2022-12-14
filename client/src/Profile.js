import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { GetUserService } from './Services'
import TabBar from './TabBar'

const Profile=()=>{

    let [user, setUser] = useState([])

    const RunApi=async()=>{
        let token = await localStorage.getItem('token')
        GetUserService(token).then((res)=>{
            setUser(res)
        })
    }

    useEffect(()=>{
        RunApi()
    }, [])

    return(
        <div>
            <Navbar username={user && user.length > 0 ? user[0].username : null}/>
            <TabBar/>
        </div>
    )
}

export default Profile