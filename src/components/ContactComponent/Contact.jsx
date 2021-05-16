import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import userLogo from '../../assets/user.png'
import {db, auth} from '../../firebase';
import './contactStyles.css'
import {useAuth} from '../../contexts/AuthContext';

import { useCollectionData } from 'react-firebase-hooks/firestore'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});

const Chat = (props) => {
  const classes = useStyles();





//   useEffect( async () =>{

//     setState({ readError: null });
//     try {
//         db.collection("chats")
//         .doc()
//         .onSnapshot(async function (doc) {
//             const data = await doc.data();
//             await setState(data);
//           })
//     } catch (error) {
//       setState({ readError: error.message });
    
//   }

//   },[])

//   const handleChat = () => {
//       db.collection('chats').doc(props.match.params.id)
//       .set({chats : "message"})

//   }

  const {currentUser} = useAuth();

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
      </header>

      <section>
        {currentUser ? <ChatRoom /> : console.log("no chat room")}
      </section>

    </div>
  );

}

  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
    //   createdAt: firebase.db.Timestamp.serverTimestamp(),
    createdAt: new Date(),

      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }



  return (<>
    <main style={{marginTop:'70px'}} className="contact-main">

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage} className="contact-form">

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)  


    
//   return (
//       <div style={{  margin: '70px 15px 20px 15px'}}>
//           {console.log(messages)}
//         <Grid container>
//             <Grid item xs={12} >
//                 <Typography variant="h5" className="header-message">Chat</Typography>
//             </Grid>
//         </Grid>
//         <Grid container component={Paper} className={classes.chatSection}>
//             <Grid item xs={3} className={classes.borderRight500}>
//                 <List>
//                     <ListItem button key="RemySharp">
//                         <ListItemIcon>
//                         <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
//                         </ListItemIcon>
//                         <ListItemText primary="John Wick"></ListItemText>
//                     </ListItem>
//                 </List>
//                 <Divider />
//                 <Grid item xs={12} style={{padding: '10px'}}>
//                     <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
//                 </Grid>
//                 <Divider />
//                 <List>
//                     <ListItem button key="RemySharp">
//                         <ListItemIcon>
//                             <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
//                         </ListItemIcon>
//                         <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
//                         <ListItemText secondary="online" align="right"></ListItemText>
//                     </ListItem>
//                     <ListItem button key="Alice">
//                         <ListItemIcon>
//                             <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
//                         </ListItemIcon>
//                         <ListItemText primary="Alice">Alice</ListItemText>
//                     </ListItem>
//                     <ListItem button key="CindyBaker">
//                         <ListItemIcon>
//                             <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
//                         </ListItemIcon>
//                         <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
//                     </ListItem>
//                 </List>
//             </Grid>
//             <Grid item xs={9}>
//                 <List className={classes.messageArea}>
//                     <ListItem key="1">
//                         <Grid container>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" secondary="09:30"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="2">
//                         <Grid container>
//                             <Grid item xs={12}>
//                                 <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <ListItemText align="left" secondary="09:31"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="3">
//                         <Grid container>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" secondary="10:30"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                 </List>
//                 <Divider />
//                 <Grid container style={{padding: '20px'}}>
//                     <Grid item xs={11}>
//                         <TextField id="outlined-basic-email" label="Type Something" fullWidth />
//                     </Grid>
//                     <Grid xs={1} align="right">
//                         <Fab color="primary" aria-label="add" onClick={handleChat}><SendIcon /></Fab>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//       </div>
//   );
}

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img  src={photoURL || userLogo} />
        <p>{text}</p>
      </div>
    </>)
  }

export default Chat;