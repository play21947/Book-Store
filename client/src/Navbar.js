import React from 'react'


const Navbar = ({ username, cart }) => {
    return (
        <div className='nav'>
            <h1 className='home-header'>ALL ANIME BOOKS</h1>
            <div>
                <div onClick={()=>{
                    console.log(cart)
                }} style={{backgroundColor: 'firebrick', width: '50px', height:'50px', borderRadius: '190px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
                    <p className='count'>{cart ? cart.length : null}</p>
                </div>
                <p className='nav-name'>ผู้ใช้ : ?</p>
            </div>
        </div>
    )
}

export default Navbar