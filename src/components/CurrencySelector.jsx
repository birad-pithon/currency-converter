const currencies = ["USD", "EUR", "GBP", "JPY", "KES", "RWF"];

export default function CurrencySelector({ fromCurrency, toCurrency, setFromCurrency, setToCurrency }) {
  return (
    <div className="flex gap-4 mb-4">
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        className="w-full p-2 border rounded"
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>{cur}</option>
        ))}
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        className="w-full p-2 border rounded"
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>{cur}</option>
        ))}
      </select>
    </div>
  );
}
