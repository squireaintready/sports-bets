import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    display:'grid',
    placeItems:'center',
    marginTop: '1rem'
  },
  paper:{
    display:'grid',
    placeItems:'center',
    padding: theme.spacing(2),
    background: "linear-gradient(to right, #292E49, #536976)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    paddingLeft: '3.5rem',
    paddingRight: '3.5rem',
    paddingTop: '2rem',
    paddingBottom: '3rem'
  },
  unitsRow:{
    display:'flex',
    justifyContent:'space-between',
    width:'13rem',
    borderBottom: '1px solid gray'
  },
  header:{
    color:'white'
  },
  unitsText:{
    color:'white',
  },
  uniqueRow:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'12rem',
    backgroundColor:"#4ca1af",
    borderRadius: '10px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '1rem',
    marginBottom:'0.5rem',
    "& .MuiFormControl-root":{
      width: '50%',
      marginBottom:'1.5rem',
    },
    "& h6":{
      color:'black'
    }
  }
}));
