import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import {useNavigate} from 'react-router-dom'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
const navigate=useNavigate()
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()?2:0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getTotalCartAmount()?getTotalCartAmount()+2:getTotalCartAmount()}</b>
            </div>
          </div>
          <div className="proceed"> <button onClick={(e)=>e.preventDefault()} >
            Proceed to Payment
          </button> <button onClick={()=>navigate('/cart')} className="back"  >
            Back to cart
          </button></div>
         
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
