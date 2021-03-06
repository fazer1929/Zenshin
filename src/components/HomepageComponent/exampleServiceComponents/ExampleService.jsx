import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function ExampleService({ title, content }) {
  return (
    <Grid>
      <Typography variant="body1" style={{ fontWeight: "700" }}>
        {title}
      </Typography>
      <Box my={2}>
        <Typography variant="body2" align="justify">
          {content}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        to="/dashboard"
      >
        Learn More
      </Button>
    </Grid>
  );
}

export default ExampleService;
