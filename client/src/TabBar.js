import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TabBar = () => {

    let navigate = useNavigate()

    return (
        <div className='tab'>
            <div className='tab-container'>
                <div onClick={() => {
                    navigate("/")
                }} className='tab-box'>
                    <p>หน้าหลัก</p>
                </div>

                <div className='tab-box'>
                    <p>ประวัติ</p>
                </div>

                <div onClick={()=>{
                    navigate('/profile')
                }} className='tab-box'>
                    <p>โปรไฟล์</p>
                </div>

                <div onClick={()=>{
                    localStorage.removeItem("token")
                    navigate('/sign-in')
                }} className='tab-box'>
                    <p>ออกจากระบบ</p>
                </div>
            </div>
        </div>
    )
}

export default TabBar