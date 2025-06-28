import { useSelector } from 'react-redux';
import { useGetMenuQuery } from '../../api/apiSlice';
import './TotalBar.css';

function TotalBar() {
    const { data: menuData } = useGetMenuQuery();
    const cart = useSelector(state => state.cart);

    const totalPrice = cart.reduce((sum, item) => {
        const menuItem = menuData?.items.find(m => m.id === item.id);
        return sum + (menuItem ? menuItem.price * item.quantity : 0);
    }, 0);

    return (
        <>
            <div className="total-bar">
                <span className="total-text" >TOTALT</span>
                <span className="total-price">{totalPrice} SEK</span>
            </div>
        </>
    );
}

export default TotalBar;

