import React from 'react';
import Layout from '../components/organisms/layout';
import Jumbotron from '../components/molecules/jumbotron';
import Article from '../components/atoms/article';
import Box from '../components/atoms/box';
import Card from '../components/atoms/card';

export default () => (
  <Layout>
    <Jumbotron image="IMG_2024111...701_618.jpg" position="middle" />
    <Box container gutter>
      <Article pt={[4, 4]} pb={[4, 5]}>
        <h2>Personal tour operator with a trusted independent guide</h2>
        <p>
          <h3>Every where is your home</h3>
          Join us on this enlightening journey as we unravel the timeless
          allure and historical significance of these ancient lands. Our 
          passion is driven(payed) by the inner support of finding global
          travel intelligence. So, welcome to my country. You will experience 
          how human nature is gradually changing and who we are.
          We specialize in organizing local tour across Ethiopia, ensuring
          a safe, comfortable, and enjoyable journey. Our carefully designed 
          tour highlight remarkable historical sites, diverse wildlife, and 
          ecologically unique landscapes. Whether you are traveling on a
          budget or seeking a premium experience, whether you're traveling
          solo or with a group, and whether you're staying for a few days 
          or longer, we can customize the perfect adventure for you.
          No matter your interests, travel stayle, or level of adventure,
          Addis Tour Guide is here to make your Ethiopian journey truly
          memorable.
        </p>
        <h3>The traveller first</h3>
        <p> 
           Great experience & amazing hospitality !
        </p>
        {/* <a href="/tours" className="button">
          View All Tours
        </a> */}

        <Card p={4} my={[4, 5]}>
          <Box conatiner={0} textAlign="center">
            <h3>
              "I could fully trust Abenezer to take care of every detail of my
              trip"
            </h3>
            <p>Daniel Grant, February 2019</p>
            <a href="/tours" className="button">
              Read more reviews
            </a>
          </Box>
        </Card>

        <h3>Let's chat</h3>
        <p>
          If you would like to book a tour, or discuss how a tour can be
          tailored to your preferences, please get in touch!
        </p>
        <a href="/tours" className="button">
          Contact
        </a>
      </Article>
    </Box>
  </Layout>
);
