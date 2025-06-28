import './CreateOrder.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../reducers/cartReducer';
import { updateOrder } from '../../reducers/orderReducer';
import { useCreateOrderMutation } from '../../api/apiSlice';

function CreateOrder() {
    const [createOrder, {  error, isLoadingCreate }] = useCreateOrderMutation();
    const cart = useSelector(state => state.cart);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleOrder() {
        try {
            const idList = cart.reduce((acc, item) => {
                return acc.concat(Array(item.quantity).fill(item.id));
            }, []);

            const rtesponse = await createOrder(idList).unwrap();
            dispatch(updateOrder(rtesponse.order.id))
            dispatch(clearCart())
            console.log('Order created:', rtesponse);
            navigate('/eta');
        } catch (err) {
            console.error('Order failed:', err);
        }
    };

    return (
        <>
            <div className="pay-button" onClick={!isLoadingCreate ? handleOrder : null} >{isLoadingCreate ? 'TAKE YOUR MONEY!' : 'TAKE MY MONEY!'}</div>
            {error && <div className="error-message">Något gick fel! Försök igen.</div>}
        </>
    );
}

export default CreateOrder;