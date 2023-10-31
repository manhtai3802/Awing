/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import TextField from '../TextField/TextField';

interface PropsTypeTabChildChangeName {
  indexBox: number;
}

const TabChildChangeName = (props: PropsTypeTabChildChangeName) => {
  const { indexBox } = props;
  const { values } = useFormikContext<any>();

  return (
    <Box width="100%" display={'flex'}>
      <TextField name={`subCampaigns[${indexBox}].name`} value={values.subCampaigns[indexBox].name} />
      <Field
        type="checkbox"
        name={`subCampaigns[${indexBox}].status`}
        as={FormControlLabel}
        control={<Checkbox />}
        label="Đang hoạt động"
      />
    </Box>
  );
};

export default TabChildChangeName;
