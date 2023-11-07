import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative top-[60px] rounded-md max-w-[480px] h-[350px] flex flex-col justify-end p-8 mt-48 before:absolute before:top-[-120px] before:-ml-[150px] before:left-1/2`;
  return (
    <section id="testimonials" className="pt-16 pb-16">
      {/*Heading 標籤*/}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-gold">
          TESTMONIALS
        </p>
        <LineGradient width="max-auto w-2/4" />
        <p className="mt-10">
          Here is about some recent customer reviews that I've received.
        </p>
      </motion.div>

      {/*Testmonials 客戶意見*/}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-deep-blue ${testimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-md text-center ">
            Thank you so much for efficiently helping us create our wedding
            invitation website. The communication throughout the process was not
            only efficient but also perfectly executed our requirements.
          </p>
        </motion.div>
        <motion.div
          className={`bg-deep-blue ${testimonialStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.6 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-md text-center">
            There was consistent and excellent communication, and the
            deliverables were always on time. You were patient and provided
            accurate answers to our questions. Thank you for your outstanding
            service.
          </p>
        </motion.div>
        <motion.div
          className={`bg-deep-blue ${testimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.4 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-md text-center">
            An exceptional business partner who helped me tackle potential
            challenges in my business. Looking forward to the opportunity to
            collaborate again in the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
