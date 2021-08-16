import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { auth, db } from "../../firebase";
import firebase from "firebase";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";

const Input = () => {
  const classes = useStyles();
  const [user] = useAuthState(auth);

  const [input, setInput] = useState("");
  const handleChange = (e) => {
    if (e.target.value < 0) {
      alert("Balance cannot be less than 0. Please try again.");
      setInput(0);
    } else {
      setInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      let uid = user.uid;
      let balancesRef = db
        .collection("users")
        .doc(uid)
        .collection("daily-balances");
      console.log(balancesRef)
      balancesRef.get().then((doc) => {
          balancesRef.add({
            balance: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            id: uuidv4()
          });
      });
    }
    setInput("");
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          type="Number"
          value={input}
          onChange={handleChange}
          variant="outlined"
          label="Today's Balance"
          className={classes.textField}
        />
        <Button
          type="submit"
          variant="contained"
          // color="primary"
          onClick={() => handleSubmit}
          className={classes.button}
        >
          <Typography
            variant="body2"
            gutterBottom
            className={classes.unitsText}
          >
            ADD
          </Typography>
        </Button>
      </form>
    </div>
  );
};

export default Input;
