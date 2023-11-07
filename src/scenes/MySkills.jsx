import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            A Frontend Developer with expertise in HTML, CSS, JavaScript, React,
            and proficiency in graphic design using tools like Photoshop and
            Illustrator. My work seamlessly blends technical and design skills
            to deliver outstanding digital experiences. Explore my portfolio to
            see my work.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-yellow before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE 相關經驗 */}
        <motion.div
          className="md:w-1/3 mt-10 mb-16"
          initial="hidden"
          whileInView="visible"
          whileHover={{ opacity: 1, scale: 1.05 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 0.8, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-deep-blue absolute right-0 top-0 z-[-1] -rotate-12" />
          </div>
          <p className="mt-6">
            With experience at a multinational architectural design firm, I
            excel in time management, ensuring on-time delivery while meeting
            client expectations with quality results, whether individually or
            collaboratively.
          </p>
        </motion.div>

        {/* 發展創新Innovative */}
        <motion.div
          className="md:w-1/3 mt-10 "
          initial="hidden"
          whileInView="visible"
          whileHover={{ opacity: 1, scale: 1.05 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 0.8, y: 0 },
          }}
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-deep-grey absolute right-0 top-0 z-[-1] -rotate-12" />
          </div>
          <p className="mt-6">
            Incorporates inventive thinking and problem-solving skills to
            consistently devise novel solutions.I would like to howcasing the
            ability to excel in fostering creativity and resolving complex
            challenges.
          </p>
        </motion.div>
        {/* 願景imagenative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          whileHover={{ opacity: 1, scale: 1.05 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 0.8, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-dark-grey absolute right-0 top-0 z-[-1] -rotate-12" />
          </div>
          <p className="mt-6">
            Utilizing architectural design background to approach front-end
            engineering imaginatively, creating innovative user interfaces that
            blend aesthetics with functionality. Thrives in unconventional
            problem-solving for distinctive web solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
