import { Box, Typography,ImageList,ImageListItem,} from "@mui/material";
import React from "react";
import Layout from "./../components/Layout/Layout";
import { MenuList } from "../data/data2.js";

const About = () => {
  return (
    <Layout>
      <Box>
      <ImageList variant="masonry" cols={3} gap={6}>
  {MenuList.map((menu) => (
    <ImageListItem key={menu.image}>
      <img
        src={`${menu.image}?w=248&fit=crop&auto=format`}
        srcSet={`${menu.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={menu.name}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
      </Box>
      <Box sx={{
        my:12,
        textAlign:'center',
        p:2,
       "& h4":{
        fontWeight:'bold',
        my:2,
        fontSize:'2 rem',

       },
       "& p":{
        textAlign:"justify",
       },
       "@media(max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:'1.5rem'
        }
       }
      }}>
        <Typography variant="h4">Welcome to the Caffeine Corner Cafe</Typography>
        <p>
          Welcome to our website, where we have everything you need to satisfy
          your cravings for snacks, fast food, and coffee! Here are some of the
          highlights of what we offer. We have a wide variety of snacks to
          choose from, ranging from sweet to savory. Our snacks include chips,
          popcorn, pretzels, candy bars, and more. If you're looking for a quick
          and delicious meal, we have you covered. Our fast food menu includes
          burgers, fries, chicken tenders, hot dogs, and more. We know that
          coffee is an essential part of many people's day, so we take our
          coffee seriously. We offer a variety of coffee drinks, from classic
          drip coffee to lattes, cappuccinos, and mochas.In addition to our
          snacks, fast food, and coffee, we also have a few other offerings that
          you might be interested in.
        </p>
        <br />
        We also have healthier options, such as trail mix, granola bars, and
        dried fruit. Our selection is perfect for snacking on the go or as a
        treat to enjoy at home. We use fresh ingredients and prepare everything
        to order, so you can be sure you're getting a hot, fresh meal every
        time. We use high-quality beans and our baristas are trained to create
        the perfect cup of coffee every time. We also have a selection of teas
        and other hot beverages. We also have a loyalty program that rewards
        frequent customers with discounts and free items.
      </Box>
    </Layout>
  );
};

export default About;
