import React from 'react';
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = ({ isLoading = true }) => {
  const classes = useStyles();
  return (
    <div>
      {isLoading && (
        <div className={classes.globalLoading}>
          <div className={classes.icon}>
            <CircularProgress />
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
