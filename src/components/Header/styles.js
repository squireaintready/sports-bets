import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    // backgroundColor: "#3bb78f",
    // backgroundImage: "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)",
    // backgroundColor: "#63d471",
    // backgroundImage: "linear-gradient(315deg, #233329 0%, #63d471 74%)",
    background: "#141E30",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #243B55, #141E30)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #243B55, #141E30)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  title: {
    flexGrow: 1,
  },
  userImg:{
    width:'40px',
    borderRadius:'99px'
  },  
}));
