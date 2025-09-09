export default function AmountInput({ amount, setAmount }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full p-2 border rounded"
        min="0"
      />
    </div>
  );
}
