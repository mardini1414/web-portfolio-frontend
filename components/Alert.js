function Alert({ text, type }) {
  let color;
  switch (type) {
    case 'danger':
      color = 'red';
      break;
    case 'success':
      color = 'green';
      break;
  }
  return (
    <div
      className={`w-full p-2 text-sm text-${color}-500 border border-${color}-500 rounded-md bg-${color}-500/10`}
    >
      {text}
    </div>
  );
}

export default Alert;
