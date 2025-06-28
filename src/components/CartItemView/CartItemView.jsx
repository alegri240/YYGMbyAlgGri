import './CartItemView.css'
import { useGetMenuQuery } from '../../api/apiSlice';
import {  useDispatch } from 'react-redux';
import {  removeItem } from '../../reducers/cartReducer';

function CartItemView(props) {
    const { data: menyData } = useGetMenuQuery();
    const { id, quantity } = props;
    const dispatch = useDispatch();
    const item = menyData?.items.find(item => item.id === id);    

    return (
        <div className="order-item" onClick={() => dispatch(removeItem(id))} >
            <span className="name">{item.name}</span>
            <span className="line"></span>
            <span className="price">{quantity*item.price} SEK</span>
        </div>
    );
}

export default CartItemView;
