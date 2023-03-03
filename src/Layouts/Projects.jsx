import { useState, useEffect } from "react";
import React from "../assets/react.png";
import Button from "../components/Button";
import ProjectsData from "../components/ProjectsData ";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Projects({ setSelectedPage }) {
  const [showFullDescription, setShowFullDescription] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDescription = (projectId) => {
    if (showFullDescription === projectId) {
      setShowFullDescription(null);
    } else {
      setShowFullDescription(projectId);
    }
  };

  return (
    <>
      <section
        id="projects"
        className="px-[30px] mb-32  mt-8
         w-full  lg6:px-[15px] lg4:mt-8"
      >
        <div className="w-full grid grid-cols-2 gap-[10rem] lg2:gap-[6rem] lg3:gap-[4rem] lg4:gap-[2rem] lg3:grid-cols-1">
          {ProjectsData.map((project) => {
            const {
              id,
              title,
              image,
              description,
              programLanguage,
              demoLink,
              sourceCodeLink,
            } = project;

            const isExpandedText = id === showFullDescription;

            const shortenedDescription =
              windowWidth < 490
                ? description.substring(0, 100) + "..."
                : description.substring(0, 200) + "...";

            return (
              <div
                key={id}
                className="w-full h-auto flex flex-col shadow-2xl bg-blue-20 rounded-xl p-6"
              >
                <h3 className="text-[2rem] mb-6 font-semibold text-blue-100 lg5:text-[1.7rem] lg6:text-[1.5rem] lg6:mb-3">
                  {title}
                </h3>
                <img src={image} alt="eCommerce-img" />

                <div className="w-[100%] shadow-2xl bg-white-100 rounded-xl p-6 mt-10 lg6:mt-5">
                  <p className="text-[1.2rem] lg6:text-[1rem]">
                    {isExpandedText ? description : shortenedDescription}
                    {description.length > 200 && (
                      <button
                        onClick={() => toggleDescription(id)}
                        className="text-blue-100 underline ml-2"
                      >
                        {isExpandedText ? "Show less" : "Show more"}
                      </button>
                    )}
                  </p>
                  <div className="flex justify-between place-items-center mt-6 lg5:flex-col lg5:place-items-stretch lg5:gap-4 lg6:mt-3">
                    <div className="flex gap-4">
                      {programLanguage.map((project) => {
                        return (
                          <img
                            key={project}
                            src={project}
                            alt="programing language"
                            className="w-[50px] h-[50px] lg7:w-[30px] lg7:h-[30px]"
                          />
                        );
                      })}
                    </div>
                    <div className="flex lg5:justify-between gap-4 lg7:flex-col lg7:gap-2">
                      <Button
                        text="Demo Link"
                        color="orange"
                        padding={8}
                        onClick={() => (window.location.href = demoLink)}
                      />
                      <Button
                        text="Source Code"
                        padding={8}
                        onClick={() => (window.location.href = sourceCodeLink)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
