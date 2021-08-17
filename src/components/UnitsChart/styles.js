import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    display:'grid',
    placeItems:'center',
    marginTop: '1rem'
  },
  unitsRow:{
    display:'flex',
    justifyContent:'space-evenly',
    width:'15rem',
    borderBottom: '1px solid gray'
  },
  header:{
    // color: theme.palette.text.primary,
    color:'white'
  },
  unitsText:{
    // padding:'.5rem'
    color:'white',
  },
  paper:{
    display:'grid',
    placeItems:'center',
    padding: theme.spacing(2),
    // color: theme.palette.text.secondary,
    background: "#536976",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #292E49, #536976)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #292E49, #536976)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color:'white'
  },
  uniqueRow:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly',
    width:'15rem',
    borderBottom: '1px solid gray',
    backgroundColor:"#4ca1af",
    borderRadius: '10px',
    "& .MuiFormControl-root":{
      color:'white',
      width: '35%',
      marginBottom:'1rem',
    },
    "& h6":{
      height: "100%",
      marginBottom:'1rem',
      marginTop:'1rem',
      color:'black'
    }
  }
}));
