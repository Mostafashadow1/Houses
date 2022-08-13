import Image from "next/image";
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import notfound from "../images/notfound.png";
const Error = () => {
  return (
    <Box style={{ maxWidth: "1000px", margin: "60px auto" }}>
      <Box>
        <Image
          src={notfound}
          alt="image_notfound"
          style={{ width: "100%", height: "240px" }}
        />
      </Box>
      <Box>
        <Heading
          as="h4"
          size="md"
          style={{
            textAlign: "center",
            color: "var(--mainColor)",
            marginTop: "20px",
          }}
        >
          Sorry, this page is not available.
        </Heading>
        <Heading
          as="h4"
          size="md"
          style={{
            textAlign: "center",
            color: "var(--mainColor)",
            marginTop: "10px",
          }}
        >
          The link you followed may be broken , Go back to
        </Heading>
        <Link
          style={{
            textDecoration: "none",
            color: "#2196f3",
            textAlign: "center",
          }}
          href="/"
        >
          <Heading
            className="pointer"
            as="h4"
            size="lg"
            bgGradient="linear(to left, #ec008c, #0070f3)"
            bgClip="text"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            Houses
          </Heading>
        </Link>
      </Box>
    </Box>
  );
};

export default Error;
