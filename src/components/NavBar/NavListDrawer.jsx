import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Box } from "@mui/system"


// eslint-disable-next-line react/prop-types
const NavListDrawer = ({ navLinks }) => {
    return (
        <Box sx={{width: 200}}>
            <nav>
                <List>
                    {
                        // eslint-disable-next-line react/prop-types
                        navLinks.map(item => (
                            <>
                                <ListItem disablePadding key={item.title}>
                                    <ListItemButton component="a" href={item.path}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.title}/>
                                    </ListItemButton> 
                                </ListItem>
                                <Divider />        
                            </>
                        ))
                    }
                </List>
            </nav>
        </Box>
    )
}

export default NavListDrawer 