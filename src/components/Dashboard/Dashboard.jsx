import React, { useEffect, useState } from "react";
import Header from "./Header";
import countries from "../../constants/location";
import categories from "../../constants/categoreis";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import ServiceCard from "./ServiceCard";
import { Container, Grid } from "@material-ui/core";

function Dashboard() {
  const { currentUser } = useAuth();
  const [services, setServices] = useState([]);
  const [currentServices, setCurrentServices] = useState([]);

  useEffect(() => {
    db.collection("services")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data, "data");
        setServices(data);
        setCurrentServices(data);
      });
  }, []);

  return (
    <div style={{ marginTop: "90px" }}>
      <Header
        countries={countries}
        setCurrentServices={setCurrentServices}
        categories={categories}
      />
      <Container>
        <Grid container justify="center">
          {currentServices.map((data, i) => {
            console.log(data, "data");
            return <ServiceCard key={i} data={data} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
