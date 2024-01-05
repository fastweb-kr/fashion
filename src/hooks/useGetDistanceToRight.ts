import { useEffect, useState } from 'react';

export const useGetDistanceToRight = () => {
  const [distanceToRight, setDistanceToRight] = useState(0);

  const getDistanceToRight = () => {
    const appElement = document.querySelector('.app');

    if (appElement) {
      const rect = appElement.getBoundingClientRect();
      const newDistanceToRight = window.innerWidth - rect.right;

      setDistanceToRight(newDistanceToRight);
    }
  };

  const handleResize = () => {
    getDistanceToRight();
  };

  useEffect(() => {
    getDistanceToRight();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return distanceToRight;
};
