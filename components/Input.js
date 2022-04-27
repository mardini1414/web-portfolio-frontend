function Input(props) {
  const { name, id, type, onChange, className, value } = props;
  return (
    <input
      type={type}
      autoComplete="none"
      id={id}
      name={name}
      value={value}
      className={`px-2 py-1 border-2 border-blue-400 rounded-md focus:outline-none focus:shadow-sm focus:shadow-blue-500 ${className}`}
      onChange={onChange}
    />
  );
}

export default Input;
