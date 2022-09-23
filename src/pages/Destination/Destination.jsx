import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { destinations } from "../../data/data";

const Destination = () => {
  const [activeTab, setActiveTab] = useState(0);

  // const { name } = useParams();
  const activeTabLink =
    "font-Barlow_C text-base py-2 mx-2 uppercase text-white tracking-[0.16875rem]  border-b-2 border-white";
  const normalTabLink =
    "font-Barlow_C text-base tracking-[0.16875rem] py-2 mx-2  text-[#D0D6F9] transition-all duration-300 ease-in hover:border-b-2 uppercase hover:border-white/50";

  return (
    <main className=" bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat bg-cover bg-center w-full h-screen">
      <Header />
      <div className="container text mx-auto my-0  w-4/5">
        <h5 className="font-Barlow_C  uppercase text-base leading-[1.2rem] tracking-[0.16875rem]  lg:text-[1.75rem] lg:leading-8 lg:tracking-[4.75px] text-white py-4">
          <span className="font-bold mr-7 opacity-25">01</span>
          Pick your destination
        </h5>

        <div className="flex  flex-col gap-20 items-center lg:flex-row lg:justify-around">
          <div className=" flex-1  ">
            <img
              src={destinations[activeTab].images.webp}
              alt={destinations[activeTab].name}
              width="445px"
              height="445px"
              className="object-cover  p-12 "
            />
          </div>

          <div className="flex-1 max-w-[27.8em]">
            <div className="tabs">
              {destinations.map(({ name }, id) => {
                return (
                  <Link
                    to="/destination"
                    key={id}
                    className={id === activeTab ? activeTabLink : normalTabLink}
                    // Change the active tab on click.
                    onClick={() => setActiveTab(id)}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
            <div className=" mt-[2.375rem]">
              <h2 className="font-Bellafair uppercase text-white lg:text-[6.25rem] lg:leading-[7.1625rem]">
                {destinations[activeTab].name}
              </h2>

              <p
                className="font-Barlow mt-[0.875rem] mb-[1.625rem] tracking-normal text-center lg:text-left text-[0.9375rem]
          leading-[1.5625rem] lg:text-lg lg:leading-8 text-[#D0D6f9]"
              >
                {destinations[activeTab].description}
              </p>
              <hr className="my-[1.75rem]" />
              <div className="flex gap-20">
                <div>
                  <h5 className="font-Barlow_C uppercase text-sm leading-4 tracking-[0.15rem] text-[#D0D6F9]">
                    AVG. DISTANCE
                  </h5>
                  <h6 className="font-Bellafair uppercase lg:text-[1.75rem]  text-white ">
                    {destinations[activeTab].distance}
                  </h6>
                </div>

                <div>
                  <h5 className="font-Barlow_C uppercase text-sm leading-4 tracking-[0.15rem] text-[#D0D6F9]">
                    Est. travel time
                  </h5>
                  <h6 className="font-Bellafair uppercase lg:text-[1.75rem]  text-white ">
                    {destinations[activeTab].travel}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
