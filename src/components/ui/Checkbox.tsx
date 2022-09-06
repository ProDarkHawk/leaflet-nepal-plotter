import { Checkbox, FormControlLabel } from "@mui/material";

interface ICheckbox {
  item: string;
  checked: boolean;
  onSelectItem: () => void;
}

const UICheckbox = ({ item, checked = false, onSelectItem }: ICheckbox) => {
  return (
    <FormControlLabel
      sx={{
        px: 1,
      }}
      control={
        <Checkbox
          name={item}
          size="small"
          checked={checked}
          onChange={() => onSelectItem()}
        />
      }
      label={item}
    />
  );
};

export default UICheckbox;
