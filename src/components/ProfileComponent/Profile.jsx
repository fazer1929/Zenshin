import { Accordion, makeStyles, AccordionSummary, AccordionDetails, Typography, Grid, Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, MenuList, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ImageIcon from '@material-ui/icons/Image';
import React, { useEffect, useState } from 'react'
import {useAuth} from '../../contexts/AuthContext';
import {db, storage} from '../../firebase'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '10px'
  },
  serviceList:{
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    width: '450px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    ['@media (max-width:850px)']: { // eslint-disable-line no-useless-computed-key
      width: '250px',

    }
    // white-space: nowrap; 
    // width: 100px; 
    // overflow: hidden;
    // text-overflow: ellipsis;
  },
  logoutButton:{
    backgroundColor: '#ff0000',
    '&:hover': {
      backgroundColor: "#ed8366",
   },
  },
}));


function Profile() {

  const classes = useStyles();

    const {currentUser, logout} = useAuth();


    const [profile, setProfile] = useState([]);
    const [services, setServices] = useState([]);
  
    useEffect( async() => {
      if (currentUser) {
        db.collection("accounts")
          .doc(currentUser.uid)
          .onSnapshot(async function (doc) {
            const data = await doc.data();
           await setProfile(data);
            
          })
        
          const service = await db.collection('services').where("uid", '==', currentUser.uid).get()
          const newServices =  service.docs.map((doc) => doc.data())
          setServices(newServices)


            }

    
    }, [currentUser]);


    // useEffect( async () => {



    // },[profile.serviceId])


    return (
        <div style={{marginTop:'70px'}}>
            {
                currentUser && (
  
<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>

        <div>

<p>{profile?.email}</p>
                    <p>{profile?.fullname}</p>

</div>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Account</MenuItem>
          <MenuItem className={classes.logoutButton} onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Paper>
     

          
        </Grid>
        <Grid item xs={12} sm={8}>


         {services.length > 0  &&


<div>

{
              services.map((data, i) => {
                  return (

                      <div key={i}>

<Accordion >
<AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{data.title}</Typography>

          <Typography className={classes.secondaryHeading}>{ (data.information) ? (data.information) : ("N/A")}</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <List className={classes.serviceList}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Information" secondary={ (data.information) ? (data.information) : ("N/A")} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Price" secondary={ (data.price || (data.price == "0")) ? (data.price) : ("Not Provide")} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="File Name" secondary={ (data.filename) ? (data.filename) : ("Not Available")} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Category" secondary={ data.category } />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Availability" secondary={data.availability} />
      </ListItem>

    </List>

          
        </AccordionDetails>
      </Accordion>

             

</div>         )})}
                          
 
            
                        </div>

            } 
            </Grid>

                           </Grid>
            <div>
                           <a href="/addservice">Add Service</a> 
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Profile
