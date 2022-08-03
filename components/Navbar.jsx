import {
  Box,
  Flex,
  Heading,
  Container,
  Text,
  Center,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import styles from "../styles/Nav.module.css";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = "xs";
  const { asPath } = useRouter();
  const navItems = [
    { name: "Home", label: "/" },
    { name: "Buy House", label: "/search?purpose=for-sale" },
    { name: "Rent House", label: "/search?purpose=for-rent" },
  ];

  // sidebar xs sm md screen
  const DrawerSidebar = () => {
    return (
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex p="2" alignItems="center">
            <Link href="/" passHref>
              <Heading
                className="pointer"
                size="md"
                bgGradient="linear(to left, #ec008c, #0070f3)"
                bgClip="text"
              >
                Houses
              </Heading>
            </Link>
            <Spacer />
            <Box>
              <button className="icon_button" onClick={onClose}>
                <AiOutlineClose />
              </button>
            </Box>
          </Flex>

          <hr />
          <DrawerBody>
            {navItems &&
              navItems.map((item, idx) => (
                <Link href={item.label} key={idx}>
                  <Flex
                    onClick={onClose}
                    margin="2"
                    style={
                      asPath === item.label
                        ? { borderRight: "1px solid #0070f3" }
                        : null
                    }
                  >
                    <Text
                      className={
                        asPath !== item.label
                          ? styles.navLink
                          : styles.activeNavLink
                      }
                      fontSize="md"
                    >
                      {item.name}
                    </Text>
                  </Flex>
                </Link>
              ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };

  return (
    <nav className={styles.nav}>
      <Container maxW="1125px">
        <Flex style={{ alignItems: "center" }}>
          <Box>
            <Link href="/">
              <Heading
                className="pointer"
                size="lg"
                bgGradient="linear(to left, #ec008c, #0070f3)"
                bgClip="text"
              >
                Houses
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Flex className="md_flex" style={{ display: "none" }}>
            {navItems &&
              navItems.map((item, idx) => (
                <Link href={item.label} key={idx}>
                  <Center mr="4">
                    <Text
                      className={
                        asPath !== item.label
                          ? styles.navLink
                          : styles.activeNavLink
                      }
                      fontSize="lg"
                    >
                      {item.name}
                    </Text>
                  </Center>
                </Link>
              ))}
          </Flex>
          <Box className="md_hidden">
            <button className="icon_button" onClick={onOpen}>
              <AiOutlineMenuFold />
            </button>
            {DrawerSidebar()}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
