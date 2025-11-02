import React, { useState } from "react";

export function Jada() {
  const [count, setCount] = useState(0);

  const [dollar, setDollar] = useState("");
  const [euro, setEuro] = useState("");
  const [convertedEuro, setConvertedEuro] = useState(null);
  const [convertedDollar, setConvertedDollar] = useState(null);

  const handleDollarSubmit = (e) => {
    e.preventDefault();
    const dollarValue = parseFloat(dollar);
    if (!isNaN(dollarValue)) {
      setConvertedEuro(dollarValue * 0.92); // 1 USD → 0.92 EUR
      setConvertedDollar(null); // reset the other conversion
    }
  };

  const handleEuroSubmit = (e) => {
    e.preventDefault();
    const euroValue = parseFloat(euro);
    if (!isNaN(euroValue)) {
      setConvertedDollar(euroValue * 1.12); // 1 EUR → 1.12 USD
      setConvertedEuro(null);
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">My Dashboard</h1>

      {/* Counter Section */}
      <div className="section counter-section">
        <h2>Click Counter</h2>
        <p>You clicked 🎃 {count} times.</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>

      {/* Converter Section */}
      <div className="section converter-section">
        <h2>Currency Converter</h2>

        {/* Dollar to Euro */}
        <form onSubmit={handleDollarSubmit} className="converter-form">
          <input
            type="number"
            value={dollar}
            onChange={(e) => setDollar(e.target.value)}
            placeholder="Enter USD"
            required
            className="input"
          />
          <button type="submit" className="btn btn-success">
            Convert to EUR
          </button>
        </form>

        {/* Euro to Dollar */}
        <form onSubmit={handleEuroSubmit} className="converter-form">
          <input
            type="number"
            value={euro}
            onChange={(e) => setEuro(e.target.value)}
            placeholder="Enter EUR"
            required
            className="input"
          />
          <button type="submit" className="btn btn-success">
            Convert to USD
          </button>
        </form>

        {/* Results */}
        {convertedEuro !== null && (
          <p className="result">
            {parseFloat(dollar).toFixed(2)} USD = {convertedEuro.toFixed(2)} EUR
          </p>
        )}

        {convertedDollar !== null && (
          <p className="result">
            {parseFloat(euro).toFixed(2)} EUR = {convertedDollar.toFixed(2)} USD
          </p>
        )}
      </div>
    </div>
  );
}
