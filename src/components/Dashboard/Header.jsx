import { Container, Grid, makeStyles, TextField } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import clx from "classnames";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    marginBottom: "30px",
  },
  remStyle: {
    border: "none",
    boxShadow: "none",
    outline: "none",
    display: "flex",
    alignItems: "center",
  },
  locationbar: {
    borderRight: "1px solid gray",
    paddingRight: "10px",
  },
  searchBox: {
    padding: "8px",
    border: "1px solid #bdc3c7",
    borderRadius: "4px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
});
function Header({ countries, categories, setCurrentServices }) {
  const classes = useStyles();
  const [searched, setSearched] = useState();
  const requestSearch = (searchedVal) => {
    // const filteredRows = originalRows.filter((row) => {
    //   return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    // });
    // setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  return (
    <Container>
      <Grid
        container
        justify="center"
        align="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid xs={12} md={8} container className={classes.searchBox}>
          <Grid xs={5} md={3}>
            <Autocomplete
              id="combo-box-demo"
              options={countries}
              className={clx(classes.remStyle, classes.locationbar)}
              autoSelect
              renderInput={(params) => (
                <>
                  <LocationOnIcon />
                  <TextField
                    className={classes.remStyle}
                    {...params}
                    placeholder="Location"
                    margin="dense"
                  />
                </>
              )}
            />
          </Grid>
          <Grid xs={7} md={9}>
            <SearchBar
              className={classes.remStyle}
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
              placeholder="Search Service"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        align="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid xs={6} md={2}>
          <Autocomplete
            id="combo-box-demo"
            options={categories}
            autoSelect
            renderInput={(params) => (
              <TextField
                {...params}
                label="Categories"
                variant="outlined"
                margin="dense"
              />
            )}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
