import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Sidebar({ children }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    ref.current = document.createElement('div');
    document.body.appendChild(ref.current);

    if (ref.current.parentElement) {
      ref.current.parentElement.classList.add('body-fixed');
    }

    setMounted(true);
    return () => {
      ref.current.parentElement.classList.remove('body-fixed');
      document.body.removeChild(ref.current);
    };
  }, []);

  return mounted ? createPortal(children, ref.current) : null;
}
