import { useEffect, useState } from 'react';
const UP = 'up';
const DOWN = 'down';

const useScrollDirection = () => {
  const [direction, setDirection] = useState(UP);


  useEffect(() => {
    const threshold = 100;
    let lastYPosition = window.pageYOffset;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentYPosition = window.pageYOffset;
      if (Math.abs(currentYPosition - lastYPosition) < threshold) {
        ticking = false;
        return;
      }
      setDirection((lastYPosition < currentYPosition) ? DOWN : UP);
      lastYPosition = currentYPosition > 0 ? currentYPosition : 0;
      ticking = false;
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    }


    window.addEventListener('scroll', onScroll);
    console.log(direction);

    return () => window.removeEventListener('scroll', onScroll);
  }, [direction]);

  return direction;
}

export default useScrollDirection;