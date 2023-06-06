import { Link } from "react-router-dom";

const Countries = (props) => {
  let countries = props.countriesFilter;

  return (
    <div className=" mt-[20vh] grid gap-14 pe-[5vw] ps-[5vw] sm:mt-[5vh] sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {countries.map((countrie) => {
        return (
          <div
            className="h-full overflow-hidden rounded bg-White shadow dark:bg-Dark-Blue-D-Elements"
            key={countrie.cca2}
          >
            <Link to={`/${countrie.cca2}`} state={{ data: countrie }}>
              <img
                className="h-1/2 w-full cursor-pointer  object-cover shadow-sm"
                src={countrie.flags.svg}
                alt={`flag of ${countrie.name.common}`}
              />
            </Link>
            <div className="px-6 py-6">
              <div className="mb-[5%] text-xl font-bold">
                {countrie.name.common}
              </div>
              <p className="my-1">
                <span className="font-medium">Population: </span>
                <span className="font-light">
                  {countrie.population.toLocaleString("en-US")}
                </span>
              </p>
              <p className="my-1 ">
                <span className=" font-medium">Region: </span>
                <span className="font-light">{countrie.region}</span>
              </p>
              <p className="my-1 ">
                <span className=" font-medium">Capital: </span>
                <span className="font-light">{countrie.capital}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
