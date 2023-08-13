import DashboardCustomizeIcon from '@mui/icons-material/SupervisorAccount';
import ShoppinCartIcon from '@mui/icons-material/ShoppingCart';
import StarsIcon from '@mui/icons-material/Stars';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InventoryIcon from '@mui/icons-material/Inventory';

const baseUrl = import.meta.env.VITE_BASE_URL;
const menuItems = [
  {
    title: 'Dashboard',
    icon: <DashboardCustomizeIcon />,
    link: '/stock',
  },
  {
    title: 'Purchase',
    icon: <ShoppinCartIcon />,
    link: '/stock/purchases/',
  },
  {
    title: 'Sales',
    icon: <AttachMoneyIcon />,
    link: '/stock/sales/',
  },
  {
    title: 'Firms',
    icon: <StoreIcon />,
    link: '/stock/firms/',
  },
  {
    title: 'Brands',
    icon: <StarsIcon />,
    link: '/stock/brands/',
  },
  {
    title: 'Products',
    icon: <InventoryIcon />,
    link: '/stock/products/',
  },
  {
    title: 'Admin Panel',
    icon: <SupervisorAccountIcon />,
    link: `${baseUrl}/admin/`,
  },
];
export default menuItems;
