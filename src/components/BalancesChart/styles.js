import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    display:'grid',
    placeItems:'center',
    marginTop: '2rem',
    // marginBottom: '4rem',
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
  row:{
    display:'flex',
    flexDirection:'column',
    borderBottom: '1px solid gray',
    width: '18rem',
  },
  topRow:{
    display:'flex',
    justifyContent:'space-between',
  },
  bottomRow:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    // marginLeft:'3.6rem',
    // marginRight:'3.6rem',
    paddingLeft:'1rem',
    paddingRight:'1rem',
    display:'none', 
  },
  header:{
    color:'white'
  },
  unitsText:{
    color:'white'
  },
  leftSide:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    // marginLeft:'1rem',
    width:'50%'
    // justifyContent:'flex-start'
  },
  rightSide:{
    // marginRight:'1rem',
    // display:'flex',
  },
  unitCount:{
    marginLeft:'.5rem',
    marginRight:'.5rem',
    color:'white'
  },
  unitCountInput:{
    // marginLeft:'.5rem',
    // marginRight:'.5rem',
    width:'6rem',
    color:'red',
    marginBottom:'.2rem',
  },
  icon:{
    "&:hover, &:focus": {
      cursor:'pointer'
    },
  },
  editContainer:{
    display:'flex',
    marginRight:'.25rem',
    alignItems:'center'
  },
  editInput:{
    width:'6rem',
    color:'red',
    marginBottom:'.2rem',
  },
  publishIcon:{
    marginTop:'.5rem',
  },
  editUnitCount:{
    display:'flex',
    alignItems:'center',
  },
  editUnitBtn:{
    padding:'0',
    marginleft:'2rem'
  },
}));
