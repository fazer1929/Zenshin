import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minHeight: "30vh",
    marginTop: "30px",
    marginBottom: "60px",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  },
});
function Testimonial() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} md={6} className={classes.center} align="center">
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            consectetur praesentium labore totam.
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={6}
          direction="row"
          justify="center"
          spacing={2}
          align="center"
        >
          <Grid className={classes.center}>
            <Button
              component={Link}
              to="/dashboard"
              size="medium"
              variant="contained"
              color="primary"
            >
              Find Services
            </Button>
          </Grid>
          <Grid className={classes.center}>
            <Button
              variant="contained"
              component={Link}
              to="/dashboard"
              size="/profile"
              color="secondary"
            >
              Provide Services
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Testimonial;
