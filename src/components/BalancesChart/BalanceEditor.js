import { TextField } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import useStyles from "./styles";

const BalanceEditor = ({ balance, input, handleChange, unitCount, handleUnitChange, submitUpdatedBalance }) => {
  const classes = useStyles();

  return (
    <div id={balance.id} className={classes.bottomRow}>
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
          value={unitCount > 0 ? unitCount : ''}
          onChange={handleUnitChange}
          label="New Units"
        />
      </div>
      <PublishIcon
        className={classes.publishIcon}
        fontSize="small"
        onClick={() => submitUpdatedBalance(balance.balance)}
      />
    </div>
  );
};

export default BalanceEditor;
