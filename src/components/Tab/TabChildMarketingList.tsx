import { Delete } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { FieldArray, useFormikContext } from 'formik';
import * as React from 'react';
import uniqid from 'uniqid';
import TextField from '../TextField/TextField';

interface Data {
  id: string;
  quantity: number;
  name: string;
}

const rows = [{ id: '1', name: '', quantity: 0 }];

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Tên quảng cáo *',
  },
  {
    id: 'quantity',
    numeric: false,
    disablePadding: true,
    label: 'Số lượng *',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  onClickAddRow: () => void;
  onClickDeleteAll: () => void;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, onClickAddRow, onClickDeleteAll } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          DANH SÁCH QUẢNG CÁO
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={onClickDeleteAll}>
            <Delete />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <Button onClick={onClickAddRow}>Thêm</Button>
        </Tooltip>
      )}
    </Toolbar>
  );
}

interface PropsTYpeTabChildMarketingList {
  indexBox: number;
}

export default function TabChildMarketingList(props: PropsTYpeTabChildMarketingList) {
  const { values: formikValues } = useFormikContext();
  const { indexBox } = props;
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const listGridData = formikValues.subCampaigns[indexBox].ads;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = listGridData.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleAddRow = (helper: any) => () => {
    const id = uniqid();
    const indexGrid = listGridData.length + 1;

    helper.push({ id: id, name: `Quảng cáo ${indexGrid}`, quantity: 0 });
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const handleDeleteRow = (helper: any, id: string) => {
    helper.remove(id);
  };

  const handleDeleteAll = () => {
    listGridData.length = 0;
    setSelected([]);
  };

  return (
    <FieldArray
      name={`subCampaigns[${indexBox}].ads`}
      render={(arrayHelpers) => (
        <Box sx={{ width: '100%' }} key={indexBox}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar
              numSelected={selected.length}
              onClickAddRow={handleAddRow(arrayHelpers)}
              onClickDeleteAll={handleDeleteAll}
            />
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  numSelected={selected.length}
                  onSelectAllClick={handleSelectAllClick}
                  rowCount={listGridData.length}
                />
                <TableBody>
                  {listGridData.map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          <TextField name={`subCampaigns[${indexBox}].ads[${index}].name`} />
                        </TableCell>
                        <TableCell align="center">
                          <TextField name={`subCampaigns[${indexBox}].ads[${index}].quantity`} type="number" />
                        </TableCell>
                        <TableCell align="center">
                          <IconButton onClick={() => handleDeleteRow(arrayHelpers, row.id)}>
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      )}
    />
  );
}
