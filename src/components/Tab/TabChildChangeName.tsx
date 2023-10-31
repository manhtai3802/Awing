import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import TextField from '../TextField/TextField';

const TabChildChangeName = ({ data }: any) => {
  console.log(data);

  const formik = useFormikContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box style={{ display: 'flex' }}>
        <TextField name={data.name} id={data.name} formik={formik} />

        {/* <Field name={subCampaign?.name} components={TextField} variant="standard" /> */}
        {/* <FormControlLabel control={<Checkbox name={subCampaign?.status} />} label="Đang hoạt dộng" xs={6} md={4} /> */}
      </Box>
    </Box>
  );
};

export default TabChildChangeName;
