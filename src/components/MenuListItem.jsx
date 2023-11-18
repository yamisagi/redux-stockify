import React,{useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import menuItems from '../constants/menuItems';
import { useNavigate } from 'react-router-dom';

const MenuListItem = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);
  const { window } = globalThis || {};
  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          sx={{
            cursor: 'pointer',
            color: 'white',
            backgroundColor: item.title === activeItem ? 'primary.active' : 'transparent',
            '&:hover': { color: 'primary.drawerItemHover' },
            '&:hover .MuiSvgIcon-root': {
              color: 'primary.drawerItemHover',
            },
          }}
          onClick={() => {
            setActiveItem(item.title);
            if (item.title === 'Admin Panel') {
              window.open(item.link, '_blank');
              return;
            }
            navigate(item.link);
            if (mobileOpen) {
              setMobileOpen(false);
            }
          }}
        >
          <ListItemButton>
            <ListItemIcon
              sx={{
                color: 'white',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItem;
