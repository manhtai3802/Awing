import { Add } from '@mui/icons-material';
import { Box, Grid, IconButton, Paper } from '@mui/material';
import { useState } from 'react';

const TabChildAdd = () => {
  const [css, setCss] = useState({
    height: '120px',
    width: '200px',
    cursor: 'pointer',
    border: '2px solid rgb(250, 250, 250)',
  });
  // const handleClick = () => {};
  // if (!handleAddChild) return;
  // handleAddChild();

  const data = [1, 2];

  const handleRowClick = () => {
    setCss({
      height: '120px',
      width: '200px',
      cursor: 'pointer',
      border: '2px solid rgb(33, 150, 243)',
    });
  };
  return (
    <Box style={{ display: 'flex' }}>
      <IconButton>
        <Add />
      </IconButton>

      <Box>
        <Grid container>
          {data.map((val, index) => (
            <Grid item key={index} style={{ padding: '8px' }} overflow="auto">
              <Paper onClick={handleRowClick} variant="elevation" elevation={2} style={css}>
                <Box style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>Chiến dịch con {index} </Box>

                <Box style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>{index} </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TabChildAdd;
