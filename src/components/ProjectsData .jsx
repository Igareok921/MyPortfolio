import eCommerceImg from "../assets/imgbook.png";
import SinglePageApp from "../assets/imgfitness.png";
import reactImg from "../assets/react.png";
import cssImg from "../assets/css.png";
import TypescriptImg from "../assets/typescript.png";

const projectsData = [
  {
    id: 1,
    title: "eCommerce",
    image: eCommerceImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, placeat! Numquam itaque similique aut quaerat, dicta ut quia excepturi est fugit necessitatibus neque consequatur blanditiis sunt omnis nam perspiciatis doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, placeat! Numquam itaque similique aut quaerat, dicta ut quia excepturi est fugit necessitatibus neque consequatur blanditiis sunt omnis nam perspiciatis doloribus!",
    programLanguage: [reactImg, cssImg],
    demoLink: "https://bookpolis.netlify.app",
    sourceCodeLink: "https://github.com/Igareok921/bookpolis",
  },
  {
    id: 2,
    title: "Single Page App",
    image: SinglePageApp,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, placeat! Numquam itaque similique aut quaerat, dicta ut quia excepturi est fugit necessitatibus neque consequatur blanditiis sunt omnis nam perspiciatis doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, placeat! Numquam itaque similique aut quaerat, dicta ut quia excepturi est fugit necessitatibus neque consequatur blanditiis sunt omnis nam perspiciatis doloribus!",
    programLanguage: [reactImg, cssImg, TypescriptImg],
    demoLink: "https://t-onefitness.netlify.app",
    sourceCodeLink: "https://github.com/Igareok921/TOne",
  },
];

export default projectsData;
