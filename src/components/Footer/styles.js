import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    position: "static",
    left: "0",
    bottom: "0",
    width: "100%",
  },
  paper: {
    background:
      "linear-gradient(to right, #292E49, #536976)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    padding:'2rem',
  },
  infoContainer: {
    display:'flex',
    justifyContent:'space-evenly',
    // justifyContent:'center',
    alignItems:'center',
  },
  info: {
    display:'flex',
    flexDirection:'column',
    width:'max-content',
    paddingTop:'0 !important',
    paddingBottom:'0 !important'
  },
  title:{
    color:'#666666',
    fontWeight:'900',
  },
  text:{
    color:'#fff'
  },
  socialContainer:{
    paddingTop:'0 !important',
    paddingBottom:'0 !important'
  },
  socialHeader:{
    fontStyle:'italic',
    fontSize:'large',
    fontWeight:'900',
    opacity:'.7'
  },
  socialMediaIcons:{},
  socialMediaIcon:{
    padding:'0.2rem',
    color:'white',
    "&:hover, &:focus": {
      fontSize:"large"
    },
  }
}));
