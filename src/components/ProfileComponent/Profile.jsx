import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db, storage } from "../../firebase";

function Profile() {
  const { currentUser, logout } = useAuth();

  const [profile, setProfile] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (currentUser) {
      db.collection("accounts")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setProfile(data);
        });

      db.collection("services")
        .doc(currentUser.uid)
        .collection("service")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setServices(data);
        });
    }
  }, [currentUser]);

  return (
    <div style={{ marginTop: "70px" }}>
      {currentUser && (
        <div>
          Profile
          <div>
            <button onClick={logout}>Logout</button>
          </div>
          <div>
            <p>{profile?.email}</p>
            <p>{profile?.fullname}</p>
            {console.log(JSON.stringify(services))}
            {services.length > 0 && (
              <div>
                {services.map((data, i) => {
                  return (
                    <div>
                      {console.log(data)}
                      <p key={i}>Title : {data.title}</p>
                      <p key={i}>Information : {data.information}</p>
                      <p key={i}>Price : {data.price}</p>
                      <p key={i}>File Name : {data.filename}</p>
                      <p key={i}>Category : {data.category}</p>
                      <p key={i}>Availability : {data.availability}</p>
                    </div>
                  );
                })}

                {/* <p>{services[0].title}</p>
<p>{services[0].price}</p>
<p>{services[0].filename}</p>
<a href={services[0].url} target="_blank">Download file</a>
<p>{services[0].category}</p>
<p>{services[0].availability}</p>
        <p>{services[0].information}</p> */}
              </div>
            )}
          </div>
          <div>
            <a href="/addservice">Add Service</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
