import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const projectsData = [
  {
    title: "Project 1",
    subtitle:
      "This is a wedding invitation website I created for my first client. It includes user-friendly features and responsive design for various device sizes.",
    url: "https://phmarriage.netlify.app/", //URL
  },
  {
    title: "Project 2",
    subtitle: "This is a grade sorting web.",
    url: "https://gradesorting.netlify.app/", //URL
  },
];

const Project = ({ title, subtitle, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition-500 bg-silver z-30 flex flex-col justify-center items-center text-center p-16 text-dee-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {/*  link to project */}
          <button className="bg-gold hover:bg-yellow text-white font-semibold p-2 rounded-md mt-5">
            Visit Project
          </button>
        </a>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className=" pt-48 pb-48">
      {/*Heading開頭*/}{" "}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          A Frontend Developer with expertise in HTML, CSS, JavaScript, React,
          and proficiency in graphic design using tools like Photoshop and
          Illustrator. My work seamlessly blends technical and design skills to
          deliver outstanding digital experiences. Explore my portfolio to see
          my work.
        </p>
      </motion.div>
      {/*PROJECTS 作品區*/}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/*第一列*/}
          <div className="flex justify-center text-center items-center p-10 bg-gold max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            GORGEOUS USER INTERFACE
          </div>

          <Project
            title="Project 1"
            subtitle="This is a wedding invitation website I created for my first client. It includes user-friendly features and responsive design for various device sizes."
            url="https://phmarriage.netlify.app/"
          />
          <Project
            title="Project 2"
            subtitle="This is a GPA grade calculator website created using JavaScript and CSS. It is a practice project for a tutorial."
            url="https://gradesorting.netlify.app/"
          />

          {/*第二列*/}
          <Project title="Project 3" subtitle="We are working on it." />
          <div className="flex justify-center text-center items-center p-10 bg-deep-grey max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
          <Project title="Project 4" subtitle="We are working on it." />

          {/*第三列*/}
          <div className="flex justify-center text-center items-center p-10 bg-grey max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
          <Project title="Project 5" subtitle="We are working on it." />

          <div className="flex justify-center text-center items-center p-10 bg-dark-grey max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
