import React from "react";
import { TextField } from "@mui/material";
import "./LocationInformationStyle.css";

const LocationForms = ({dataUser}) =>{
  const { number, name } = dataUser.location.street;
  const { city, state, country, postcode } = dataUser.location;
  const { latitude, longitude } = dataUser.location.coordinates;
  const { offset, description } = dataUser.location.timezone;
  const textFieldStyles = {
    backgroundColor: '#efefef',
    width: '300px',
    '& .MuiInputLabel-root': {
      color: '#000000',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#000000',
      },
    },
  };
  return (
    <section className="locationFormsSection">
      <TextField
        disabled
        label="Street - Number:"
        defaultValue={number}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Street - Name:"
        defaultValue={name}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="State:"
        defaultValue={state}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Country:"
        defaultValue={country}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Latitude:"
        defaultValue={latitude}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Longitude:"
        defaultValue={longitude}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Postcode:"
        defaultValue={postcode}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="City:"
        defaultValue={city}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Timezone - Description:"
        defaultValue={description}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Timezone - Offset:"
        defaultValue={offset}
        sx={textFieldStyles}
      />
    </section>
  );
};

export default LocationForms;