import { useState, useMemo, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConversionResult from "./components/ConversionResult";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(null);
  const [converted, setConverted] = useState(null);
  const [error, SetError] = useState(null);
  
   const fetchRate = async () => {
     try {
       const res = await fetch(
         `http://data.fixer.io/api/latest?access_key=d920888d43eba4f33aa3018d8da1e724&base=EUR&symbols=RWF`
       );


     if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      const fetchedRate = data.rates[toCurrency];

     if (!fetchedRate) throw new Error("Invalid currency code or missing rate");

      setRate(fetchedRate);
      setConverted((amount * fetchedRate).toFixed(2));
      setError(null);
    } catch (err) {
    console.error("Fetch error:", err);
    setError("Failed to fetch exchange rate.");
    }
  };
 
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Currency Converter</h1>
        <CurrencySelector
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        />
        <AmountInput amount={amount} setAmount={setAmount} />
        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <ConversionResult
            amount={amount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            converted={converted}
            rate={rate}
          />
        )}
      </div>
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
  
