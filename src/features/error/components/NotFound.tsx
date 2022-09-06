import { Backdrop, Button, Typography } from "@mui/material";

const NotFound = () => {
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
        Page not found
      </Typography>
      <Button
        variant="contained"
        color="dark"
        onClick={() => (window.location.href = "/")}
      >
        Go to home
      </Button>
    </Backdrop>
  );
};

export default NotFound;
