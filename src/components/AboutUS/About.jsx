import {
  Container,
  Typography,
  Card,
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  makeStyles,
  Grid,
  CardActions,
  IconButton,
} from "@material-ui/core";
import React from "react";
import kuldeep from "./kuldeep.jpg";
import abhishek from "./abhishek.jpg";
import { a } from "react-router-dom";
import { GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    marginTop: "80px",
  },
  card: {
    maxWidth: 300,
    marginTop: "30px",
    marginBottom: "60px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  centerText: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
});

function About() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        <Grid xs={12}>
          <Box my={3}>
            <Typography variant="h3">Our Team</Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={4} justify="center" align="center">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Kuldeep Patel"
                height="340"
                image={kuldeep}
                title="Kuldeep Patel"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Kuldeep Patel
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.centerText}>
              <a href="" target="_blank">
                <Twitter />
              </a>
              <a href="" target="_blank">
                <GitHub />
              </a>
              <a href="" target="_blank">
                <Instagram />
              </a>
              <a href="" target="_blank">
                <LinkedIn />
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={4} justify="center" align="center">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Abhishek Agrawal"
                height="340"
                image={abhishek}
                title="Abhishek Agrawal"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Abhishek Agrawal
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.centerText}>
              <a href="" target="_blank">
                <Twitter />
              </a>
              <a href="" target="_blank">
                <GitHub />
              </a>

              <a href="" target="_blank">
                <LinkedIn />
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
