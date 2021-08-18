import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container:{
    background: "linear-gradient(to right, #2c3e50, #4ca1af)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: '100vh',
    overflowX: 'hidden',
  },
  grid:{
    margin: '0',
  },
  login:{
    display:'grid',
    placeItems:'center',
    marginTop:'4rem',
    color:'white',
    border: '2px solid darkgray',
    width:'20%',
    marginLeft:'auto',
    marginRight:'auto',
  },
}));

