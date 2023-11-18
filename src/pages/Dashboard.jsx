import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuthOperations from '../hooks/useAuthOperations';
import { useSelector } from 'react-redux';
import MenuListItem from '../components/MenuListItem';
import { Outlet } from 'react-router-dom';
// Log Out Icon MUI
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 200;

const Dashboard = (props) => {
  const { logout } = useAuthOperations();
  const { currentUser } = useSelector((state) => state.auth);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <MenuListItem mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // CssBaseline: Resets the browser's default styles
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          display: 'flex',
          backgroundColor: 'primary.appBar',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              textAlign: 'center',
              color: 'primary.text',
              flexGrow: 1,
            }}
          >
            Redux Stockify
          </Typography>
          {currentUser && (
            <Button
              variant='text'
              sx={{
                borderRadius: '15px',
                ml: 'auto',
                color: 'primary.text',
              }}
              onClick={() => {
                logout();
              }}
            >
              <ExitToAppIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='stock areas'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'primary.drawer',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'primary.drawer',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
