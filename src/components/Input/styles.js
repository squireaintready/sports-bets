import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container:{
    display:'grid',
    placeItems:'center',
    marginTop: '2rem'
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
      margin: theme.spacing(1),
      width: theme.spacing(36),
      height: theme.spacing(16),
  },
  form:{
    display:"flex",
    justifyContent:'center',
    alignItems:'center'
  },
  textField:{
    "& input":{
      color:'#ffffff',
      borderRadius: '6px',
      background: "linear-gradient(to right, #606c88, #3f4c6b)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    },
  },
  button:{
    marginLeft:'.5rem',
    background: "linear-gradient(to right, #3f2b96, #a8c0ff)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color:'white'
  }
}));
