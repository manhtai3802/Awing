import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useState } from 'react';
import TabChild from './TabChild';
import TabInformation from './TabInformation';

const TabLists = () => {
  const [value, setValue] = useState('1');
  // tabCount

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            <Tab label="THÔNG TIN" value="1" />
            <Tab label="CHIẾN DỊCH CON" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TabInformation />
        </TabPanel>
        <TabPanel value="2">
          <TabChild />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabLists;
