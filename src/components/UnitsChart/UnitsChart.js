import React, { useState } from "react";

// import { useDispatch } from "react-redux";
// import {
//   setNewBalance,
//   selectBalance,
//   selectDate,
// } from "../../features/userSlice";

import useStyles from "./styles";
import { Paper, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const UnitsChart = ({ mostRecentBalance }) => {
  const classes = useStyles();
  const [uniqueUnit, setUniqueUnit] = useState('');
  const [uniqueValue, setUniqueValue] = useState('0.00')

  const calculateUnits = (unitsCount) => {
    let oneUnit = parseInt(mostRecentBalance?.balance) / 100;
    let unitsCounted = (oneUnit * unitsCount);
    if(unitsCounted % 1 !== 0){
      unitsCounted = unitsCounted.toFixed(2)
    }
    return (
      <div className={classes.unitsRow}>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.unitsLeft}
        >
          {`${unitsCount} units`}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.unitsRight}
        >
          {
            mostRecentBalance ? (
              `$ ${unitsCounted}`
            ):(
              "$ -"
            )
          }
          
        </Typography>
      </div>
    );
  };

  const handleUniqueUnit = (e) => {
    setUniqueUnit(e.target.value);
    let oneUnit = parseInt(mostRecentBalance?.balance) / 100;
    let unitsCounted = (oneUnit * e.target.value).toFixed(2);
    setUniqueValue(unitsCounted)
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" gutterBottom className={classes.header}>
          Units Converter
        </Typography>
        <div className={classes.uniqueRow}>
          <TextField type="number" value={uniqueUnit} onChange={handleUniqueUnit} inputProps={{ inputMode: 'decimal' }} label="Unit Count"/>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.unitsText}
          >
            {`$ ${uniqueValue}`}
          </Typography>
        </div>
        {calculateUnits(1)}
        {calculateUnits(5)}
        {calculateUnits(5.25)}
        {calculateUnits(5.5)}
        {calculateUnits(10)}
      </Paper>
    </div>
  );
};

export default UnitsChart;

// const dispatch = useDispatch();
// const [data, setData] = useState([
//   { balance: "1000", time: "08/12/2021" },
//   { balance: "1000", time: "08/12/2021" },
//   { balance: "1000", time: "08/12/2021" },
//   { balance: "1000", time: "08/12/2021" },
//   { balance: "1000", time: "08/12/2021" },
//   { balance: "1000", time: "08/12/2021" },
//   { balance: "1000", time: "08/12/2021" },
// ]);
