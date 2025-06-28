import { useDispatch } from 'react-redux';
import { addItem } from '../../reducers/cartReducer';
import './CartItem.css'

function CartItem(props) {
    const { id, name, price, description } = props.data;
      const dispatch = useDispatch();

    return (
        <div className="menu-item" onClick={() => dispatch(addItem(id))}>
            <div className="title">
                <span className="name">{name}</span>
                <span className="line"></span>
                <span className="price">{price} kr</span>
            </div>
            <div className="ingredients">{description}</div>
        </div>
    );
}

export default CartItem;