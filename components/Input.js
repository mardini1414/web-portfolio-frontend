function Input({ type, onChange }) {
  return (
    <input
      type={type}
      autoComplete="none"
      id={type}
      name={type}
      className="px-2 py-1 border-2 border-blue-400 rounded-md focus:outline-none focus:shadow-sm focus:shadow-blue-500"
      onChange={onChange}
    />
  );
}

export default Input;
