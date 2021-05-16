import {
  Typography,
  makeStyles,
  Grid,
  Paper,
  MenuList,
  MenuItem,
  Container,
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db, storage } from "../../firebase";
import Account from "./Account";
import ProfileContent from "./ProfileContent";
import userLogo from "../../assets/user.png";
import Contact from "../ContactComponent/Contact";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import clx from "classnames";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px",
  },
  profileLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  serviceList: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    width: "450px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    ["@media (max-width:850px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "250px",
    },
  },
  logoutButton: {
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.light,
    },
  },
  profileEmail: {
    fontSize: "18px",
    margin: "2px",
  },
  profileName: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "2px",
  },
  profileImage: {
    maxWidth: "100px",
    margin: "10px",
    borderRadius: "50%"
  },
  addServiceButton: {
    marginTop: "5px",
    backgroundColor: theme.palette.primary.main,
  },
}));

function Profile() {
  const classes = useStyles();

  const { currentUser, logout } = useAuth();
  const [menuNo, setMenuNo] = useState("1");
  const [profile, setProfile] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(async () => {
    if (currentUser) {
      db.collection("accounts")
        .doc(currentUser.uid)
        .onSnapshot(async function (doc) {
          const data = await doc.data();
          await setProfile(data);
        });

      const service = await db
        .collection("services")
        .where("uid", "==", currentUser.uid)
        .get();
      const newServices = service.docs.map((doc) => doc.data());
      setServices(newServices);
    }
  }, [currentUser]);

  // useEffect( async () => {

  // },[profile.serviceId])

  return (
    <Container style={{ marginTop: "100px", minHeight: "90vh" }}>
      <Fade>
        {currentUser && (
          <div className={classes.root}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={4} align="center" justify="center">
                <Grid>
                  <div style={{ alignItems: "center", textAlign: "center" }}>
                    <img src={currentUser.photoURL ? currentUser.photoURL : userLogo} className={classes.profileImage} />
                    <p className={classes.profileName}>{profile?.fullname}</p>
                    <p className={classes.profileEmail}>{profile?.email}</p>
                  </div>
                </Grid>
               <Grid>
                  <Paper className={classes.paper}>
                    <MenuList>
                    {
                  profile.servicesProvider ? 
                      (<MenuItem onClick={() => setMenuNo("1")}>
                        Profile
                      </MenuItem>) : (<div></div>)}
                      <MenuItem onClick={() => setMenuNo("2")}>
                        Account
                      </MenuItem>
                      <MenuItem onClick={() => setMenuNo("3")}>
                        Messages
                      </MenuItem>
                      <MenuItem
                        className={classes.logoutButton}
                        onClick={logout}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Paper>
                  {
                  profile.servicesProvider ? 
                (
                  <Paper
                    className={clx(classes.paper, classes.addServiceButton)}
                  >
                    <MenuItem
                      style={{ justifyContent: "center" }}
                      component={Link}
                      to="/addservice"
                    >
                      Add Service
                    </MenuItem>
                  </Paper>
                  ) : (
                    <div></div>
                )
                
                }
                </Grid> 
              </Grid>
              <Grid item xs={12} sm={8}>
                {menuNo == "1" ? (
                  <div>
                    {services.length > 0 ? (
                      <div>
                        {services.map((data, i) => {
                          return <ProfileContent data={data} key={i} />;
                        })}
                      </div>
                    ) : (
                      <Typography>
                        No Service Found, Please Add A New Service
                      </Typography>
                    )}
                  </div>
                ) : menuNo == "2" ? (
                  <Account />
                ) : (
                  <Contact />
                )}
              </Grid>
            </Grid>
          </div>
        )}
      </Fade>
    </Container>
  );
}

export default Profile;
