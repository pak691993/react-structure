import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  globalLoading: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 99,
    background: 'rgba(0,0,0,0.3)',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 100,
  },
}));

export default useStyles;