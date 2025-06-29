import './Cart.css'
import union from '/Union.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItemView from '../../components/CartItemView/CartItemView';
import TotalBar from '../../components/TotalBar/TotalBar';
import CreateOrder from '../../components/CreateOrder/CreateOrder';

function Cart() {
  const cart = useSelector(state => state.cart);
  let navigate = useNavigate();

  const cartItems = cart.map(item => (
    <CartItemView key={item.id} id={item.id} quantity={item.quantity} />
  ));

  return (
    <>
      <div className="order-container">
        <div className="order-header">
          <div className="back-button">
            <button className="back-button" onClick={() => navigate('/')}  >&#8592;</button>
          </div>
          <img src={union} alt="basket" className="cartbasket" />
        </div>
        <div className="order-list">
          {cartItems}
          {cart.length > 0 && <div className="order-list-end"></div>}
        </div>
        <TotalBar />
        <CreateOrder />
      </div>

    </>
  );
}

export default Cart;