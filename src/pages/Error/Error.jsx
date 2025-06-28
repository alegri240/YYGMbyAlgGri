import React from "react";
import "./Error.css";

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Page Not Found</p>
      <a href="/" className="error-link">
        Error Go back to Home
      </a>
    </div>
  );
}

export default Error;
