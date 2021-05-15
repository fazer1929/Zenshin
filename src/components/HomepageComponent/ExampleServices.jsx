import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ExampleService from "./exampleServiceComponents/ExampleService";

const localdb = [
  {
    title: "Musicians",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit quisquam nihil vel, quae nemo nisi ipsum eius quam laudantium voluptatum voluptate exercitationem reiciendis perspiciatis. Mollitia eum beatae pariatur maiores.",
  },
  {
    title: "Catrine Service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit quisquam nihil vel, quae nemo nisi ipsum eius quam laudantium voluptatum voluptate exercitationem reiciendis perspiciatis. Mollitia eum beatae pariatur maiores.",
  },
  {
    title: "Artists",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit quisquam nihil vel, quae nemo nisi ipsum eius quam laudantium voluptatum voluptate exercitationem reiciendis perspiciatis. Mollitia eum beatae pariatur maiores.",
  },
  {
    title: "Everything",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit quisquam nihil vel, quae nemo nisi ipsum eius quam laudantium voluptatum voluptate exercitationem reiciendis perspiciatis. Mollitia eum beatae pariatur maiores.",
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
