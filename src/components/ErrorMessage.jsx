export default function ErrorMessage({ message }) {
  return (
    <div className="mt-4 p-4 bg-red-100 text-red-700 rounded border border-red-300">
      <p>{message}</p>
    </div>
  );
}
