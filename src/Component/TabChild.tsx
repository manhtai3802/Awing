import { Box } from '@mui/material';
import TabChildAdd from './TabChildAdd';
import TabChildChangeName from './TabChildChangeName';
import TabChildMarketingList from './TabChildMarketingList';

const TabChild = () => {
  // const [add, setAdd] = useState([]);

  // const handleAddChild = () => {
  //   setAdd([...add, newValue]);
  // };
  return (
    <Box>
      <TabChildAdd />
      <TabChildChangeName />
      <TabChildMarketingList />
    </Box>
  );
};

export default TabChild;
