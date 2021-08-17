import React, {useState, useEffect} from "react";

import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Auth from "./components/Auth/Auth";
import BalancesChart from "./components/BalancesChart/BalancesChart.js";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.js";
import Input from "./components/Input/Input";
import UnitsChart from "./components/UnitsChart/UnitsChart.js";

import Grid from "@material-ui/core/Grid";
import useStyles from "./AppStyles";

function App() {
  const classes = useStyles();
  const [user] = useAuthState(auth);
  const [balances, setBalances] = useState([])

  useEffect(() => {
    if (user) {
      let uid = user.uid;
      let balancesRef = db
        .collection("users")
        .doc(uid)
        .collection("daily-balances")
        .orderBy("timestamp", "desc");
      balancesRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          let convertedDate = new Date(
            doc.data().timestamp?.seconds * 1000
          ).toLocaleDateString("en-US");
          setBalances((prevState) => [
            ...prevState,
            { timestamp: convertedDate, balance: doc.data().balance, id: doc.data().id },
          ]);
        });
      });
    }else{
      setBalances([])
    }
  }, [user]);

  return (
    <div className={classes.container}>
      <Header />
      {user ? (
        <>
        <Input />
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.grid}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <UnitsChart mostRecentBalance={balances[0]}/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <BalancesChart balances={balances}/>
          </Grid>
        </Grid>
        </>
      ):(
        <div className={classes.login}>
          <Auth className={classes.loginBtn}/>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default App;