import './Eta.css'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png'
import boxtop from '/boxtop.png'
import EtaTime from '../../components/EtaTime/EtaTime';

function Eta() {

  let navigate = useNavigate();
  const order = useSelector((state) => {
    return state.order.value;
  });


  return (
    <>
      <div className="eta-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <img src={boxtop} alt="boxtop" className="boxtop" />
        <div className="status-text">DINA WONTONS<br/>TILLAGAS!</div>
        <EtaTime />
        <div className="order-number">#{order}</div>
        <div className="order-buttons">
          <button className="order-new" onClick={() => navigate('/')}>GÖR EN NY BESTÄLLNING</button>
          <button className="order-view-rec" onClick={() => navigate('/recipt')}>SE KVITTO</button>
        </div>
      </div>
    </>
  );
}

export default Eta;