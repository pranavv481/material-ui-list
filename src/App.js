import './App.css';
import { Container, List, Box, Typography, Paper, ListItem, ListItemText, ListItemIcon, Divider, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import React,{useState} from 'react'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    width: "100vw",
    height: "100vh",
    paddingTop: theme.spacing(5)
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "20%",
    height: "100%"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  return (
    <Container className={classes.root}>
      <Paper boxShadow={5} component={Box} className={classes.sidebar} >
        <List disablePadding>
          <ListItem button>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography variant="h5" color="primary">
              Home
            </Typography>
            } secondary="Start Learining" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={(e)=>setOpen(!open)}>
            <ListItemIcon>
              <AddLocationIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred 1" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred 2" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred 3" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred 4" />
          </ListItem>
        </List>
      </Collapse>
        </List>
      </Paper>
    </Container>
  );
}

export default App;
