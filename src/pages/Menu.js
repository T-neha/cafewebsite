import React from "react";
import Layout from "./../components/Layout/Layout";
import { MenuList } from "../data/data.js";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {MenuList.map((menu) => (
          <Card sx={{maxWidth:'390px', display:'flex' , m:2}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">
                  {menu.description}
                </Typography>
                <Typography variant="body2">
                <CurrencyRupeeIcon sx={{fontSize:"medium",mt:2}}/>{menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
