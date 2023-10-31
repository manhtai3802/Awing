import { Box, Card, CardActionArea, CardContent } from '@mui/material';
import { useFormikContext } from 'formik';

interface propTypes {
  subCampaignCount: number;
  onClickBox: () => void;
  subCampaign: React.ReactNode;
}

const TabChildAdd = (props: propTypes) => {
  const { subCampaignCount, onClickBox } = props;
  const { values: formikValues } = useFormikContext();
  const currentBox = formikValues.subCampaigns[subCampaignCount];

  const totalDataGrid = currentBox.ads.map((val) => val.quantity);
  const totalQuantity = totalDataGrid.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const titleSubCampaigns = currentBox.name;

  return (
    <Card style={{ margin: '10px', flex: '0 0 auto' }} sx={{ width: 200 }}>
      <CardActionArea onClick={() => onClickBox({ subCampaignCount })}>
        <CardContent>
          <Box style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>{titleSubCampaigns}</Box>
          <Box style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>{totalQuantity}</Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TabChildAdd;
