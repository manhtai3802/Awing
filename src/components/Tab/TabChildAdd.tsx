import { Box, Card, CardActionArea, CardContent, Paper } from '@mui/material';

interface propTypes {
  subCampaignCount: number;
  onClickBox: () => void;
  subCampaign: React.ReactNode;
}

const TabChildAdd = (props: propTypes) => {
  const { subCampaignCount, onClickBox } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => onClickBox({ subCampaignCount })}>
        <CardContent>
          <Box style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
            Chiến dịch con {subCampaignCount}
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>0</Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TabChildAdd;
