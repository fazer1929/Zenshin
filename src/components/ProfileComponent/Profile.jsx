import {
  


  Typography,
  makeStyles, Grid, Paper, MenuList, MenuItem
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db, storage } from "../../firebase";
import Account from "./Account";
import ProfileContent from "./ProfileContent";
import userLogo from '../../assets/user.png';
import Contact from '../ContactComponent/Contact'
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px",
  },
  profileLeft:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxHeight: "50vh"
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
  profileEmail :{
    fontSize: '18px',
    margin: '2px'

  },
  profileName : {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '2px'
  },
  profileImage : {
    maxWidth: '100px',margin: "10px"
  }
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
            <div style={{alignItems:'center',textAlign: 'center'}}>
                <img src={userLogo} className={classes.profileImage}/>
                <p className={classes.profileName}>{profile?.fullname}</p>
                <p className={classes.profileEmail}>{profile?.email}</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              
            </Grid>
            <Grid item xs={12} sm={4} className={classes.profileLeft}>

              <Paper className={classes.paper}>
                <MenuList>
                  <MenuItem onClick={()=>setMenuNo('1')}>Profile</MenuItem>
                  <MenuItem onClick={()=>setMenuNo('2')}>Account</MenuItem>
                  <MenuItem onClick={()=>setMenuNo('3')}>Messages</MenuItem>
                  <MenuItem className={classes.logoutButton} onClick={logout}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Paper>
              <Paper className={classes.paper} style={{marginTop: '5px',backgroundColor:"#03CA95"}}>
                  <MenuItem style={{justifyContent: 'center'}}>
                  
                   <a href='/addservice' style={{textDecoration: "none",color:'#191C27'}}>Add Service</a>
                  </MenuItem>
                  
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
          { menuNo == '1' ? ( <div>  
            
              {services.length > 0 ? (
                <div>
                {services.map((data, i) => {
                  return <ProfileContent data={data} key={i} />;
                })}
              </div>
              ):(

                <Typography >No Service Found, Please Add A New Service</Typography>

              )}
              
               </div>  ) : (

                menuNo == '2' ? (

                  <Account/>
                  ): <Contact/>
              )

      }
            </Grid>
          </Grid>

        </div>
      )}
      </Fade>
    </div>
  );
}

export default Profile;
