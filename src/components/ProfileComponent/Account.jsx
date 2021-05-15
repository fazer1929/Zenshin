import React, { useState } from 'react'
import userLogo from '../../assets/user.png';
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
  Typography,  CardHeader,  TextField
} from '@material-ui/core';
// import AccountProfile from 'src/components/account/AccountProfile';
// import AccountProfileDetails from 'src/components/account/AccountProfileDetails';

const user = {
  avatar: userLogo,
  city: 'Raipur',
  country: 'India',
  jobTitle: 'Senior Developer',
  name: 'Kuldeep Patel',
  timezone: 'GTM-7'
};

const states = [
  {
    value: 'alabama',
    label: 'Delhi'
  },
  {
    value: 'new-york',
    label: 'Mumbai'
  },
  {
    value: 'san-francisco',
    label: 'C.G.'
  }
];

function Account() {

  const [values, setValues] = useState({
    firstName: 'Kuldeep',
    lastName: 'Patel',
    email: 'patelkuldeep0001@gmailcom',
    phone: '',
    state: 'Chhattisgarh',
    country: 'India'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

    return (
        <div >
        {/* <Helmet>
          <title>Account | Material Kit</title>
        </Helmet> */}
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
              >
                {/* <AccountProfile /> */}



                <Card >
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {user.name}
          {/* user Name */}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.city} ${user.country}`}
          {/* city Country */}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {` ${user.timezone}`}
          {/* Time */}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>



              </Grid>
              <Grid
                item
                lg={8}
                md={6}
                xs={12}
              >
                {/* <AccountProfileDetails /> */}


                <form
      autoComplete="off"
      noValidate
      
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
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
            <Grid
              item
              md={6}
              xs={12}
            >
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
            <Grid
              item
              md={6}
              xs={12}
            >
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
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>


              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    )
}

export default Account
