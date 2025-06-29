import './Recipt.css'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png'
import colorlogo from '/colorlogo.png'
import { useGetReceiptQuery } from '../../api/apiSlice';
import ReceiptItem from '../../components/ReceiptItem/ReceiptItem';
import ReceiptTotal from '../../components/ReceiptTotal/ReceiptTotal';

function Recipt() {

  let navigate = useNavigate();
  const order = useSelector((state) => {
    return state.order.value;
  });

  const { data: orderData, isLoading } = useGetReceiptQuery(order);
  if (isLoading) return <p>Laddar...</p>;

  const receiptItems = orderData.receipt.items.map(item => (
    <ReceiptItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} />
  ));


  return (
    <>
      <div className="receipt-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="receipt-box">
          <img src={colorlogo} alt="color logo" className="color-logo" />
          <div className="receipt-title">KVITTO</div>
          <div className="receipt-number">#{order}</div>
          <div className="receipt-list">
            {receiptItems}
          </div>
          <ReceiptTotal total={orderData.receipt.orderValue} />
        </div>
        <div className="receipt-button">
          <button onClick={() => navigate('/')}>GÖR EN NY BESTÄLLNING</button>
        </div>
      </div>
    </>
  );
}

export default Recipt;
