import { useEffect, useState } from 'react';

const useToggleActive = (initialState = false) => {
  const [isActive, setIsActive] = useState(initialState);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  const resetToggleState = () => {
    setIsActive(initialState);
  };

  useEffect(() => {
    return resetToggleState;
  }, []);

  return { isActive, toggleActive, resetToggleState };
};

export default useToggleActive;
