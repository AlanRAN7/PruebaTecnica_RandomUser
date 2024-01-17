import React from 'react'
import { TextField } from "@mui/material";
import "./PersonalFormStyle.css";

function PersonalForm({dataUser}) {
    const { title, first, last } = dataUser.name;
    const {phone, cell} = dataUser;
    const {age} = dataUser.dob;
    const {name, value} = dataUser.id;
    const { gender } = dataUser;

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
    <section className='personalFormSection'>
       <TextField
        disabled
        label="Title:"
        defaultValue={title}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="First Name:"
        defaultValue={first}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Last Name:"
        defaultValue={last}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Cell:"
        defaultValue={cell}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Phone:"
        defaultValue={phone}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Age:"
        defaultValue={age}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="ID - Name:"
        defaultValue={name}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="ID - Number:"
        defaultValue={value}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Gender:"
        defaultValue={gender}
        sx={textFieldStyles}
      />
    </section>
  )
}

export default PersonalForm
