import {  Button, FormControl, Grid,  InputLabel, makeStyles, Select, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import {db, storage} from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),

        width: '25ch',
        flexGrow: 1, 
      },
    },
    serviceFormHeader:{
      textAlign: 'center',
      marginTop: '35px',
      fontSize: '28px',
      ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
        textAlign: 'left',
      marginTop: '0px',

        marginLeft: '8%'
      }
    },
    TextField:{
        fullWidth : true,
    },
    serviceForm:{
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        // minWidth: '350px',
        width: '85%',
  },
  serviceButton: {
    marginTop: '10px',
  },}));


function AddService() {
    const classes = useStyles();

    const fileTypes = [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/pdf",
      "application/doc",
      "application/msword",
    ];

    const {currentUser} = useAuth();
    const history = useHistory();
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
  
    const [state, setState] = useState({

        title: '',
        category: '',
        location: '',
        availability: '',
        price: '0',
        information: '',
        

      });
    
      function handleChangeFile(event) {
        const fileUpload = event.target.files[0];
        if (fileUpload && fileTypes.includes(fileUpload.type)) {
          setFile(event.target.files[0]);
        } else {
          alert("This file is not supported")

          setFile(null);
        }
      }

      const handleChange = (event) => {
        

        setState({
          ...state,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmit = async (e) => {


        e.preventDefault();
        console.log(state)



        if (currentUser) {

    
        //   // If submittion successful without file
          if (!file) {
            console.log("file not found")
            db.collection("services")
            .doc(currentUser.uid)
              .set(state,
                (state.date = new Date())
                )
              .then(() => {

                alert("Form submitted without file successfully");
                history.push('/profile')
              });
          }
          // If submittion successful with file
          else {
        //     setLoading(
        //       <div className="inputGroup progressBar">
        //         <Progress animated color="info" value={100}>
        //           Uploading...
        //         </Progress>
        //       </div>
        //     );
            await storage.ref(`/services/${file.name}`).put(file);
    
            storage
              .ref("services")
              .child(file.name)
              .getDownloadURL()
              .then((url) => {
                db.collection("services")
                .doc(currentUser.uid)
                  .set(
                    state,
                    (state.url = url),
                    (state.filename = file.name),
                    (state.date = new Date())
                    
                  )
                  .then(() => {
                    alert("Form submitted with file successfully");
                    history.push('/profile')
                    // console.log("data successfully uploaded")
        //             setURL(""),
        //               setFile(null),
   

                  });
              });
          }
        } else {
          console.log("no user found")

        }
      }

    return (
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
      
<Grid container spacing={3}>

<Grid item xs={12} sm={6}>
<Typography component="h2" className={classes.serviceFormHeader} gutterBottom>
          Add a Service
        </Typography>
</Grid>
<Grid item sm={6}>
</Grid>
        <Grid item xs={12} sm={6}>
        <TextField style={{width:'85%'}} label="Title" placeholder="Title" variant="outlined" name="title"  type="text" value={state.title}
            onChange={handleChange}/>
        </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-category-native-simple">Category</InputLabel>
          <Select
            native
            value={state.category}
            onChange={handleChange}
            label="Category"
            
            inputProps={{
              name: 'category',
              id: 'outlined-category-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={"music"}>Music</option>
            <option value={"poverty"}>Poverty</option>
            <option value={"pandit"}>Pandit</option>
          </Select>
        </FormControl>
          </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-location-native-simple">Location</InputLabel>
        <Select
          native
          value={state.location}
          onChange={handleChange}
          label="Location"
          inputProps={{
            name: 'location',
            id: 'outlined-location-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"india"}>India</option>
          <option value={"pakistan"}>Pakistan</option>
          <option value={"israel"}>Israel</option>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-availability-native-simple">Availability</InputLabel>
        <Select
          native
          value={state.availability}
          onChange={handleChange}
          label="Availability"
          inputProps={{
            name: 'availability',
            id: 'outlined-availability-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Online"}>Online</option>
          <option value={"Offline"}>Offline</option>
          <option value={"Both"}>Both</option>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
    id="outlined-secondary"
    label="Approx Price"
    placeholder="Price"
    type="Number"
    style={{width:'85%'}}
    variant="outlined"
    color="secondary"
    value={state.price}
    name = 'price'
    onChange={handleChange}
    />
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField

          id="outlined-full-width"
          placeholder="Placeholder"
          helperText="Only .pdf .doc .word files are supported"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"


    label="Upload File"
    type="file"
    style={{width:'85%'}}
    color="secondary"
    value={state.file}
    name = 'file'
    onChange={handleChangeFile}
    />
        </Grid>


        <Grid item xs={12}>
        <TextField
          id="outlined-multiline-flexible"
          placeholder="Additional Information"
          // margin="normal"
          label="Additional Information"
          multiline
          rows={4}
          variant="outlined"
          
          name = 'information'
          value={state.information}
          onChange={handleChange}

          style={{width:'90%'}}

          />
        </Grid>
        <Grid item sm={3}></Grid>
        <Grid item xs={12} sm={6} >
        <Button variant="contained" style={{ marginBottom: '35px',width: '50%'}} type="submit"  color="primary">
        Add service
      </Button>
        </Grid>
        <Grid item sm={3}></Grid>

        </Grid>

      </form>
    );
}

export default AddService
