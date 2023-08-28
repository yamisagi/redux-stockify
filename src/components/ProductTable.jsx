import React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridActionsCell,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProductTable = ({ loading, products }) => {
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
      sortable: false,
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
            sx={{ mt: 2 }}
            rows={products}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      )}
    </>
  );
};

export default ProductTable;
