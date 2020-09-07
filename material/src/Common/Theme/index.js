import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  //OverRides palette Material UI
  palette: {},

  overrides: {
    MuiButton: {
      root: {
        //OverRides Button Material UI
      },
    },
  }
});

export default theme
