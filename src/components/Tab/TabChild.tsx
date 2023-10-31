import { Add } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { FieldArray, useFormikContext } from 'formik';
import TabChildAdd from './TabChildAdd';
import TabChildChangeName from './TabChildChangeName';
import TextField from '../TextField/TextField';
import { useState } from 'react';

const subCampaignsDefVal = {
  name: '',
  status: '',
  ads: [
    {
      name: '',
      quantity: 0,
    },
  ],
};

const TabChild = () => {
  const { values: formikValues } = useFormikContext();
  const [indexBox, setIndexBox] = useState(0);
  const formik = useFormikContext();

  const handleAddData = (helper: any) => () => {
    helper.push(subCampaignsDefVal);
  };

  const handleClickBox = ({ subCampaignCount }: number) => {
    setIndexBox(subCampaignCount);
  };
  return (
    <FieldArray
      name="subCampaigns"
      render={(arrayHelpers) => (
        <Box>
          <Box style={{ display: 'flex' }}>
            <IconButton sx={{ height: 40, width: 40 }} onClick={handleAddData(arrayHelpers)}>
              <Add />
            </IconButton>
            <Box style={{ display: 'flex' }}>
              {formikValues.subCampaigns.map((subCampaign: any, index: number) => (
                <TabChildAdd key={index} subCampaignCount={index} onClickBox={handleClickBox} />
              ))}
            </Box>
          </Box>

          <Box>
            <Box style={{ display: 'flex' }}>
              <TextField
                name={formikValues.subCampaigns[indexBox].name}
                id={formikValues.subCampaigns[indexBox].name}
              />
            </Box>
          </Box>
        </Box>
      )}
    />
  );
};

export default TabChild;
