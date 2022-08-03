import React from "react";
import { Box, Text } from "@chakra-ui/react";
import styles from "../styles/Banner.module.css";
const Banner = ({ title }) => {
  return (
    <Box
      className={styles.bannerContainer}
      gap="4"
      flexWrap="wrap"
      alignItems="center"
      mt="10vh"
      mb="10"
    >
      <Box>
        <Text
          className={styles.bannerText}
          fontSize="2xl"
          fontWeight="600"
          letterSpacing="1px"
          color="white"
          textAlign="center"
        >
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default Banner;
