import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import guardianicon from "./images/guardiansicon.png";

const Header = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "start",
          background: "gray",
          minHeight: "100vh",
          minWidth: "100vh",
        }}
      >
        <img alt="guardian icon" width="80px" height="80px" src={guardianicon}/>
        <Button
          onClick={() => {
            navigate("/");
          }}
          sx={{
            padding: "7px 15px",
            margin: "0 8px",
            background: "#1D3541",
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
            background: "#1D3541",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.075)",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h8" sx={{ color: "white" }}>
            Villanos
          </Typography>
        </Button>
        <Button
          onClick={() => {
            navigate("/Batallas");
          }}
          sx={{
            padding: "7px 15px",
            margin: "0 8px",
            background: "#1D3541",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.075)",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h8" sx={{ color: "white" }}>
            Batallas
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
