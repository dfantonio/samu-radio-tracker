import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: { ...theme.mixins.toolbar, paddingTop: '5px', paddingLeft: '20px' },
  drawerPaper: {
    width: drawerWidth,
  },
}));
