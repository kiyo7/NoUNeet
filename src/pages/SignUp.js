// lib
import { useState } from "react";
import { Link } from "react-router-dom";

// @material-ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// components
import firebase from "../config/firebase";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        新規登録
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          marginBottom: 15,
        }}
      >
        <TextField
          margin="normal"
          required
          fullwidth="true"
          variant="outlined"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          margin="normal"
          required
          fullwidth="true"
          variant="outlined"
          label="E-mail"
          name="e-mail"
          autoComplete="e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          type="password"
          margin="normal"
          required
          fullwidth="true"
          variant="outlined"
          label="Password"
          name="password"
          autoComplete="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br/>
      <Button type="submit" variant="contained" color="secondary">
        登録
      </Button>
      </Box>
      <Link to="/login">ログイン画面へ</Link>
    </Box>
  );
};
