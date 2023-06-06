import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./Header";
const CountrieDetails = () => {
  const location = useLocation();
  const countrie = location.state.data;
  let { name, currencies, languages, borders } = countrie;

  if (name.nativeName === undefined) {
    name = name.common;
  } else {
    name = Object.entries(name.nativeName).map(([, value]) => [value.common]);
  }

  if (currencies === undefined) {
    currencies = "";
  } else {
    currencies = Object.entries(currencies).map(([, value]) => [value.name]);
  }

  if (languages === undefined) {
    languages = "";
  } else {
    languages = Object.entries(languages).map(([, value]) => [value]);
  }

  return (
    <div className="w-sceen h-screen bg-Very-Light-Gray-L-Bg text-Very-Dark-Blue-L-Text dark:bg-Very-Dark-Blue-D-Bg dark:text-White">
      <Header />

      <button
        className="font-normal shadow-current my-[8vh] ms-[5vw] w-36  rounded 
        bg-White p-3 text-base shadow-xl focus:outline-none dark:bg-Dark-Blue-D-Elements "
      >
        <Link to={"/"} className="flex justify-evenly ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ms-4 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="me-4 font-medium">Back</span>
        </Link>
      </button>

      <div className="flex flex-col  bg-Very-Light-Gray-L-Bg dark:bg-Very-Dark-Blue-D-Bg sm:flex-row">
        <div className="ps-[5vw]">
          <img
            alt={`flag of ${countrie.name.common}`}
            className="  object-contain object-top pe-[5vw] sm:h-[55vh] sm:w-[45vw]"
            src={`${countrie.flags.svg}`}
          />
        </div>

        <div className="w-full pr-[5vw] ps-[5vw] pt-8 sm:w-1/2">
          <div className="text-3xl font-bold">{countrie.name.common}</div>
          <div className="flex w-full flex-col justify-between sm:flex-row">
            <div>
              <ul className="mt-10">
                <li className="my-1">
                  <span className="font-medium">Native Name: </span>
                  {Array.isArray(name) ? (
                    name.map((key, index) => {
                      return (
                        <span key={index} className="font-light">
                          {key} {index !== name.length - 1 && "/"}
                        </span>
                      );
                    })
                  ) : (
                    <span className="font-light">{name}</span>
                  )}
                </li>
                <li className="my-1">
                  <span className="font-medium">Population: </span>
                  <span className="font-light">
                    {countrie.population.toLocaleString("en-US")}
                  </span>
                </li>
                <li className="my-1">
                  <span className="font-medium">Region: </span>
                  <span className="font-light">{countrie.region}</span>
                </li>
                <li className="my-1">
                  <span className="font-medium">SubRegion: </span>
                  <span className="font-light">{countrie.subregion}</span>
                </li>
                <li className="my-1">
                  <span className="font-medium">Capital: </span>
                  <span className="font-light">{countrie.capital}</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mt-10">
                <li className="my-1">
                  <span className="font-medium">Top Level Domain: </span>
                  <span className="font-light">{countrie.tld}</span>
                </li>
                <li className="my-1">
                  <span className="font-medium">Currencies: </span>
                  {Array.isArray(currencies) ? (
                    currencies.map((key, index) => {
                      return (
                        <span key={index} className="font-light">
                          {key} {index !== currencies.length - 1 && "/"}
                        </span>
                      );
                    })
                  ) : (
                    <span className="font-light">{currencies}</span>
                  )}
                </li>
                <li className="my-1">
                  <span className="font-medium">Languages: </span>
                  {Array.isArray(languages) ? (
                    languages.map((key, index) => {
                      return (
                        <span key={index} className="font-light">
                          {key} {index !== languages.length - 1 && "/"}
                        </span>
                      );
                    })
                  ) : (
                    <span className="font-light">{languages}</span>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col pt-[5vh] font-medium sm:flex-row ">
            <span className=" self-start sm:self-center ">
              Border Countries:
            </span>
            <div>
              {Array.isArray(borders) ? (
                borders.map((key, index) => {
                  return (
                    <button
                      key={index}
                      className="font-normal shadow-current text-medium  shadow-l  my-1 mr-1 w-20 rounded
                       bg-White px-6 py-1 text-Dark-Gray-L-Input focus:outline-none dark:bg-Dark-Blue-D-Elements sm:m-1"
                    >
                      {key}
                    </button>
                  );
                })
              ) : (
                <button
                  className="font-normal shadow-current  shadow-l 
                  rounded bg-White p-3 text-base focus:outline-none dark:bg-Dark-Blue-D-Elements "
                >
                  {borders}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrieDetails;
