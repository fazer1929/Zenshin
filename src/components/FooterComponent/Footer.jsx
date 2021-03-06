import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Box } from "@material-ui/core";

// Icons Import
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  footer: {
    padding: 0,
    bottom: 0,
    flexGrow: 1,
  },
  footerTop: {
    display: "flex",
    backgroundColor: "#1E2232",
    height: "30vh",
    color: "#FFFFFF",
    paddingTop: "50px",
  },
  footerTopLeftMain: {
    display: "flex",
    paddingRight: "0px",
  },
  footerTopLeft: {
    margin: "15px",
    fontSize: "18px",
    fontWeight: "fontWeightMedium",
    textAlign: "center",
  },
  footerTopRight: {
    margin: "15px",
    fontSize: "24px",

    paddingRight: "18%",
    textAlign: "right",
    ["@media (max-width:850px)"]: {
      // eslint-disable-line no-useless-computed-key
      textAlign: "center",
      paddingRight: "0px",

    },
  },
  footerBottom: {
    paddingTop: "20px",
    backgroundColor: "#191C27",
    minHeight: "10vh",
    textAlign: "center",
  },
  footerLinkedInIconStyle: {
    textDecoration: "none",
    margin: "5px",

    color: "white",

    "&:hover": {
      color: "#0077b5",
    },
  },
  footerFacebookIconStyle: {
    textDecoration: "none",
    margin: "5px",
    color: "white",

    "&:hover": {
      color: "#4267B2",
    },
  },
  footerYouTubeIconStyle: {
    textDecoration: "none",
    margin: "5px",

    color: "white",
    "&:hover": {
      color: "#FF0000",
    },
  },
  footerTwitterIconStyle: {
    textDecoration: "none",
    margin: "5px",

    color: "white",

    "&:hover": {
      color: "#00acee",
    },
  },
  footerBottomDown: {
    margin: "5px",
    color: "#03CA95",
    fontWeight: "fontWeightLight",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.footer}>
      <Typography component="div" className={classes.footerTop}>
        <Grid container>
          <Box clone order={{ xs: 2, sm: 1 }}>
            <Grid item xs={12} sm={6} className={classes.footerTopLeftMain}>
              <Grid item xs={4}>
                <Typography component="div" className={classes.footerTopLeft}>
                  Home
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography component="div" className={classes.footerTopLeft}>
                  Contact
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography component="div" className={classes.footerTopLeft}>
                  Company
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, sm: 2 }}>
            <Grid item xs={12} sm={6}>
              <Link to="/" style={{ color: "inherit", textdecoration: "none" }}>
                <Typography component="div" className={classes.footerTopRight}>
                  Zenshin
                </Typography>
              </Link>
            </Grid>
          </Box>
        </Grid>
      </Typography>
      <Typography component="div" className={classes.footerBottom}>
        <Grid container>
          <Grid item xs={12}>
            <Typography component="div" className={classes.footerBottomUp}>
              <a
                href="https://www.linkedin.com/feed/"
                className={classes.footerLinkedInIconStyle}
              >
                {" "}
                <LinkedInIcon />{" "}
              </a>
              <a
                href="https://youtube.com"
                className={classes.footerYouTubeIconStyle}
              >
                {" "}
                <YouTubeIcon />{" "}
              </a>
              <a
                href="https://twitter.com/"
                className={classes.footerTwitterIconStyle}
              >
                {" "}
                <TwitterIcon />{" "}
              </a>
              <a
                href="https://www.facebook.com/"
                className={classes.footerFacebookIconStyle}
              >
                {" "}
                <FacebookIcon />{" "}
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="p" className={classes.footerBottomDown}>
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/abhishekagrawal1929/"
                target="_blank"
                style={{ color: "#fc0362", textDecoration: "none" }}
              >
                Abhishek
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/in/patelkuldeep/"
                target="_blank"
                style={{ color: "#fc0362", textDecoration: "none" }}
              >
                {" "}
                Kuldeep
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Typography>
    </Container>
  );
}

export default Footer;
