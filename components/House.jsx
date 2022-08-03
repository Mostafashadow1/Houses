import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscVerified } from "react-icons/vsc";
import { TbBed } from "react-icons/tb";
import { BsGrid3X2Gap } from "react-icons/bs";
import { MdOutlineBathtub } from "react-icons/md";
import millify from "millify";
import DefaultHouse from "../images/default-house.jpg";
const House = ({ houseDetails }) => {
  return (
    <Link href={`/house/${houseDetails.externalID}`}>
      <Box
        style={{
          backgroundColor: "var(--mainBg)",
          cursor: "pointer",
        }}
      >
        <Box>
          <Image
            width="100%"
            height="60px"
            layout="responsive"
            objectFit="cover"
            src={
              houseDetails?.coverPhoto?.url
                ? houseDetails?.coverPhoto?.url
                : DefaultHouse
            }
            alt="image"
          />
        </Box>
        <Box border="1px solid var(--line)" p="1">
          <Flex
            py="2"
            px="1"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar size="sm" src={houseDetails?.agency?.logo?.url} />
            <Box>
              <Flex alignItems="center">
                <Box paddingRight="1" color="blue.400">
                  {houseDetails?.isVerified && <VscVerified />}
                </Box>
                <Text fontWeight="600" fontSize="md">
                  AED {houseDetails?.price}
                  {houseDetails.rentFrequency &&
                    `/${houseDetails.rentFrequency}`}
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Stack
            spacing={5}
            direction="row"
            align="center"
            justifyContent="center"
          >
            <Button size="xs" colorScheme="twitter" color="white">
              <Center gap="1">
                <Text fontSize="xs"> {houseDetails?.rooms}</Text>
                <TbBed style={{ fontSize: 14 }} />
              </Center>
            </Button>
            <Button size="xs" colorScheme="twitter" color="white">
              <Center gap="1">
                <Text fontSize="xs">{houseDetails?.baths}</Text>
                <MdOutlineBathtub style={{ fontSize: 14 }} />
              </Center>
            </Button>
            <Button size="xs" colorScheme="twitter" color="white">
              <Center gap="1">
                <Text fontSize="xs">
                  {houseDetails.area && millify(houseDetails?.area)} sqft
                </Text>
                <BsGrid3X2Gap style={{ fontSize: 14 }} />
              </Center>
            </Button>
          </Stack>
          <Box my="4">
            <Text fontSize="xs" textAlign="center" color="var(--secondColor)">
              {houseDetails?.title?.length > 100
                ? houseDetails?.title.substring(0, 100) + "..."
                : houseDetails?.title + " ."}
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default House;
