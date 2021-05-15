import React, { useEffect, useState } from "react";
import Header from "./Header";
import countries from "../../constants/location";
import categories from "../../constants/categoreis";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
function Dashboard() {
  const { currentUser } = useAuth();
  const [services, setServices] = useState([]);
  useEffect(() => {
    db.collection("services")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data, "data");
        setServices(data);
      });
  }, []);
  return (
    <div style={{ marginTop: "90px" }}>
      <Header countries={countries} categories={categories} />
    </div>
  );
}

export default Dashboard;
