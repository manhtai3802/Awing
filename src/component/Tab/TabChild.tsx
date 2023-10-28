import { Box } from '@mui/material';
import { useState } from 'react';
import TabChildAdd from './TabChildAdd';
import TabChildChangeName from './TabChildChangeName';
import TabChildMarketingList from './TabChildMarketingList';

interface TabChild {
  newData: React.ReactNode;
}

const TabChild = () => {
  const [data, setData] = useState();

  const handleData = (props: TabChild) => {
    const { newData } = props;
    console.log(newData);

    setData(newData);
  };
  return (
    <Box>
      <TabChildAdd />
      <TabChildChangeName />
      <TabChildMarketingList handleDataGrid={handleData} />
    </Box>
  );
};

export default TabChild;
