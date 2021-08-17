import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const BalancesChart = ({balances}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h6" gutterBottom className={classes.header}>
          Recent Balances
        </Typography>
        {balances.map((dat) => (
          <div className={classes.row} key={dat.id}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.unitsText}
            >
              {`$${dat.balance}`}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.unitsText}
            >
              {dat.timestamp}
            </Typography>
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default BalancesChart;

// <Grid container className={classes.dailyChart} spacing={2}>
//   <Grid item xs={6} lg={6}>
//     <p>{`$${dat.balance}`}</p>
//   </Grid>
//   <Grid item xs={6} lg={6}>
//     <p>{dat.time}</p>
//   </Grid>
// </Grid>

// useEffect(() => {
//   // let balancesRef = db.collection('daily-balances')
//   // balancesRef.get().then(doc => console.log(doc))
//   db.collection("daily-balances")
//     .orderBy("timestamp", "desc")
//     .onSnapshot((snapshot) =>
//       setData(
//         snapshot.docs.map((doc) => ({
//           balance: doc.data().balance,
//           time: new Date(doc.data().timestamp?.seconds * 1000).toLocaleDateString('en-US'),
//           // time: new Date(doc.data().timestamp?.seconds * 1000).toUTCString(),
//         }))
//       )
//     );
//   console.log(data);
// }, []);
