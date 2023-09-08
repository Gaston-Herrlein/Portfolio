import { ContactMail, Home, Menu, Person, Work } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import NavListDrawer from './NavListDrawer';

const navLinks =[
  {
    title: "HOME", path: "#home", icon: <Home />
  },
  {
    title: "ABOUT", path: "#about", icon: <Person />
  },
  {
    title: "WORK", path: "#work", icon: <Work />
  },
  {
    title: "CONTACT", path: "#contact", icon: <ContactMail />
  }
]

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton color="inherit" size="large" onClick={() => setOpen(true)} sx={{display: {xs: "flex", sm:"none"}}}>
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>News</Typography>
          <Box sx={{display: {xs: "none", sm:"block"}}}>
            {
            navLinks.map(item => (
              <Button key={item.title} color="inherit" component="a" href={item.path}>{item.title}</Button>))
            }
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{display: {xs: "flex", sm:"none"}}}>
        <NavListDrawer navLinks={navLinks}/>
      </Drawer>
    </>
  );
}

export default NavBar;