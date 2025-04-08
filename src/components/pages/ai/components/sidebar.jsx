import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Grow }from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import { useState } from 'react';
import { NavLink } from 'react-router';


const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
       <Drawer 
        variant="permanent"
        sx={{
          width: extended ? 250 : 80,
          height: "500px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            backgroundColor: "#0A0E1F",
            width: extended ? 250 : 80,
            transition: "width 0.15s ease, padding 0.3s ease",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px",
            overflow: "hidden",
            zIndex: '3000'
         },
       }}
       >
        <List>
            <ListItem button= 'true' onClick = {() => setExtended(!extended)}>
                <ListItemIcon>
                    <MenuIcon sx= {{color: "#B9C1D5"}} />
                </ListItemIcon>
            </ListItem>
            <ListItem component={NavLink} to = "">  
              <ListItemIcon>
                <AddIcon sx= {{color: "#B9C1D5"}}/>
              </ListItemIcon> 
              <Grow
                in={extended}
                style={{ transformOrigin: '0 0 0', color: "#B9C1D5" }}
                {...(extended ? { timeout: 1000 } : {})}
              >
                <ListItemText primary = 'new Chat'/>
            </Grow> 
            </ListItem>
        </List>

        <Divider />
            <List>
              <ListItem component={NavLink} to = "help">
                <ListItemIcon>
                  <HelpOutlineIcon sx= {{color: "#B9C1D5"}} />
                </ListItemIcon>
                <Grow
                  in={extended}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(extended ? { timeout: 1000 } : {})}
                >
                  <ListItemText primary = 'Help' sx= {{color: "#B9C1D5"}}/>
              </Grow>
              </ListItem>

              <ListItem component={NavLink} to = "history">
                <ListItemIcon>
                  <HistoryIcon sx= {{color: "#B9C1D5"}}/>
                </ListItemIcon>
                <Grow
                  in={extended}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(extended ? { timeout: 1000 } : {})}
                >
                  <ListItemText primary = 'History' sx= {{color: "#B9C1D5"}}/>
              </Grow>
              </ListItem>

              <ListItem component={NavLink} to= "settings">
                <ListItemIcon>
                  <SettingsIcon sx= {{color: "#B9C1D5"}}/>
              </ListItemIcon>
              <Grow
                  in={extended}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(extended ? { timeout: 1000 } : {})}
                >
                  <ListItemText primary = 'Settings' sx= {{color: "#B9C1D5"}}/>
              </Grow>
              </ListItem>

            </List>
       </Drawer>
    )

    
}

export default Sidebar;


