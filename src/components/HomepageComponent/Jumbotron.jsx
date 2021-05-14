import { Button, Grid, Icon, IconButton, Typography,makeStyles } from '@material-ui/core'
import React from 'react'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

const useStyles=  makeStyles({
    root:{
        height:"100vh"
    },

    innerContainer:{
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },

    heading:{
        marginTop:"50px",
        marginBottom:"30px",
    }
})

const Jumbotron = () => {
    const classes = useStyles();

    return (
        <Grid container xs={12} justify="center" className={classes.root}>
            <Grid item xs={10} md={6} className={classes.innerContainer}>
                <IconButton color="primary"  >
                    <PlayCircleFilledRoundedIcon style={{width:"100px",height:"100px"}}/>
                </IconButton> 

            <Typography variant="h4" className={classes.heading} align="center">
                Find Services For Everything
            </Typography>
            <Button variant="contained" color="primary" >
                    Find Services
                </Button>
            </Grid>
        </Grid>
    )
}

export default Jumbotron
