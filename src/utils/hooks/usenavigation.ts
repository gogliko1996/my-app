import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const navigation = (screen: string, props?: {}) => {
    if (props) {
      navigate(screen, { state: props });
    } else {
      navigate(screen);
    }
  };

  return { goback, navigation };
};
