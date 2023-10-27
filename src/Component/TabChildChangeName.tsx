import { Box, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';

const TabChildChangeName = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <TextField label="Tên chiến dịch *" variant="standard" fullWidth />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormControlLabel control={<Checkbox />} label="Đang hoạt dộng" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TabChildChangeName;
