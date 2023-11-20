import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "start",
          background: "white",
          minHeight: "100vh",
          minWidth: "100vh",
        }}
      >
        <Button
          onClick={() => {
            navigate("/");
          }}
          sx={{
            padding: "7px 15px",
            margin: "0 8px",
            background: "#233EAE",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.075)",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h8" sx={{ color: "white" }}>
            Héroes
          </Typography>
        </Button>
        <Button
          onClick={() => {
            navigate("/Villanos");
          }}
          sx={{
            padding: "7px 15px",
            margin: "0 8px",
            background: "#233EAE",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.075)",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h8" sx={{ color: "white" }}>
            Villanos
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
