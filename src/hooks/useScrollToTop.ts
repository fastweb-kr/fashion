import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    return handleScrollToTop();
  }, [navigate]);
};

export default useScrollToTop;
