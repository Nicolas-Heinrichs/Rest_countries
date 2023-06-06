import UsedarkMode from "../hooks/UseDarkMode";

const Header = () => {
  const [colorTheme, setTheme] = UsedarkMode();

  const ligthPathD =
    "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z";
  const darkPathD =
    "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z";

  const switchDarkLightMode = (pathD, name) => {
    return (
      <div
        className="flex cursor-pointer items-center pe-[5vw] "
        onClick={() => setTheme(colorTheme)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 "
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={pathD} />
        </svg>
        <span className="ml-1 text-base font-medium sm:text-2xl ">
          {name} Mode
        </span>
      </div>
    );
  };

  return (
    <div
      className={`flex h-20 flex-row justify-between  bg-White ps-[5vw] shadow dark:bg-Dark-Blue-D-Elements`}
    >
      <div className="flex items-center justify-center">
        <h1 className=" text-base  font-medium  sm:text-2xl ">
          Where in the world?
        </h1>
      </div>
      {colorTheme === "dark"
        ? switchDarkLightMode(darkPathD, "Dark")
        : switchDarkLightMode(ligthPathD, "Light")}
    </div>
  );
};

export default Header;
