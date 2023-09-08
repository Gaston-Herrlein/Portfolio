import { ContactMail, Home, Person, Work } from "@mui/icons-material"
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { Box } from "@mui/system"


const NavListDrawer = () => {
    return (
        <Box sx={{width: 250, bgcolor: "lightsalmon"}}>
            <nav>
                <List>
                    <ListItem component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem component="a" href="#About">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="About"/>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem component="a" href="#work">
                        <ListItemIcon>
                            <Work />
                        </ListItemIcon>
                        <ListItemText primary="Work"/>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem component="a" href="#contact">
                        <ListItemIcon>
                            <ContactMail />
                        </ListItemIcon>
                        <ListItemText primary="Contact"/>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

export default NavListDrawer 