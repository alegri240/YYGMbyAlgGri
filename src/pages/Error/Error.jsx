import "./Error.css";

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Opps vi hittade inte den efterfrågade sidan.</p>
      <a href="/" className="error-link">
        Tillbaka till menyn
      </a>
    </div>
  );
}

export default Error;
