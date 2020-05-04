import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import MUIDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useHistory } from 'react-router-dom';
import { paths } from '../../routes';

function ResponsiveDrawer({ drawerOpen, handleDrawerToggle }) {
  const classes = useStyles();
  const history = useHistory();

  const links = [
    { name: 'Empréstimos', icon: <AssignmentIcon />, route: paths.HOME },
    { name: 'Cadastro de objetos', icon: <PostAddIcon />, route: paths.CADASTRO },
    { name: 'Cadastro de usuário', icon: <PersonAddIcon />, route: paths.NOVO_USUARIO },
  ];

  const drawer = (
    <>
      <div className={classes.toolbar}>
        <Typography variant="h6">SAMU</Typography>
        <Typography variant="caption">v{process.env.REACT_APP_VERSION}</Typography>
      </div>
      <Divider />
      <List>
        {links.map(({ name, icon, route }) => (
          <ListItem key={name} button onClick={() => history.push(route)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <div className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp>
        <MUIDrawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </MUIDrawer>
      </Hidden>
      <Hidden xsDown>
        <MUIDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </MUIDrawer>
      </Hidden>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool,
};

ResponsiveDrawer.defaultProps = {
  drawerOpen: false,
};

export default ResponsiveDrawer;
