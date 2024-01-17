import React from "react";
import TextField from "@mui/material/TextField";
import "./SecurityFormsStyle.css";
import { BackHand } from "@mui/icons-material";

export default function SecurityForm({ dataUser }) {
  const { email } = dataUser;
  const { username, password, salt, md5, shal, sha256 } = dataUser.login;

  const textFieldStyles = {
    color: '#000000',
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
    <section className="SecurityFormsSection">
      <TextField
        disabled
        label="Email"
        defaultValue={email}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Username"
        defaultValue={username}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Password"
        defaultValue={password}
        sx={textFieldStyles}
      />{" "}
      <TextField
        disabled
        label="Salt"
        defaultValue={salt}
        sx={textFieldStyles}
      />{" "}
      <TextField
        disabled
        label="MD5"
        defaultValue={md5}
        sx={textFieldStyles}
      />{" "}
      <TextField
        disabled
        label="Shal"
        defaultValue={shal}
        sx={textFieldStyles}
      />
      <TextField
        disabled
        label="Sha256"
        defaultValue={sha256}
        sx={textFieldStyles}
      />
    </section>
  );
}
