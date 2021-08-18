import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";

import { Input, Paper, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PublishIcon from "@material-ui/icons/Publish";
import useStyles from "./styles";

const BalancesChart = ({ balances, setStateFromDb }) => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [editedRef, setEditedRef] = useState("");
  const [user] = useAuthState(auth);

  const handleIconClick = (id) => {
    let inputRef = document.getElementById(`${id}`);
    let previousBalanceRef =  document.getElementById(`${id}`).nextSibling;
    let icon = document.getElementById(`${id}`).previousSibling;
    console.log(icon)
    // CLOSES PREVIOUSLY OPENED EDITS
    if (editedRef && inputRef !== editedRef) {
      editedRef.style.display = "none";
      previousBalanceRef.style.textDecoration = 'none'
    }
    // TOGGLES DISPLAY ON IF DISPLAY IS OFF
    if (inputRef.style.display === "none" || inputRef.style.display === "") {
      console.log('display is on')
      inputRef.style.display = "flex";
      previousBalanceRef.style.textDecoration = 'line-through'
      icon.style.transform = 'rotate(90deg)'
    } else {
      // TOGGLES DISPLAY OFF IS DISPLAY IS ON
      console.log(inputRef.style.display)
      console.log('display is off')
      inputRef.style.display = "none";
      previousBalanceRef.style.textDecoration = 'none'
      icon.style.transform = 'rotate(-90deg)'
    }
    setInput("");
    setEditedRef(inputRef);
    // icon=''
    // inputRef=''
    // previousBalanceRef=''
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitUpdatedBalance = (balance) => {
    // PUSH NEW BALANCE(input) TO FIREBASE
    if (user) {
      let uid = user.uid;
      let balancesRef = db
        .collection("users")
        .doc(uid)
        .collection("daily-balances");
      balancesRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().balance === balance) {
            let temp = doc.data();
            balancesRef.doc(doc.id).set({
              ...temp,
              balance: input,
            });
          }
        });
      });
    }
    setInput("");
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" gutterBottom className={classes.header}>
          Recent Balances
        </Typography>
        {balances.map((dat) => (
          <div className={classes.row} key={dat.id}>
            <div className={classes.leftSide}>
              <ChevronRightIcon
                color="secondary"
                fontSize="small"
                className={classes.icon}
                onClick={() => handleIconClick(dat.id)}
              />
              <div id={dat.id} className={classes.editContainer}>
                <Input
                  type="text"
                  value={input}
                  className={classes.editInput}
                  inputProps={{ inputMode: "decimal" }}
                  onChange={handleChange}
                />
                <PublishIcon
                  className={classes.publishIcon}
                  fontSize="small"
                  onClick={() => submitUpdatedBalance(dat.balance)}
                />
              </div>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.unitsText}
              >
                {`$${dat.balance}`}
              </Typography>
            </div>
            <div className={classes.rightSide}>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.unitsText}
              >
                {dat.timestamp}
              </Typography>
            </div>
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default BalancesChart;