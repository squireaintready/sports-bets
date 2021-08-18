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
    justifyContent:'space-between',
    width: '18rem',
    borderBottom: '1px solid gray',
  },
  header:{
    color:'white'
  },
  unitsText:{
    color:'white'
  },
  leftSide:{
    display:'flex',
    marginLeft:'1rem'
    // justifyContent:'flex-start'
  },
  rightSide:{
    marginRight:'1rem'
  },
  icon:{
    marginRight:'.5rem',
    marginTop:'.2rem',
    "&:hover, &:focus": {
      cursor:'pointer'
    },
  },
  editContainer:{
    display:'none', 
    marginRight:'.25rem',
    alignItems:'center'
  },
  editInput:{
    width:'4rem',
    marginBottom:'.2rem',
    color:'red'
  },
  publishIcon:{
    marginBottom:'.4rem'
  }
}));
