import './EtaTime.css';
import { useSelector } from "react-redux";
import { useGetOrderQuery } from '../../api/apiSlice';

function EtaTime() {

    const order = useSelector((state) => {
        return state.order.value;
    });
    const { data: orderData, isLoading } = useGetOrderQuery(order);

    if (isLoading) return <p>Laddar...</p>;

    function getEtaMinutes(timestampIso, etaIso) {
        if (!timestampIso || !etaIso) return null;

        const timestampDate = new Date(timestampIso);
        const etaDate = new Date(etaIso);

        const diffMs = etaDate - timestampDate;
        const diffMinutes = Math.round(diffMs / 60000);

        return diffMinutes;
    }

     const minutesToEta = getEtaMinutes(orderData.order.timestamp, orderData.order.eta);

    return (
        <div className="eta">ETA {minutesToEta} MIN</div>
    );
}

export default EtaTime;