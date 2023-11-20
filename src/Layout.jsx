import React from "react";
import Header from "./components/Header";
import { Container } from "@mui/material";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
