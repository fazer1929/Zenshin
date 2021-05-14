import React from "react";

import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
const useStyles = makeStyles({
  image: {
    width: "80%",
    miHeight: "300px",
  },
  section3: {
    minHeight: "50vh",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
function Section3() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid container spacing={2} className={classes.section3}>
          <Grid item xs={12} lg={6}>
            <img className={classes.image}></img>
          </Grid>

          <Grid item xs={12} lg={6} className={classes.center}>
            <Typography variant="body1" style={{ fontWeight: "700" }}>
              Awesomeness
            </Typography>
            <Box my={2} mx={4}>
              <Typography variant="body2" align="justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                reprehenderit enim soluta voluptatibus dolorem ullam
                necessitatibus hic accusantium rem, laboriosam veritatis
                sapiente molestias perspiciatis magnam, mollitia dignissimos
                deserunt ipsa? Repellat?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={2} className={classes.section3}>
          <Box clone order={{ xs: 2, md: 1 }}>
            <Grid item xs={12} lg={6} className={classes.center}>
              <Typography variant="body1" style={{ fontWeight: "700" }}>
                Awesomeness
              </Typography>
              <Box my={2} mx={4}>
                <Typography variant="body2" align="justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iste, reprehenderit enim soluta voluptatibus dolorem ullam
                  necessitatibus hic accusantium rem, laboriosam veritatis
                  sapiente molestias perspiciatis magnam, mollitia dignissimos
                  deserunt ipsa? Repellat?
                </Typography>
              </Box>
            </Grid>
          </Box>

          <Box order={{ xs: 1, md: 2 }}>
            <Grid item xs={12} lg={6} justify="center" align="center">
              <img className={classes.image}></img>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Section3;
