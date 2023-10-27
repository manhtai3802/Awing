import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'information',
    headerName: 'Tên quảng cáo*',
    editable: true,
    flex: 1,
  },
  {
    field: 'count',
    headerName: 'Số lượng',
    flex: 1,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Thao tác',
    sortable: false,
    renderCell: () => {
      const onClick = () => {};
      return (
        <IconButton onClick={onClick}>
          <Delete />
        </IconButton>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];

const TabChildMarketingList = () => {
  return (
    <Box>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography margin="20px">DANH SÁCH QUẢNG CÁO</Typography>
        <Button>Thêm</Button>
      </Box>
      <Box sx={{ height: 400, width: '100%' }} margin="10px">
        <DataGrid rows={rows} columns={columns} checkboxSelection editMode="row" />
      </Box>
    </Box>
  );
};

export default TabChildMarketingList;
