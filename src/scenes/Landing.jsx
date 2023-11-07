import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/*portrait 照片*/}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-[-200px] before:-right-[-180px] before:rounded-t-[400px] before:w-full before:max-w-[340px] before:h-2/3 before:border-2 before:border-gold before:z-[-3]">
            <img
              alt="profile"
              className="hover:filter hover:saturate-150 hover:contrast-125 transition-transform duration-800 ease-in-out z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="../assets/profile-kai03.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-150 hover:contrast-125 transition-transform duration-800 ease-in-out z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="../assets/profile-kai03.png"
          />
        )}
      </div>
      {/*主欄位*/}
      <div className="z-30 basis-2/5 mt-12 md:mt-35 xs:mt-60 sm:z-1">
        {/*標題heading*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-semibold font-firasans z-4 text-center md:text-start xs:text-gold">
            Kai{" "}
            <span className="xs:relative xs:font-semibold z-5 xs:before:content-brush before:absolute before:-left-[330px] before:-top-[470px] before:z-18 before:scale-50 xs: text-white pointer-events-none">
              Tseng
            </span>
            {/* <span className="xs:relative xs:text-dark-grey  z-20  before:absolute before:scale-20">
              {" {...}"}
            </span> */}
          </p>
          <p className="mt-20 mb-10 text-sm md:text-start z-15 ">
            After many years in the field of architectural design, I've
            redirected my passion towards front-end development. I'm focusing on
            utilizing JavaScript and the React framework. My aim is to apply my
            design background to craft compelling web applications that deliver
            exceptional user experiences.
          </p>
        </motion.div>
        {/*Call to action*/}
        <motion.div
          className="flex mt-5 justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainyellow text-white rounded-sm py-3 px-7 font-semibold hover:bg-gold hover:text-white transition-500 z-26"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="bg-gradient-rainyellow rounded-r-sm py-0.5 pr-0.5 font-semibold"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-translucent hover:text-white transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10 z-34">
              Let's talk!
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons></SocialMediaIcons>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
