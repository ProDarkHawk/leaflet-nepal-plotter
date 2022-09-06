import { Backdrop, Button, Typography } from "@mui/material";

const ErrorFallback = () => {
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
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </Backdrop>
  );
};

export default ErrorFallback;
