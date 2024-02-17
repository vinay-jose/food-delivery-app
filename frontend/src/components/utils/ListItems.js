// import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../reducer/userSlice'

const ListItems = ({ item }) => {
    const dispatch = useDispatch()
    let cart_item = useSelector(state => state.user.items.find(i => i.id === item.id))
    // if (!cart_item) cart_item = item
    const increaseCount = () => dispatch(addItem(item))
    const decreaseCount = () => dispatch(removeItem(item.id))
    return(
        <div className="item-card">
            <div className="item-image">
                <img height="100px" width="100px" src={item.img} alt={item.name}/>
            </div>
            <div className="item-details">
                <h4 id="name">{item.name}</h4>
                <h4>₹ {item.price}</h4>
                {
                    cart_item && cart_item.quantity ?
                    <div className="item-cart">               
                        <button className="btn-left" onClick={decreaseCount}>-</button>
                        <span>{cart_item.quantity}</span>
                        <button className="btn-right" onClick={increaseCount}>+</button>
                    </div>                    
                    :
                    <button onClick={increaseCount}>Add to cart</button>
                }
            </div>
        </div>
    )

};

export  default ListItems;