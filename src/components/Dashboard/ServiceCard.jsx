import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Grid,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "./defaultServiceCardImage.png";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: "relative",
    height: 450,
    margin: "30px",
  },
  media: {
    height: 140,
  },
  bottom: {
    position: "absolute",
    bottom: "10px",
  },
});

function ServiceCard({ data }) {
  const classes = useStyles();
  return (
    <Grid xs={12} sm={6} lg={4}>
      <Card className={classes.root} raised>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={defaultImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.title}
            </Typography>
            <Box mb={2} fontWeight="600" color="text.primary">
              <Typography variant="body1" component="p">
                - {data?.fullname} / ${data?.price} (approx)
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {data?.availability} / {data?.location}
              </Typography>
            </Box>

            <Typography variant="body2" color="textSecondary" component="p">
              {data.information.substr(0, 200)}
              {data.information.length > 200 ? "..." : ""}
            </Typography>
            <Box my={2}>
              <Typography variant="body1" component="p">
                {data?.category?.toUpperCase()}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.bottom}>
            <Link to={`/contact/${data.uid}/${data.title}`}>
          <Button size="small" color="primary" >
            Contact
          </Button>
            </Link>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ServiceCard;
