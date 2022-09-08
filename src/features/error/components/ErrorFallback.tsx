import { Backdrop, Button, Typography } from "@mui/material";
import { useQueryErrorResetBoundary } from "react-query";

const ErrorFallback = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Backdrop
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open
    >
      <Typography color={"red"} fontSize={32} p={2}>
        Ooops, something went wrong
      </Typography>
      <Button
        variant="contained"
        color="dark"
        onClick={() => {
          reset();
          window.location.assign(window.location.origin);
        }}
      >
        Refresh
      </Button>
    </Backdrop>
  );
};

export default ErrorFallback;
