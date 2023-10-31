import { Add } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { FieldArray, useFormikContext } from 'formik';
import { useState } from 'react';
import TabChildAdd from './TabChildAdd';
import TabChildChangeName from './TabChildChangeName';
import TabChildMarketingList from './TabChildMarketingList';

const TabChild = () => {
  const { values: formikValues } = useFormikContext();
  const [indexBox, setIndexBox] = useState(0);
  const [countBox, setCount] = useState(1);

  const handleAddData = (helper: any) => () => {
    helper.push({
      name: `Chiến dịch con ${countBox + 1}`,
      status: true,
      ads: [
        {
          id: 'abc',
          name: 'Quảng cáo 1',
          quantity: 0,
        },
      ],
    });
    setCount(countBox + 1);
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
            <Box style={{ display: 'flex', width: '1400px', overflow: 'auto' }}>
              {formikValues.subCampaigns.map((subCampaign: any, index: number) => (
                <TabChildAdd key={index} subCampaignCount={index} onClickBox={handleClickBox} />
              ))}
            </Box>
          </Box>

          <Box style={{ margin: '20px' }}>
            <TabChildChangeName indexBox={indexBox} />
          </Box>
          <Box>
            <TabChildMarketingList indexBox={indexBox} />
          </Box>
        </Box>
      )}
    />
  );
};

export default TabChild;
