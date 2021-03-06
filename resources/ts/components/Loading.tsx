import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loading: {
      textAlign: 'center',
      marginTop: '100px'
  }
});

export default function CircularUnderLoad() {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
        <CircularProgress disableShrink />
    </div>
  );
}