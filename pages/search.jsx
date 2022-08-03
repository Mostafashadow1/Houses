import React, { useState } from "react";
import { useRouter } from "next/router";
import { Text, Center, Button } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { SearchFilters } from "../components/index";
import { getData } from "../utils/fetchData";
import Masonry from "react-masonry-css";
import House from "../components/House";
export default function Search({ houses }) {
  const [searchFilters, setSearchFilters] = useState(false);
  // toggle Search Filters
  const toggleSearchFilters = () => {
    setSearchFilters(!searchFilters);
  };
  const router = useRouter();
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
  };
  return (
    <>
      <Center cursor="pointer" fontSize="md" mt="20">
        <Button className="mainButton" gap="2" onClick={toggleSearchFilters}>
          <Text>Search Houses By Filters</Text>
          <BsFilter style={{ marginTop: "2px" }} />
        </Button>
      </Center>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" fontWeight="bold" my="10px">
        Houses {router.query.purpose}
      </Text>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {houses &&
          houses.map((item) => <House key={item.id} houseDetails={item} />)}
      </Masonry>
      {houses?.length === 0 && (
        <Center>
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Center>
      )}
    </>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";
  const data = await getData(
    `/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  return {
    props: {
      houses: data?.hits,
    },
  };
}
