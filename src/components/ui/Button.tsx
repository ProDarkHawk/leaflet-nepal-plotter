import { LoadingButton } from "@mui/lab";
import { Button, ButtonProps, IconButton } from "@mui/material";
import { GREY_MAIN_COLOR } from "@utils/constants";
import { PulseLoader } from "react-spinners";
interface CustomButtonProps extends ButtonProps {
  as?: string;
  link?: boolean;
  loading?: boolean;
}

const UIButton = ({
  as,
  type = "button",
  children,
  sx,
  link,
  loading,
  ...otherProps
}: CustomButtonProps) => {
  if (as === "icon") {
    return (
      <IconButton
        tabIndex={-1}
        disableRipple
        sx={{
          display: "flex",
          alignItems: "center",
          ...sx,
        }}
        {...otherProps}
      >
        {children}
      </IconButton>
    );
  }

  if (as === "loading") {
    return (
      <LoadingButton
        tabIndex={-1}
        loading={loading}
        variant="contained"
        type="submit"
        loadingIndicator={
          <PulseLoader role={"progressbar"} size={8} color={GREY_MAIN_COLOR} />
        }
        sx={{
          mt: 3,
          mb: 2,
          p: 1.5,
          ":disabled": {
            backgroundColor: "grey.200",
            opacity: 0.5,
            cursor: "not-allowed",
          },
          ...sx,
        }}
        disabled={loading}
        {...otherProps}
      >
        {children}
      </LoadingButton>
    );
  }

  return (
    <Button
      tabIndex={-1}
      disableRipple
      disableFocusRipple
      sx={{
        textTransform: "none",
        color: "light.main",
        ":hover": {
          backgroundColor: link ? "unset" : "",
          textDecoration: "",
        },
        ...sx,
      }}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default UIButton;
