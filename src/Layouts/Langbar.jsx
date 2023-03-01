import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Typescript from "../assets/typescript.png";
import React from "../assets/react.png";

function Langbar() {
  return (
    <>
      <div className="lg4:hidden  flex justify-between items-center px-[30px] ">
        <img src={Html} alt="html-img" className=" w-[100px]" />
        <img src={Css} alt="css-img" className=" w-[100px]" />
        <img src={JavaScript} alt="javascript-img" className=" w-[120px]" />
        <img src={Typescript} alt="typescript-img" className=" w-[90px]" />
        <img src={React} alt="react-img" className=" w-[100px]" />
      </div>
    </>
  );
}

export default Langbar;
