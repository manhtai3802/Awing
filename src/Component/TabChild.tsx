import { Box } from '@mui/material';
import TabChildAdd from './TabChildAdd';
import TabChildChangeName from './TabChildChangeName';
import EnhancedTable from './TavChildTest';

const TabChild = () => {
  // const [add, setAdd] = useState([]);

  // const handleAddChild = () => {
  //   setAdd([...add, newValue]);
  // };
  return (
    <Box>
      <TabChildAdd />
      <TabChildChangeName />
      <EnhancedTable />
    </Box>
  );
};

export default TabChild;
