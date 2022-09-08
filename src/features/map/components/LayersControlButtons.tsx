import { FlexBox } from "@components/box";
import { ConfirmDialog } from "@components/dialog";
import { UIButton } from "@components/ui";
import { CardActions } from "@mui/material";

export default function LayersControlButton() {
  return (
    <CardActions>
      <FlexBox
        justifyContent={"end"}
        sx={{
          p: 2,
          width: "100%",
        }}
      >
        <UIButton onClick={() => {}} variant="contained">
          Add To Map
        </UIButton>
        <ConfirmDialog renderButtonText="Reset Map" handleProceed={() => {}}>
          Are you sure you want to reset the map?
        </ConfirmDialog>
      </FlexBox>
    </CardActions>
  );
}
