function Terminal() {
  return (
    <div className="max-w-lg rounded-md shadow-md h-80 md:h-96 bg-slate-800">
      <header className="flex gap-1 px-2 py-4 border-b border-slate-500">
        <div className="p-1 bg-red-500 rounded-full"></div>
        <div className="p-1 bg-yellow-500 rounded-full"></div>
        <div className="p-1 bg-green-500 rounded-full"></div>
      </header>
      <div className="px-2">
        <div className="font-normal text-gray-400">
          <span className="font-semibold text-green-500">mardini</span>:~$node
          myskill.js
          <br />
          ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'Bootstrap', 'Tailwind
          css', 'React js', 'Laravel', 'Inertia js', 'Rest api', 'Git']
        </div>
      </div>
    </div>
  );
}

export default Terminal;
