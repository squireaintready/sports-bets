import React, { useState } from "react";
import BalanceEditor from "./BalanceEditor";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";

import { Paper, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useStyles from "./styles";

const BalancesChart = ({ balances, setStateFromDb }) => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [unitCount, setUnitCount] = useState("");
  const [editedRef, setEditedRef] = useState("");
  const [user] = useAuthState(auth);

  const handleIconClick = (id) => {
    let inputRef = document.getElementById(`${id}`);
    let iconRef = document.getElementById(`icon${id}`);
    if (editedRef && inputRef !== editedRef) {
      editedRef.style.display = "none";
    }
    // TOGGLES DISPLAY ON IF DISPLAY IS OFF
    if (inputRef.style.display === "none" || inputRef.style.display === "") {
      inputRef.style.display = "flex";
      iconRef.style.transform = 'rotate(90deg)'
      console.log('rotated/expanded')
    } else {
      inputRef.style.display = "none";
      setUnitCount(0);
      iconRef.style.transform = 'rotate(-90deg)'
      console.log('rotated back to normal')
    }
    setInput("");
    setEditedRef(inputRef);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitUpdatedBalance = (balance) => {
    // PUSH NEW BALANCE(input) TO FIREBASE
    if (parseInt(input) > 0 || unitCount > 0) {
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
              if(parseInt(input) > 0 && unitCount > 0){
                balancesRef.doc(doc.id).set({
                  ...temp,
                  balance: input,
                  units: unitCount,
                });
              }
              else if (parseInt(input) > 0) {
                balancesRef.doc(doc.id).set({
                  ...temp,
                  balance: input,
                });
              }
              else if (unitCount > 0) {
                balancesRef.doc(doc.id).set({
                  ...temp,
                  units: unitCount,
                });
              }
            }
          });
        });
      }
      setInput("");
      setUnitCount(0);
    }
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const handleUnitChange = (e) => {
    console.log(e.target.value);
    setUnitCount(e.target.value);
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" gutterBottom className={classes.header}>
          Recent Balances
        </Typography>
        {balances.map((balance) => (
          <div className={classes.row} key={balance.id}>
            <div className={classes.topRow}>
              <ChevronRightIcon
                color="secondary"
                fontSize="small"
                className={classes.icon}
                onClick={() => handleIconClick(balance.id)}
                id={`icon${balance.id}`}
              />
              <div className={classes.leftSide}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.unitsText}
                >
                  {`$${balance.balance}`}
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={classes.unitCount}
                >
                  {balance.units > 0 ? `${balance.units} units` : "- units"}
                </Typography>
              </div>
              <div className={classes.rightSide}>
                <Typography
                  variant="caption"
                  gutterBottom
                  className={classes.unitsText}
                >
                  {balance.timestamp}
                </Typography>
              </div>
            </div>
            <BalanceEditor
              balance={balance}
              input={input}
              handleChange={handleChange}
              unitCount={unitCount}
              handleUnitChange={handleUnitChange}
              submitUpdatedBalance={submitUpdatedBalance}
            />
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default BalancesChart;

{
  /* <div id={balance.id} className={classes.bottomRow}>
              <div className={classes.editContainer}>
                <TextField
                  type="number"
                  value={input}
                  className={classes.editInput}
                  inputProps={{ inputMode: "decimal" }}
                  onChange={handleChange}
                  label="New Balance"
                  color="secondary"
                />
              </div>
              <div className={classes.editUnitCount}>
                <TextField
                  type="number"
                  className={classes.unitCountInput}
                  color="secondary"
                  inputProps={{ inputMode: "decimal" }}
                  value={unitCount}
                  onChange={handleUnitChange}
                  label="New Units"
                />
              </div>
                <PublishIcon
                  className={classes.publishIcon}
                  fontSize="small"
                  onClick={() => submitUpdatedBalance(balance.balance)}
                />
            </div> */
}
