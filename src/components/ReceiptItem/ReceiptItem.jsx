import './ReceiptItem.css';

function ReceiptItem(props) {
    const { name, quantity, price } = props;

    return (
        <>
            <div className="receipt-item">
                <div className="row">
                    <span className="name">{name}</span>
                    <span className="line"></span>
                    <span className="price">{price} SEK</span>
                </div>
                <div className="quantity">{quantity} stycken</div>
            </div>
        </>
    );
}

export default ReceiptItem;