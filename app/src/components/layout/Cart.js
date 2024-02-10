import { Fragment, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addItem, clearCart, removeItem } from '../../reducer/userSlice'
import Modal from "../utils/Modal"

const Cart = () => {
    const items = useSelector(state => state.user.items)
    const totalAmount = useSelector(state => state.user.totalAmount)
    const dispatch = useDispatch()
    const [showCartModal, setShowCartModal] = useState(false);
    const handleCartModal = () => {
        setShowCartModal(previousState => !previousState);
    };
    const handleOrder = () => {
        setShowCartModal(previousState => !previousState)
        dispatch(clearCart())
        alert("Yayy! Order Placed!")
    }
    return(
        <Fragment>
        <div className="cart-container">
            <button onClick={handleCartModal}>
                <span data-items={items.length}></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>
        </div>
        { showCartModal && 
            <Modal onClose={handleCartModal}>    
                <div className="checkout-modal">
                    <h2>Checkout</h2>        
                    {
                        items.length?
                            <>
                                <div className="checkout-modal_list">
                                    {
                                        items.map(item => {
                                            return(
                                                <Fragment key={item.id}>
                                                    <div className="checkout-modal_list-item">
                                                        <div className="img-wrap">
                                                            <img src={item.img} className="img-fluid" alt={item.img}></img>
                                                        </div>
                                                        <div className="information">
                                                            <div>
                                                                <h4>{item.name}</h4>
                                                                <div className="pricing">
                                                                    <span>{item.price}</span>                                            
                                                                </div>
                                                            </div>
                                                            <div className="cart-addon__modal">
                                                                <button onClick={() => dispatch(removeItem(item.id))}>-</button>
                                                                    <span className="counter">{item.quantity}</span>
                                                                <button onClick={() => dispatch(addItem(item))}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </div>
                                <div className="checkout-modal_footer">
                                    <div className="totalAmount">
                                        <h4>Total Amount : </h4>
                                        <h4>₹ { totalAmount }</h4>
                                    </div>
                                    <button onClick={handleOrder}>Order Now</button>
                                </div>
                            </>
                            :
                            <div className="checkout-modal_list">
                                <div className="empty-cart">Please add items in your cart..</div>
                            </div>   
                    }         
                </div>        
            </Modal> 
        }
        </Fragment>
    );
};

export default Cart;