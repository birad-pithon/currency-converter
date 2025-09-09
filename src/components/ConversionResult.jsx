export default function ConversionResult({ amount, fromCurrency, toCurrency, converted, rate }) {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded border">
      <p className="text-lg font-semibold">
        {amount} {fromCurrency} = {converted} {toCurrency}
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Exchange Rate: 1 {fromCurrency} = {rate} {toCurrency}
      </p>
    </div>
  );
}
