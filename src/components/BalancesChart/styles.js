import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    display:'grid',
    placeItems:'center',
    marginTop: '2rem',
    marginBottom: '4rem',
  },
  paper:{
    display:'grid',
    placeItems:'center',
    padding: theme.spacing(2),
    background: "linear-gradient(to right, #292E49, #536976)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    paddingLeft: '4rem',
    paddingRight: '4rem',
    paddingTop: '2rem',
    paddingBottom: '3rem'
  },
  row:{
    display:'flex',
    justifyContent:'space-between',
    width: '13rem',
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
  },
  icon:{
    marginRight:'.5rem'
  }
}));
