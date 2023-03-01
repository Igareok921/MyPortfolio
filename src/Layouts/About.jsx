import React from "../assets/react.png";
import AboutMe from "../assets/AboutMe.svg";
import Story from "../components/story";
import Button from "../components/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../assets/Resume.pdf";

import { useState, useEffect } from "react";

function About() {
  // const [showFullDescription, setShowFullDescription] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const toggleDescription = () => setShowFullDescription(!showFullDescription);

  // const shortenedDescription =
  //   windowWidth < 650
  //     ? story.substring(0, 300) + "..."
  //     : story.substring(0, 1100) + "...";

  return (
    <article
      id="about"
      className="px-[30px]  w-full mb-24  lg6:px-[15px] lg4:mt-8"
    >
      <div
        className="w-full  flex flex-col  
shadow-2xl bg-blue-20 rounded-xl p-6"
      >
        <h3 className=" text-[4rem]  text-blue-100 lg4:text-[3rem] lg5:text-[2.5rem] lg6:text-[2rem] lg7:text-[1.5rem]">
          AboutMe
        </h3>
        <div className="w-[100%] flex gap-16 shadow-2xl bg-white-100 rounded-xl p-6 mt- lg6:mt-5 lg3:flex-col lg3:place-items-center lg3:gap-8 lg6:gap-4">
          <img
            src={AboutMe}
            alt="aboutme"
            className="w-[600px] h-[600px] lg4:w-[500px] lg4:h-[500px] lg5:w-[400px] lg5:h-[400px] lg6:[250px] lg6:h-[250px] lg7:w-[200px] lg7:h-[200px]"
          />
          <div className="flex flex-col gap-6">
            <Story />
            {/* <p className="text-[1.2rem]  lg6:text-[1rem] ">
              {showFullDescription ? story : shortenedDescription}
              {story.length > 200 && (
                <button
                  onClick={toggleDescription}
                  className="text-blue-100 underline ml-2"
                >
                  {showFullDescription ? "Show less" : "Show more"}
                </button>
              )}
            </p> */}
            <Button
              text="DOWNLOAD RESUME"
              color="blue"
              padding={12}
              download={Resume}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default About;
