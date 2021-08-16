import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    display:'grid',
    placeItems:'center',
    margin: '1rem'
  },
  balancesChart:{
    // display:'flex',
    display:'flex',
    justifyContent:'space-evenly',
    width: '15rem',
    borderBottom: '1px solid gray'
  },
  header:{
    // marginBottom:'0',
    // textDecoration:'underline',
    // color: theme.palette.text.primary,
    color:'white'
  },
  unitsText:{
    // // padding:'0.5rem'
    // color: theme.palette.text.secondary,
    color:'white'
  },
  paper:{
    display:'grid',
    placeItems:'center',
    padding: theme.spacing(2),
    background: "#536976",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #292E49, #536976)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #292E49, #536976)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
}));
