import eCommerceImg from "../assets/imgbook.png";
import SinglePageApp from "../assets/imgfitness.png";
import reactImg from "../assets/react.png";
import cssImg from "../assets/css.png";
import Tailwind from "../assets/tailwindcss.png";
import TypescriptImg from "../assets/typescript.png";

const projectsData = [
  {
    id: 1,
    title: "eCommerce",
    image: eCommerceImg,
    description:
      "I'm excited to announce that I've built an e-commerce website for books using ReactJS, CSS, React Router Dom . The website includes a search feature to help users quickly find the books they want, as well as a well-designed shopping cart that allows users to add multiple books with varying quantities. The shopping cart also calculates subtotals and total costs, and users can easily remove items or clear the entire cart. The website takes inspiration from popular e-commerce websites such as Amazon and some websites I find in Google, and I'm proud of how it turned out.",
    programLanguage: [reactImg, cssImg],
    demoLink: "https://bookpolis.netlify.app",
    sourceCodeLink: "https://github.com/Igareok921/bookpolis",
  },
  {
    id: 2,
    title: "Single Page App",
    image: SinglePageApp,
    description:
      "This website was built using ReactJS, Tailwind, and Typescript, as well as additional libraries such as anchorLink for smooth scrolling, framer motion for animations, and SwiperJS for enhanced user experience. The form submission feature was implemented using FormSubmit. In addition, the logo and hero section were designed in Figma. Overall, this single page app is optimized for fitness and provides a sleek and intuitive user interface.",
    programLanguage: [reactImg, Tailwind, TypescriptImg],
    demoLink: "https://t-onefitness.netlify.app",
    sourceCodeLink: "https://github.com/Igareok921/TOne",
  },
];

export default projectsData;
