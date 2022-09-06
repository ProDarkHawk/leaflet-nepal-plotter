import { LargeText } from "@components/text";
import { UIButton } from "@components/ui";
import { DRAWER_TRANSITION_EXIT_DURATION } from "@utils/constants";
import { useNavigate } from "react-router-dom";

interface CompanyLogoProps {
  onClick?: () => void;
}

const CompanyLogo = ({ onClick }: CompanyLogoProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setTimeout(() => {
      navigate("/");
    }, DRAWER_TRANSITION_EXIT_DURATION);
  };

  return (
    <UIButton
      sx={{
        ":hover": {
          backgroundColor: "unset",
        },
        justifyContent: "start",
      }}
      onClick={handleClick}
    >
      <LargeText bold>LOGO</LargeText>
    </UIButton>
  );
};

export default CompanyLogo;
