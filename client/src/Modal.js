import React from 'react'

const Modal = ({ setModalStatus, modalStatus, selectItem, setCart, cart }) => {
    return (
        <div className='bg' onClick={() => {
            setModalStatus(!modalStatus)
        }}>
            <div className='modal'>
                {selectItem ? <p>{selectItem.book_name}</p> : null}
                {selectItem ? <img src={selectItem.img}></img> : null}

                <div className='split'>
                    <button className='btn-rent'><p>เช่า</p></button>
                    <button className='btn-buy' onClick={() => {
                        let object_book = {
                            id: selectItem.id,
                            book_name: selectItem.book_name,
                            price: selectItem.price,
                            img: selectItem.img,
                            quantity: 1
                        }


                        console.log("Cart : ", cart)


                        let findSame = cart.filter((item) => { // หาว่าตัวที่เข้ามาซ้ำกับที่อยู่ในตะกร้ามั้ย ถ้ามี return ออกมา
                            return item.id === selectItem.id
                        })




                        if(findSame.length > 0){ // ถ้าเกิดว่ามีตัวที่ซ้ำในตะกร้า

                            console.log("Come In")

                            let update = []

                            update = cart.map((item)=>{ //วนทุกตัวแล้วเช็คทุกตัว่าตัวไหนเป็น id ที่ซ้ำเเละเพิ่ม quantity ให้กับ item นั้น
                                return{
                                    ...item,
                                    quantity: item.id === findSame[0].id ? item.quantity + 1 : item.quantity
                                }
                            })

                            setCart(update) //เปลี่ยนแปลงข้อมูลทั้งหมดโดย Replace หรือ update
                        }else{
                            setCart([...cart, object_book]) // ถ้าเกิดว่าไม่มีให้ใส่ของเก่าไปให้หมดเเล้วเพิ่มของใหม่มา
                        }



                    }}><p>ซื้อ</p></button>
                </div>
            </div>
        </div>
    )
}

export default Modal