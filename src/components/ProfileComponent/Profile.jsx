import { makeStyles, Grid, Paper, MenuList, MenuItem } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db, storage } from "../../firebase";
import Account from "./Account";
import ProfileContent from "./ProfileContent";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px",
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
    // white-space: nowrap;
    // width: 100px;
    // overflow: hidden;
    // text-overflow: ellipsis;
  },
  logoutButton: {
    backgroundColor: "#ff0000",
    "&:hover": {
      backgroundColor: "#ed8366",
    },
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
    <div style={{ marginTop: "70px", minHeight: "90vh" }}>
      <Fade>
        {currentUser && (
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <div>
                  <p>{profile?.email}</p>
                  <p>{profile?.fullname}</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={8}></Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <MenuList>
                    <MenuItem onClick={() => setMenuNo("1")}>Profile</MenuItem>
                    <MenuItem onClick={() => setMenuNo("2")}>Account</MenuItem>
                    <MenuItem className={classes.logoutButton} onClick={logout}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={8}>
                {menuNo == "1" ? (
                  <div>
                    {" "}
                    {services.length > 0 && (
                      <div>
                        {services.map((data, i) => {
                          return <ProfileContent data={data} key={i} />;
                        })}
                      </div>
                    )}{" "}
                  </div>
                ) : (
                  <Account />
                )}
              </Grid>
            </Grid>
            <div>
              <a href="/addservice">Add Service</a>
            </div>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default Profile;
