import React from "react";
//import {Tooltip} from "react-tooltip";
import Tooltip from "@material-ui/core/Tooltip";
import {  makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    tooltip: {
      backgroundColor: '#F3F4F6', // customize the background color
      color: 'Black', // customize the text color
      borderRadius: '4px',
      fontSize:'15px',
      width:'auto',
    
       // customize the border radius
      // add any other CSS properties you want to customize
    },
  });
  const useStyless = makeStyles({
    tooltip: {
      backgroundColor: '#FAF7F2', // customize the background color
      color: 'Black', // customize the text color
      borderRadius: '4px',
      fontSize:'15px',
      width:'auto',
    
       // customize the border radius
      // add any other CSS properties you want to customize
    },
  });

export const ExampleTool = ({ tooltip,orignal }) => {
    const classes = useStyles();
  return (
    <div>
      <Tooltip title={tooltip} placement="top"  classes={{ tooltip: classes.tooltip }}>
        <span>{orignal}...</span>
      </Tooltip>
    </div>
    
  );
};

export const ChatTooltip = ({ tooltip,orignal }) => {
    const classes = useStyless();
  return (
    <div>
      <Tooltip title={tooltip} placement="top"  classes={{ tooltip: classes.tooltip }}>
        <span>{orignal}</span>
      </Tooltip>
    </div>
    
  );
};