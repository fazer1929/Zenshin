import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ExampleService from "./exampleServiceComponents/ExampleService";

const localdb = [
  {
    title: "Musicians",
    content:
      "Find the best musicians near you for your videos, movies, projects, parties and everything else.",
  },
  {
    title: "Catrine Service",
    content:
      "Find delicious catering service for weddings, birthdays, and other events",
  },
  {
    title: "Artists",
    content:
      "Artists are need for any creative work and you can find one of them here for working offline as well as offline.",
  },
  {
    title: "Everything",
    content:
      "Your every need from plumbing, painting to music, design and everything in between in one single place.",
  },
];
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});
export default function ExampleServices() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} align="center">
      <Grid xs={12}>
        <Box m={2}>
          <Typography m={2} variant="h4">
            Find All Kinds of Services Near You
          </Typography>
        </Box>
        <Grid xs={12} container spacing={10} justify="center">
          {localdb.map((elem, i) => (
            <Grid xs={10} key={i} item lg={5} justify="left" align="left">
              <Box my={4}>
                <ExampleService title={elem.title} content={elem.content} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
