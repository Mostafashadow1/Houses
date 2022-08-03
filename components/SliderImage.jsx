import React from "react";
import { useContext } from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from "react-icons/ri";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <button
        className="icon_button md_block"
        onClick={() => scrollPrev()}
        style={{ display: "none" }}
      >
        <RiArrowLeftCircleLine fontSize="30px" />
      </button>
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <button
        className="icon_button md_block"
        onClick={() => scrollNext()}
        style={{ display: "none " }}
      >
        <RiArrowRightCircleLine fontSize="33px" />
      </button>
    </Flex>
  );
};
const SliderImage = ({ data }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data &&
        data.map((item) => (
          <Box w="1000px" height="400px" key={item.id} p="1" itemId={item.id}>
            <Image
              alt="image"
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              layout="responsive"
              objectFit="cover"
              width="100%"
              height="50px"
            />
          </Box>
        ))}
    </ScrollMenu>
  );
};

export default SliderImage;
