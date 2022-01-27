import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { MenuIcon, PlusSmIcon, HomeIcon, AnnotationIcon, LogoutIcon, UserAddIcon } from '@heroicons/react/outline';
import { Link, useNavigate, Outlet } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const drawerWidth = 240;

function DashboardDrawer(props) {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut();
        navigate('/');

    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="bg-gray-900 h-screen text-yellow-400">
            <Toolbar />
            <List>
                <Link to='/'>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to='/dashboard/newblog'>
                    <ListItem button>
                        <ListItemIcon>
                            <PlusSmIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                        </ListItemIcon>
                        <ListItemText primary="New blog" />
                    </ListItem>
                </Link>
                <Link to='/dashboard/myblogs'>
                    <ListItem button>
                        <ListItemIcon>
                            <AnnotationIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                        </ListItemIcon>
                        <ListItemText primary="My Blogs" />
                    </ListItem>
                </Link>
                {
                    admin &&
                    <div>
                        <Link to='/dashboard/allblogs'>
                            <ListItem button>
                                <ListItemIcon>
                                    <AnnotationIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                                </ListItemIcon>
                                <ListItemText primary="All Blogs" />
                            </ListItem>
                        </Link>
                        <Link to={`/dashboard/make-admin`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <UserAddIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                                </ListItemIcon>
                                <ListItemText primary="Make Admin" />
                            </ListItem>
                        </Link>
                    </div>
                }
                <ListItem button onClick={handleLogOut}>
                    <ListItemIcon>
                        <LogoutIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                    </ListItemIcon>
                    <ListItemText primary="Sign Out" />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="bg-white">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </IconButton>
                    <Typography className="text-gray-600" variant="h5" noWrap component="div">
                        <p className="font-bold">Hello, {user?.displayName}</p>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

DashboardDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardDrawer;
