import React, { useState } from "react";
import { Flex, Select, Box } from "@chakra-ui/react";
import { filterSearchData, getFilterValues } from "../utils/filterSearchData";
import { useRouter } from "next/router";
const SearchFilters = () => {
  const router = useRouter();

  // search houses
  const searchHouses = (filterValues) => {
    const { pathname } = router;
    const { query } = router;
    // get all values select
    const optionsValues = getFilterValues(filterValues);
    optionsValues.forEach((optionValue) => {
      if (optionValue.value && filterValues?.[optionValue.name]) {
        query[optionValue.name] = optionValue.value;
      }
    });
    router.push({ pathname, query });
  };

  return (
    <Flex p="4" justifyContent="center" flexWrap="wrap" mt="5">
      {filterSearchData &&
        filterSearchData.map((filterSearch, idx) => (
          <Box key={idx}>
            <Select
              placeholder={filterSearch.placeholder}
              w="fit-content"
              p="2"
              onChange={(e) =>
                searchHouses({ [filterSearch.queryName]: e.target.value })
              }
            >
              {filterSearch?.items?.map((item, idx) => (
                <option value={item.value} key={idx}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
    </Flex>
  );
};

export default SearchFilters;
