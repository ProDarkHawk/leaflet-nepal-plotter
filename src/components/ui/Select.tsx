import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface UISelectProps {
  label: string;
  items: Array<string>;
  selectedItem: string;
  handleOnChange: (e: SelectChangeEvent) => void;
}

const UISelect = ({
  label,
  items,
  selectedItem,
  handleOnChange,
  ...otherProps
}: UISelectProps) => {
  return (
    <FormControl
      fullWidth
      size="small"
      sx={{
        px: 1,
      }}
    >
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        autoWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedItem}
        label={label}
        onChange={handleOnChange}
        {...otherProps}
      >
        {items.map((item, i) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UISelect;
