import { Banner } from "../components/index";
import { getData } from "../utils/fetchData";
import Masonry from "react-masonry-css";
import House from "../components/House";
export default function Home({ housesForSale, housesForRent }) {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
  };
  return (
    <>
      <Banner title="Rent the house that suits you." />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {housesForSale &&
          housesForSale.map((houseForSale) => (
            <House key={houseForSale.id} houseDetails={houseForSale} />
          ))}
      </Masonry>
      <div className="line" />
      <Banner title="Buy the house that suits you." />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {housesForRent &&
          housesForRent.map((houseForRent) => (
            <House key={houseForRent.id} houseDetails={houseForRent} />
          ))}
      </Masonry>
    </>
  );
}

export async function getStaticProps() {
  const housesForSale = await getData(
    `/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10`
  );
  const housesForRent = await getData(
    `/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10`
  );
  return {
    props: {
      housesForSale: housesForSale?.hits,
      housesForRent: housesForRent?.hits,
    },
  };
}
