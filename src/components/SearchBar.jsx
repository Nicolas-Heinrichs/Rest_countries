import { useState } from "react";

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    let countries = [];
    props.countries.map((countrie) => {
      let name = countrie.name.common.toLowerCase();
      name.includes(event.target.value) && countries.push(countrie);
    });

    props.setCountriesFilter(countries);
  };
  return (
    <div className="relative flex-1 pe-[5vw] ps-[5vw]">
      <span
        className="absolute z-10 flex h-[4rem]  items-center pl-5 text-Dark-Gray-L-Input dark:text-White "
        id="basic-addon2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <input
        type="text"
        className="relative block h-[4rem] 
        w-full
        rounded
            py-[1rem] pl-16 text-base font-medium 
            shadow  outline-2 outline-Dark-Gray-L-Input  
             transition-all duration-100 ease-in-out focus:outline 
             dark:bg-Dark-Blue-D-Elements dark:outline-Very-Light-Gray-L-Bg sm:w-[40vw] "
        placeholder="Search for a country..."
        aria-label="Search"
        aria-describedby="button-addon2"
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  );
};

export default SearchBar;
