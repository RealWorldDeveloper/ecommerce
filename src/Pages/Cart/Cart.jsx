import React, { useEffect } from 'react'
import "./Cart.css";
import { useSelector,useDispatch} from 'react-redux';
import { assets } from '../../assets/assets';
import { removeCart,incrementQuantity,decrementQuantity} from '../../Redux/Slice/CartSlice';
import { useNavigate } from 'react-router-dom';
function Cart(){
const cartItems = useSelector((state) => state.cart.items)
const navigate = useNavigate()
const subTotal= useSelector((state)=>state.cart.cartTotal)
const vat = (subTotal*(8/100))
const grandTotal = (subTotal+vat)

  const dispatch = useDispatch()
  return (
    <div>
      {cartItems.length === 0 && (
        <div className='empty-container'>
        <h1 className='cart-empty text-white'>Your Cart is Empty</h1>
        <h3>Continue Shopping .... <strong><a href="/" className='home-tag fs-6 text-primary'>Click Here</a></strong></h3>
        </div>
        )}

{cartItems.length != 0 && (<>
  <h1 className='car-header text-danger p-2'>Shopping Cart</h1>
  <div className="shopping-cart">
  <div className="column-labels">
    <label className="product-image">Image</label>
    <label className="product-details">Product</label>
    <label className="product-price">Product Price</label>
    <label className="product-quantity">Quantity</label>
    <label className="product-removal">Remove</label>
    <label className="product-line-price">Total</label>
  </div>

  {cartItems.map(items => <div className="product">
    <div className="product-image">
      <img src={items.image}/>
    </div>
    <div className="product-details">
      <div className="product-title">{items.name}</div>
      <p className="product-description">{items.description}</p>
    </div>
    <div className="product-price text-white">£{items.price}</div>
    <div className="product-quantity">
      <img  src={assets.remove_icon_red} alt="" onClick={()=>dispatch(decrementQuantity(items))} />
      <span className='quantity'>{items.quantity}</span>
      <img src={assets.add_icon_green} alt="" onClick={()=> dispatch(incrementQuantity(items))}/>
    </div>
    <div className="product-removal">
          <div className='icon' onClick={() => dispatch(removeCart(items))}><i className="fa-solid fa-trash"></i></div>
    </div>
    <div className="product-line-price text-white">{(items.price*items.quantity).toFixed(2)}</div>
  </div>
)}
 <div className="totals">
    <div className="totals-item">
      <label>SubTotal</label>
      <div className="totals-value" id="cart-subtotal">{subTotal.toFixed(2)}</div>
    </div>
    <div className="totals-item">
      <label>Tax (5%)</label>
      <div className="totals-value" id="cart-tax">{vat.toFixed(2)}</div>
    </div>
    <div className="totals-item">
      <label>Shipping</label>
      <div className="totals-value" id="cart-shipping">0.0</div>
    </div>
    <div className="totals-item totals-item-total">
      <label>Grand Total</label>
      <div className="totals-value" id="cart-total">{grandTotal.toFixed(2)}</div>
    </div>
  </div>
      
      <button className="checkout" onClick={()=> navigate('/placeOrder')}>Procceed To Checkout</button>
</div>  
</>  
)}


</div>
)}

export default Cart
