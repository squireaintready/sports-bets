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
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '2rem',
    paddingBottom: '3rem'
  },
  unitsRow:{
    display:'flex',
    justifyContent:'space-between',
    width:'18rem',
    borderBottom: '1px solid gray',
    color:'white',
  },
  header:{
    color:'white'
  },
  unitsLeft:{
    marginLeft:'2rem'
  },
  unitsRight:{
    marginRight:'2rem'
  },
  uniqueRow:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'14rem',
    backgroundColor:"#4ca1af",
    borderRadius: '10px',
    border:'2px solid gray',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5rem',
    "& .MuiFormControl-root":{
      width: '50%',
      marginBottom:'1.5rem',
    },
    "& h6":{
      color:'black',
      // marginRight:'1rem'
    }
  }
}));
