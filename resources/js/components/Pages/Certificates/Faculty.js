import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

import office from "../../../../images/office1.jpg";
import office2 from "../../../../images/Genconians/bagga.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "15px",
    marginBottom: "20px",
    textAlign: "center",
    borderRadius: "16px",
    boxShadow: "0px 15px 30px #8a959e33",
    ['@media (min-width:1600px)']: {
      paddingTop: "20px"
  },
  },
  media:{
    textAlign: "center"
  },
  icon:{
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
      borderRadius: "5px",
      boxShadow: "0px 5px 15px #193b6833",
      marginRight: "10px",
      height: "30px",
      width: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  Icon:{
    fontSize: "18px",
  },
  imageBox:{
      marginLeft: "auto",
      marginRight: "auto",
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: "2px solid #1687d9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ['@media (min-width:1600px)']: {
        height: "140px",
        width: "140px"
    },
  },
  image:{
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      boxShadow: "0px 10px 20px #1687d933",
      ['@media (min-width:1600px)']: {
        height: "126px",
        width: "126px",
    },
  },
  heading:{
    fontSize: "18px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    paddingTop: "12px",
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
  },
  },
  subheading:{
      fontSize: "13px",
      fontFamily: "Open Sans",
      fontWeight: "600",
      paddingBottom: "20px",
      color: theme.palette.primary.text,
      ['@media (min-width:1600px)']: {
        fontSize: "16px",
    },
  },
  box:{
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
    marginTop: "20px",
    width: "80%",
    height: "34px",
    background: theme.palette.secondary.accent,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    ['@media (min-width:1600px)']: {
      height: "36px",
  },
},
box2:{
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "15px",
  width: "80%",
  height: "34px",
  background: theme.palette.secondary.accent,
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  ['@media (min-width:1600px)']: {
    height: "36px",
    marginBottom: "20px"
},
},
icon2:{
    fontSize: "16px",
    color: theme.palette.primary.dark,
    marginLeft: "10px",
    ['@media (min-width:1600px)']: {
      fontSize: "18px",
  },
},
subheading2:{
    fontSize: "14px",
    marginLeft: "30px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    ['@media (min-width:1600px)']: {
      fontSize: "16px",
  },
},
}));

export default function Office() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.media}>
        <div className={classes.imageBox}>
            <img src={office} className={classes.image}/>
        </div>
      </div>
      <h1 className={classes.heading}>
        Prof. G.S.Sodhi
      </h1>
      <h3 className={classes.subheading}>
        Training and Placement Officer
      </h3>
      <div className={classes.media}>
        <div className={classes.imageBox}>
            <img src={office2} className={classes.image}/>
        </div>
      </div>
      <h1 className={classes.heading}>
        Prof. Sachin Bagga
      </h1>
      <h3 className={classes.subheading}>
        Faculty Co-Coordinator
      </h3> 
    </Card>
  );
}