import './ReceiptTotal.css';

function ReceiptTotal(props) {

    const { total } = props;

    return (
        <div className="receipt-total">
            <div className="amounts">
                <span>TOTALT</span>
                <span className="amount-value">{total} SEK</span>
            </div>
            <div className="tax">inkl moms 12%</div>
        </div>
    );
}

export default ReceiptTotal;

