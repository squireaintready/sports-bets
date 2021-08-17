import useStyles from "./styles";
import { Paper, Typography, Grid, Box } from "@material-ui/core";

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container className={classes.infoContainer}>
          <Grid item xs={6} sm={6} md={6} lg={4}>
            <Box className={classes.info} p={{ xs: 2, sm: 4, md:6, lg: 8 }}>
              <Typography variant="subtitle1" gutterBottom className={classes.title}>
                CALL
              </Typography>
              <Typography variant="subtitle2" gutterBottom className={classes.text}>
                917-292-4594
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={4}>
            <Box className={classes.info} p={{ xs: 2, sm: 4, md:6, lg: 8 }}>
              <Typography variant="subtitle1" gutterBottom className={classes.title}>
                EMAIL
              </Typography>
              <Typography variant="subtitle2" gutterBottom className={classes.text}>
                jo.sunghak@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box className={classes.socialContainer} p={{ xs: 2, sm: 4, md:6, lg: 8 }}>
          <Typography variant="body1" gutterBottom className={classes.socialHeader}>
            Innovating one project at a time
          </Typography>
          <Box className={classes.socialMediaIcons}>
            <a target="_blank" href="https://github.com/squireaintready">
              <GitHubIcon className={classes.socialMediaIcon}/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/samuel-jo">
              <LinkedInIcon className={classes.socialMediaIcon}/>
            </a>
            <a target="_blank" href="https://www.instagram.com/jamnssamn/">
              <InstagramIcon className={classes.socialMediaIcon}/>
            </a>
          </Box>
        </Box>

      </Paper>
    </div>
  );
};

export default Footer;