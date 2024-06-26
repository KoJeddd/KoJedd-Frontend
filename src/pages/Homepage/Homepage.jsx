import { Link } from "react-router-dom";
import Filter from "../../components/functionalComponents/Filter";
import Search from "../../components/functionalComponents/Search";
import Sort from "../../components/functionalComponents/Sort";
import HomepageCardsGrid from "../../components/Cards/HomepageCards";
import { GuestNavbar } from "../../components/Navbar";

function Homepage() {
  return (
    <>
      <GuestNavbar />
      <div className="bg-black px-20 py-32 text-white ">
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-thin capitalize">
            NO 1 collaboration enhancer
          </h1>
          <p className="text-lg text-gray-400">
            we make collaboration easier and faster
          </p>
        </div>

        <div className="my-24 text-center">
          <Link
            className="new border-b-4 px-2 pb-3 text-xl font-bold text-[#FFDF00]"
            to={"/"}
          >
            Brands
          </Link>
          <Link className="px-2 text-xl" to={"/"}>
            Individuals
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <Filter />

          <Sort />
        </div>

        <div>
          <HomepageCardsGrid />
        </div>
      </div>
    </>
  );
}

export default Homepage;
