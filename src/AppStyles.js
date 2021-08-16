import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container:{
    // backgroundColor: "#7ee8fa",
    // backgroundImage: "linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)",
    background: "#2c3e50", /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #2c3e50, #4ca1af)", /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #2c3e50, #4ca1af)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'scroll',
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

