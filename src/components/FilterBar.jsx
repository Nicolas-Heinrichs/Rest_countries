import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FilterBar = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const arrowClickedStyle = "border-t-2 border-l-2";
  const arrowStyle = "border-r-2 border-b-2";

  const handleClickRegion = (event) => {
    let countries = props.countries.filter(
      (countrie) => countrie.region === event.target.textContent
    );

    props.setCountriesFilter(countries);
    handleClick();
  };

  return (
    <div className="ms-[5vw]  mt-10 flex flex-1 flex-col  items-start pe-[5vw] sm:mt-0 sm:items-end">
      <button
        onClick={handleClick}
        className="font-normal flex h-[4rem] w-[45vw] items-center justify-between rounded
        bg-White p-4
         text-base shadow
         focus:outline-none dark:bg-Dark-Blue-D-Elements sm:w-[25vw] "
      >
        <span className="font-medium">Filter by region</span>
        <div
          className={`arrow  h-2 w-2  rotate-45 ${
            clicked ? arrowClickedStyle : arrowStyle
          }`}
        ></div>
      </button>
      <ul
        className={` items-left z-10 mt-1 flex w-[45vw] cursor-pointer flex-col rounded bg-White shadow dark:bg-Dark-Blue-D-Elements sm:w-[25vw]
      ${!clicked ? "invisible" : ""}
      `}
      >
        {regions.map((region) => {
          return (
            <li
              key={uuidv4()}
              className="z-10 p-4 hover:bg-Very-Light-Gray-L-Bg dark:hover:bg-Dark-Gray-L-Input"
              onClick={handleClickRegion}
            >
              {region}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBar;
