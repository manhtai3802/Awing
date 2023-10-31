import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface Header {}

interface Header {
  disabled: boolean;
}

const Header = (props: Header) => {
  const { disabled } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit" type="submit" disabled={disabled}>
            Submit
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
