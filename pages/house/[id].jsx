import React from "react";
import HTMLReactParser from "html-react-parser";
import {
  Box,
  Flex,
  Center,
  Text,
  Avatar,
  Icon,
  Button,
  Stack,
} from "@chakra-ui/react";
import millify from "millify";
import { SliderImage } from "../../components/index";
import { getData } from "../../utils/fetchData";
import { VscVerified } from "react-icons/vsc";
import { TbBed } from "react-icons/tb";
import { BsGrid3X2Gap } from "react-icons/bs";
import { MdOutlineBathtub } from "react-icons/md";

import styles from "../../styles/houseDetails.module.css";
export default function House({ houseDetails }) {
  return (
    <Box mt="5">
      <Box pt="5vh" px="3vw">
        <Text fontSize="2xl" fontWeight="600">
          House {houseDetails?.purpose}
        </Text>
      </Box>
      {houseDetails?.photos && <SliderImage data={houseDetails?.photos} />}
      <Box py="6" px="3vw">
        <Flex gap="3">
          <Avatar size="sm" src={houseDetails?.agency?.logo?.url} />
          <Center gap="1">
            {houseDetails?.isVerified && (
              <Icon as={VscVerified} color="blue.400" />
            )}
            <Text fontWeight="600" fontSize="md">
              AED {houseDetails?.price}{" "}
              {houseDetails?.rentFrequency && `/${houseDetails?.rentFrequency}`}
            </Text>
          </Center>
        </Flex>
        <Stack spacing={2} direction="row" my="5">
          <Button size="xs" colorScheme="twitter" color="white" cursor="text">
            <Center gap="1">
              <Text fontSize="xs"> {houseDetails?.rooms}</Text>
              <TbBed style={{ fontSize: 14 }} />
            </Center>
          </Button>
          <Button size="xs" colorScheme="twitter" color="white" cursor="text">
            <Center gap="1">
              <Text fontSize="xs">{houseDetails?.baths}</Text>
              <MdOutlineBathtub style={{ fontSize: 14 }} />
            </Center>
          </Button>
          <Button size="xs" colorScheme="twitter" color="white" cursor="text">
            <Center gap="1">
              <Text fontSize="xs">
                {houseDetails?.area && millify(houseDetails?.area)} sqft
              </Text>
              <BsGrid3X2Gap style={{ fontSize: 14 }} />
            </Center>
          </Button>
        </Stack>
        <Box>
          <Text fontSize="md" marginBottom="2" fontWeight="600">
            {houseDetails?.title}
          </Text>
        </Box>
        <Box className={styles.descriptionContainer}>
          <Text fontSize="sm" lineHeight="2" color="gray.600">
            {houseDetails?.description &&
              HTMLReactParser(houseDetails?.description)}
          </Text>
        </Box>

        <Box>
          {houseDetails?.amenities.length && (
            <Text fontSize="xl" my="2">
              Facilites :
            </Text>
          )}
          <Flex flexWrap="wrap" gap="2">
            {houseDetails?.amenities?.map((item) =>
              item?.amenities?.map((amenity, idx) => (
                <Button
                  key={idx}
                  size="sm"
                  colorScheme="telegram"
                  color="white"
                  cursor="text"
                >
                  {amenity?.text}
                </Button>
              ))
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const data = await getData(`/properties/detail?externalID=${id}`);
  return {
    props: {
      houseDetails: data,
    },
  };
}
