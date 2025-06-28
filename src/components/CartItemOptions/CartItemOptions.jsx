import { useDispatch } from 'react-redux';
import { addItem } from '../../reducers/cartReducer';
import './CartItemOptions.css';

function CartItemOptions(props) {
    const dispatch = useDispatch();
    const { items, price, name } = props;

    return (
        <div className="menu-item-options"  >
            <div className="title">
                <span className="name">{name}</span>
                <span className="line"></span>
                <span className="price">{price} kr</span>
            </div>
            <div className="meny-options">
                {items.map(item => (
                    <div className="item" key={item.id} onClick={() => dispatch(addItem(item.id))}>{item.name}</div>
                ))}
            </div>
        </div>
    );
}

export default CartItemOptions;