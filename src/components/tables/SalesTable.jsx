import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { GridToolbar } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useStockOperations from '../../hooks/useStockOperations';
import { getStaticProps } from '../../constants/stockTypes';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';

const SalesTable = ({ loading, setInfo, handleOpen }) => {
  const { deleteStockInfo } = useStockOperations();
  const { sales } = useSelector((state) => state.stock);
  const { SALES } = getStaticProps;
  const columns = [
    {
      field: 'createds',
      headerName: 'Date',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },

    {
      field: 'brand',
      headerName: 'Brand',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'product',
      headerName: 'Product',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
    {
      field: 'price',
      headerName: 'Price',
      minWidth: 80,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
    {
      field: 'price_total',
      headerName: 'Amount',
      minWidth: 80,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
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
        row: { brand_id, product_id, quantity, price  },
      }) => [
        <GridActionsCellItem
          key={'edit'}
          icon={<EditIcon />}
          label='Edit'
          onClick={() => {
            handleOpen();
            setInfo({ id, brand_id, product_id, quantity, price });
          }}
        />,
        <GridActionsCellItem
          key='delete'
          icon={<DeleteForeverIcon sx={{ color: 'red' }} />}
          label='Delete'
          onClick={() => deleteStockInfo(SALES, id)}
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
            rows={sales}
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
                  No sales found.
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

export default SalesTable;
