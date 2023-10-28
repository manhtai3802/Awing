import { TextField } from '@mui/material';

const TabInformation = () => {
  return (
    <div>
      <TextField label="Tên chiến dịch *" fullWidth variant="standard" />
      <TextField label="Mô tả" fullWidth variant="standard" />
    </div>
  );
};

export default TabInformation;
