import { use, useState } from "react";

export function Jada() {
 const [count, setCount] = useState(0);


  const [dollar, setDollar] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dollarValue = parseFloat(dollar);
    if (!isNaN(dollarValue)) {
      setEuro(dollarValue * 0.92);
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">My Dashboard</h1>

      <div className="section counter-section">
        <h2>Click Counter</h2>
        <p>You clicked {count} times.</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      
      <div className="section converter-section">
        <h2>Dollar to Euro Converter</h2>

        <form onSubmit={handleSubmit} className="converter-form">
          <input
            type="number"
            value={dollar}
            onChange={(e) => setDollar(e.target.value)}
            placeholder="Enter dollars"
            required
            className="input"
          />
          <button type="submit" className="btn btn-success">
            Convert
          </button>
        </form>

        {euro !== null && (
          <p className="result">
            {dollar} USD = {euro.toFixed(2)} EUR
          </p>
        )}
      </div>
    </div>
  );
}