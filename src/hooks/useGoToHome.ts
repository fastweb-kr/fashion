import { useNavigate } from 'react-router-dom';

const useGoToHome = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return goToHome;
};

export default useGoToHome;
