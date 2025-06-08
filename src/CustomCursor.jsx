import { useEffect } from 'react';
import './main.css';

// Need to look for a good cursor css
function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div className="custom-cursor" />;
}

export default CustomCursor;
