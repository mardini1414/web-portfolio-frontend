function Alert({ text }) {
  return (
    <div className="w-full p-2 text-sm text-red-500 border border-red-500 rounded-md bg-red-500/30">
      {text}
    </div>
  );
}

export default Alert;
