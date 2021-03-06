import React, { useEffect, useState } from "react";
import userLogo from "../../assets/user.png";
// import { Helmet } from 'react-helmet';
import {
  Container,
  Grid,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  CardHeader,
  TextField,
  makeStyles,
} from "@material-ui/core";
// import AccountProfile from 'src/components/account/AccountProfile';
// import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import Fade from "react-reveal/Fade";
import { db, storage } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const user = {
  avatar: userLogo,
  city: "Raipur",
  country: "India",
  jobTitle: "Senior Developer",
  name: "Kuldeep Patel",
  timezone: "GTM-7",
};

const states = [
  {
    value: "alabama",
    label: "Delhi",
  },
  {
    value: "new-york",
    label: "Mumbai",
  },
  {
    value: "san-francisco",
    label: "C.G.",
  },
];

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
    marginBottom: "100px",
  },
});

function Account() {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: "Kuldeep",
    lastName: "Patel",
    email: "patelkuldeep0001@gmailcom",
    phone: "",
    state: "Chhattisgarh",
    country: "India",
  });

  const [profile, setProfile] = useState([]);
  const { currentUser, logout } = useAuth();

  useEffect(async () => {
    if (currentUser) {
      db.collection("accounts")
        .doc(currentUser.uid)
        .onSnapshot(async function (doc) {
          const data = await doc.data();
           setProfile(data);
        });


    }
  }, [currentUser]);

console.log(currentUser)
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className={classes.root}>
      <Fade>
        {/* <Helmet>
          <title>Account | Material Kit</title>
        </Helmet> */}
        <Box
          sx={{
            backgroundColor: "background.default",
            minHeight: "100%",
            py: 3,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xs={12}>
                {/* <AccountProfile /> */}

                <Card>
                  <CardContent>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Avatar
                        src={currentUser.photoURL ? currentUser.photoURL : userLogo}
                        sx={{
                          height: 100,
                          width: 100,
                        }}
                      />
                      <Typography color="textPrimary" gutterBottom variant="h3">
                        {profile.fullname}
                        {/* user Name */}
                      </Typography>
                      <Typography color="textSecondary" variant="body1">
                        {profile.email}
                        
                      </Typography>
                       <Typography color="textSecondary" variant="body1">
                        
                        {/* {` ${user.timezone}`} */}
                        {/* Time */}
                      </Typography> 
                    </Box>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button color="primary" fullWidth variant="text">
                      Upload picture
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={8} md={6} xs={12}>
                {/* <AccountProfileDetails /> */}

                <form autoComplete="off" noValidate>
                  <Card>
                    <CardHeader
                      subheader="The information can be edited"
                      title="Profile"
                    />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                          <TextField
                            fullWidth
                            helperText="Please specify the Full Name"
                            label="Full Name"
                            name="fullname"
                            onChange={handleChange}
                            required
                            value={values.firstName}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            onChange={handleChange}
                            required
                            value={profile.email}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            onChange={handleChange}
                            type="number"
                            value={values.phone}
                            variant="outlined"
                          />
                        </Grid>
                        {/* <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            onChange={handleChange}
                            required
                            value={values.country}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Select State"
                            name="state"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={values.state}
                            variant="outlined"
                          >
                            {states.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </TextField>
                        </Grid> */}
                      </Grid>
                    </CardContent>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        p: 2,
                      }}
                      align="center"
                      justify="center"
                    >
                      <Button color="primary" variant="contained">
                        Save details
                      </Button>
                    </Box>
                  </Card>
                </form>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Fade>
    </Container>
  );
}

export default Account;
