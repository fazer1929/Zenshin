import React, { useEffect, useState } from 'react'
import {useAuth} from '../../contexts/AuthContext';
import {db, storage} from '../../firebase'

function Profile() {
    const {currentUser, logout} = useAuth();


    const [profile, setProfile] = useState([]);
  
    useEffect(() => {
      if (currentUser) {
        db.collection("accounts")
          .doc(currentUser.uid)
          .onSnapshot(function (doc) {
            const data = doc.data();
            setProfile(data);
          });
      }
    }, [currentUser]);


    return (
        <div>
            {
                currentUser && (
                    <div>
                        Profile
                        <div>
                            <button onClick={logout}>Logout</button>
                        </div>
                        <div>
                            <p>{profile?.email}</p>
                            <p>{profile?.fullname}</p>

                        </div>
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
