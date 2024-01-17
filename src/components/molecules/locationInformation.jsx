import React from "react";

import LocationForms from "./Forms/LocationForms/LocationForms";
import Typography from '@mui/material/Typography'

// import "./LocationInformationStyle.css";

const LocationInformation = ({dataUser}) =>{

  return (

    <>
    <section className='titleSection'>
    <Typography variant="h4" color="initial" className='titleTypography'>Location Information</Typography>
    </section>
    <section className="locationFormsSection">
        <LocationForms dataUser={dataUser}/>
    </section>
    </>
  );
};

export default LocationInformation;