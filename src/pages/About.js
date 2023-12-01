import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">KFC</Typography>
        <p>
          KFC is a rerstaurant based in the United states with oulets around the world,
          we are known for our fried chicken and secret recipe which has been passed down
          through generations of families. our new Branch in Mukono, Uganda brings you a variety of new
          dishes on our menu.
        </p>
        <br />
        <p>
          WE HOPE YOU ENJOY OUR SERVICES MUKONO!! 
        </p>
      </Box>
    </Layout>
  );
};

export default About;
