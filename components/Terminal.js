import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Terminal() {
  const [show, setShow] = useState(false);
  const [string1, setString1] = useState('node my-skill.js');
  const [string2, setString2] = useState('');

  const typedRef1 = useRef();
  const typedRef2 = useRef();
  const typed1 = useRef();
  const typed2 = useRef();

  useEffect(() => {
    typed1.current = new Typed(typedRef1.current, {
      strings: [string1],
      loop: true,
      backDelay: 4000,
      typeSpeed: 100,
      onComplete: (self) => {
        setShow(true);
        setString1('');
        setString2('clear');
        self.cursor.style.display = 'none';
      },
    });

    typed2.current = new Typed(typedRef2.current, {
      strings: [string2],
      startDelay: 4000,
      typeSpeed: 100,
      loop: true,
      showCursor: true,
      onComplete: () => {
        setShow(false);
        setString1('node my-skill.js');
        setString2('clear');
      },
    });

    const cursor = document.getElementsByClassName('typed-cursor');
    cursor[1].classList.add('typed-cursor--blink');

    return () => {
      typed1.current.destroy();
      typed2.current.destroy();
    };
  });

  return (
    <div className="max-w-xl rounded-md shadow-md h-80 md:h-96 bg-slate-800">
      <header className="flex gap-1 px-2 py-4 border-b border-slate-500">
        <div className="p-1 bg-red-500 rounded-full"></div>
        <div className="p-1 bg-yellow-500 rounded-full"></div>
        <div className="p-1 bg-green-500 rounded-full"></div>
      </header>
      <div className="px-2">
        <div className="font-normal text-gray-400">
          <span className="font-semibold text-green-500">mardini</span>:~${' '}
          <span ref={typedRef1}></span>
          <br />
          <span className={show ? '' : 'invisible'}>
            [&apos;HTML&apos;, &apos;CSS&apos;, &apos;Javascript&apos;,
            &apos;PHP&apos;, &apos;MySQL&apos;, &apos;Bootstrap&apos;,
            &apos;Tailwind css&apos;, &apos;React js&apos;, &apos;Laravel&apos;,
            &apos;Inertia js&apos;, &apos;Rest api&apos;, &apos;Git&apos;]
          </span>
          <br />
          <span className={show ? '' : 'invisible'}>
            <span className="font-semibold text-green-500">mardini</span>:~${' '}
            <span ref={typedRef2}></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
