import React from 'react'

import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText ,Button, Drawer, AppBar, IconButton, Toolbar, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { CartDrawer } from './CartDrawer';

const drawerWidth = 240;
const navItems = [
    {
        name: 'Home', path: '/'
    },
    {
        name: 'Category', path: '/category'
    },
    {
        name: 'About', path: '/about'
    }
];

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}
const APP_NAME = "STORE"
export function Navbar (props: Props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            {APP_NAME}
        </Typography>
        <Divider />
        <List>
            {navItems.map((item) => (
              <RouterLink style={{textDecoration: 'none'}} to={item.path} key={item.name}>
                <ListItem disablePadding>
                      <ListItemButton>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                      </ListItemButton>
                </ListItem>
              </RouterLink>
            ))}
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <span className="material-symbols-outlined">menu</span>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: {xs: 1, md: 0}, textAlign: { xs: 'center', md: 'left' } }}
            >
              {APP_NAME}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', flex: 1 }}>
              {navItems.map((item) => (
                <Button href={item.path} key={item.name} sx={{ color: '#fff' }}>
                    {item.name}
                </Button>
              ))}
            </Box>
            <CartDrawer />
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        
      </Box>
    )
}