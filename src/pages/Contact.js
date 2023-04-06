import React from "react";
import Layout from "./../components/Layout/Layout";
import "../components/styles/contact.css";


import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Pizza from '../images/6th.jpg';

const Contact = () => {
  return (
    <Layout>
      <div className="pizza" style={{backgroundImage:`url(${Pizza})`}}></div>
      <Box
        sx={{
          my: 5,
          ml: 3.5,
          "@media(max-width:600px)": {
            width: "300px",
            marginLeft: "35px"
          },
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact for Order</Typography>
        <p>
          Whether you're in the mood for a quick snack, a satisfying meal, or a
          delicious cup of coffee, we have everything you need. Browse our menu,
          place an order online or visit us in-store. We can't wait to serve
          you!
        </p>
      </Box>

      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 3.5,
          "@media(max-width:600px)": {
            width: "300px",
            marginLeft: "35px"
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                  business@Email.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  +91-7743809448
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      
    </Layout>
  );
};

export default Contact;
