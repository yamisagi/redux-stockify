import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { GridToolbar } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useStockOperations from '../../hooks/useStockOperations';
import { getStaticProps } from '../../constants/stockTypes';

const ProductTable = ({ loading, products }) => {
  const { deleteStockInfo } = useStockOperations();
  const { PRODUCTS } = getStaticProps;
  const columns = [
    {
      field: 'id',
      headerName: '#',
      headerAlign: 'center',
      flex: 0.5,
      align: 'center',
    },
    {
      field: 'category',
      headerName: 'Category',
      headerAlign: 'center',
      align: 'center',
      flex: 2,
    },
    {
      field: 'brand',
      headerName: 'Brand',
      type: 'number',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      sortable: true,
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'number',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      type: 'actions',
      align: 'center',
      flex: 1,
      sortable: false,
      getActions: (params) => [
        <GridActionsCellItem
          key={params.row.id}
          icon={<DeleteForeverIcon sx={{ color: 'red' }} />}
          label='Delete'
          showInMenu={window.outerWidth < 600}
          onClick={() => deleteStockInfo(PRODUCTS, params.row.id)}
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
            rows={products}
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
                  No products found.
                </Box>
              ),
            }}
            pageSizeOptions={[10, 20, 50]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      )}
    </>
  );
};

export default ProductTable;
