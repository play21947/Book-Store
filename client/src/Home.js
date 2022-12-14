import React, { useEffect, useState } from 'react'
import { GetBookService, GetUserService } from './Services'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import TabBar from './TabBar'
import Modal from './Modal'


const Home = () => {

    let navigate = useNavigate()
    let [books, setBooks] = useState([])
    let [bookSearch, setBookSearch] = useState([])
    let [user, setUser] = useState([])
    let [textSearch, setTextSearch] = useState('')

    let [modalStatus, setModalStatus] = useState(0)

    let [selectItem, setSelectItem] = useState([])

    let [cart, setCart] = useState([])


    let searchItem = books.filter((item) => {
        return item.book_name.toLowerCase().includes(textSearch) || item.book_name.toUpperCase().includes(textSearch) ? item : null
    })



    const RunApi = async () => {
        let token = await localStorage.getItem("token")

        GetBookService(token).then((res) => {
            if (res.invalid_token) {
                navigate('/sign-in')
            } else {

                setBooks(res)
                // console.log(books)
            }
        })
    }

    useEffect(() => {
        RunApi()
    }, [])

    return (
        <div>
            <Navbar username={user && user.length > 0 ? user[0].username : null} cart={cart} />
            <TabBar />
            {modalStatus ? <Modal setModalStatus={setModalStatus} modalStatus={modalStatus} selectItem={selectItem} setCart={setCart} cart={cart} /> : null}
            <input onChange={(e) => {
                setTextSearch(e.target.value)
            }} className='home-input' placeholder='search'></input>
            <div className='each-card'>
                {searchItem && searchItem.length > 0 ? searchItem.map((item) => {
                    return (
                        <div className='card' key={item.id}>
                            <p className='card-header-text'>{item.book_name}</p>
                            <img src={item.img}></img>
                            {modalStatus ? <button disabled><p className='card-btn-text'>{item.price} ฿</p></button> : <button onClick={() => {
                                setSelectItem(item)
                                setModalStatus(1)
                            }}><p className='card-btn-text'>{item.price} ฿</p></button>}
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Home