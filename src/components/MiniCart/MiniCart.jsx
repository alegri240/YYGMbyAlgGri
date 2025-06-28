import union from '/Union.png'
import { useSelector } from 'react-redux';
import './MiniCart.css'
import { useNavigate } from 'react-router-dom';

function MiniCart() {

    const cart = useSelector(state => state.cart);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let navigate = useNavigate();

    return (
        <div className="basket" onClick={() => navigate('/cart')}>
            <img src={union} alt="basket" />
            <div className="basket-counter">{totalQuantity}</div>
        </div>
    );
}

export default MiniCart;