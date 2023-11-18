import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { GridToolbar } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useStockOperations from '../../hooks/useStockOperations';
import { getStaticProps } from '../../constants/stockTypes';
import EditIcon from '@mui/icons-material/Edit';

const PurchasesTable = ({ loading, purchases, setInfo, handleOpen }) => {
  const { deleteStockInfo } = useStockOperations();
  const { PURCHASES } = getStaticProps;
  const columns = [
    {
      field: 'createds',
      headerName: 'Date',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'firm',
      headerName: 'Firm',
      flex: 2,
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
    },

    {
      field: 'brand',
      headerName: 'Brand',
      flex: 1.5,
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'product',
      headerName: 'Product',
      flex: 1.5,
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      minWidth: 70,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      type: 'number',
    },
    {
      field: 'price',
      headerName: 'Price',
      minWidth: 70,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      type: 'number',
    },
    {
      field: 'price_total',
      headerName: 'Amount',
      minWidth: 90,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      type: 'number',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 70,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({
        id,
        row: { brand_id, product_id, quantity, price, firm_id },
      }) => [
        <GridActionsCellItem
          key={'edit'}
          icon={<EditIcon />}
          label='Edit'
          onClick={() => {
            handleOpen();
            setInfo({ id, firm_id, brand_id, product_id, quantity, price });
          }}
        />,
        <GridActionsCellItem
          key='delete'
          icon={<DeleteForeverIcon sx={{ color: 'red' }} />}
          label='Delete'
          onClick={() => deleteStockInfo(PURCHASES, id)}
        />,
      ],
    },
  ];

  const deviceWidth = window.outerWidth - 50; // For mobile view
  return (
    <>
      {loading ? (
        <CircularProgress
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            '@media (max-width: 600px)': {
              width: `${deviceWidth}px`,
              margin: '0 auto',
            },
          }}
        >
          <DataGrid
            autoHeight // If this is not set, the table will not show noRowsOverlay !
            sx={{ mt: 2 }}
            rows={purchases}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            slots={{
              toolbar: GridToolbar,
              // If no rows are found, display this overlay
              noRowsOverlay: () => (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  No purchases found.
                </Box>
              ),
            }}
            pageSizeOptions={[10, 20, 50]}
            disableRowSelectionOnClick
          />
        </Box>
      )}
    </>
  );
};

export default PurchasesTable;
