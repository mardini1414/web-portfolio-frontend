function Alert({ text, type }) {
  switch (type) {
    case 'danger':
      return (
        <div className="w-full p-2 text-sm text-white bg-red-500 rounded-md">
          {text}
        </div>
      );
      break;
    case 'success':
      return (
        <div className="w-full p-2 text-sm text-white bg-green-500 rounded-md">
          {text}
        </div>
      );
      break;
    default:
      break;
  }
}

export default Alert;
