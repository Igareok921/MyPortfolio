import React from "react";
import MyImage from "../assets/MyImage.png";
import Button from "../components/Button";
import Langbar from "./Langbar";
import Resume from "../assets/Resume.pdf";


function Home() {
  return (
    <section
      
      id="home"
      className="w-full  flex px-[60px] lg5:px-[30px] lg6:px-[15px] mb-32   "
    >
      <div>
        <div className=" mb-8  mt-32 flex lg4:flex-col  lg4:items-center   ">
          {/* 👌⬇️⬇️⬇️ Headings ⬇️⬇️⬇️👌 */}
          <div className="   flex flex-col   w-full h-full lg4:justify-center lg4:items-center   ">
            <h1 className=" text-[6rem] font-black lg2:text-[4rem]  lg3:text-[3rem] lg4:text-[2.5rem] lg4:text-center lg5:text-[2rem] lg6:text-[1.7rem] lg7:text-[1.4rem] ">
              Are You Looking <br />
              <span className="text-orange-100 ">
                For A <br className=" hidden lg7:inline" />
                Front-End Developer ?
              </span>
            </h1>
            <h3 className=" text-[3.5rem] font-semibold  lg2:text-[3rem] lg3:text-[2rem] lg4:text-[1.7rem] lg5:text-[1.4rem] lg6:text-[1.2rem] lg7:text-[1rem] ">
              ~ I am here to help you ~
            </h3>
            <p className="text-[1.3rem] my-8 w-[75%] lg3:text-[1.1rem] lg3:w-[70%] lg4:text-[1rem] lg4:text-center lg4:w-[80%] lg5:w-[100%] lg5:my-[1rem] lg6:text-[0.9rem] lg7:text-[0.8rem]">
              My name is Igor Sirghii. I am a Front-End Developer and UI/UX
              Designer living in Ireland. I can build something meaningful,
              using my valuable skills in desing and coding. My goal is to help
              clients to create digital products that meet their needs and
              exceed the expectations.
            </p>
            <Button text="DOWNLOAD RESUME" color="blue" padding={12} download={Resume} />
          </div>
          {/* 👌⬇️⬇️⬇️ My Photo ⬇️⬇️⬇️👌 */}
          <div className=" w-[400px] h-[350px] flex justify-end lg4:w-[300px] lg4:mt-4 ">
            <img src={MyImage} alt="profile-img" />
          </div>
        </div>
        <Langbar />
      </div>
    </section>
  );
}

export default Home;
