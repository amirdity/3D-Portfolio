
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section
      className="section py-8 lg:py-24 lg:h-screen flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/**backgorund image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top hidden lg:flex "
          ></motion.div>
          {/**text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">about me</h2>
            <h3 className="h3 mb-4">Now I'm at Junior level </h3>
            <p className="mb-6">
              The top priority for me is to be part of a strong team that
              promotes effective cooperation and interaction for the progress of
              the group. Following that, I aim to gain experience and develop my
              individual skills. I have learned time management, work
              commitment, and teamwork interaction well. I am highly motivated
              to continue on this path, and I enjoy problem-solving and learning
              to work with new tools. Now I have enough time to become a
              full-time employed.
            </p>
            {/**states */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={9} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  months of
                  <br /> experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={10} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  projects
                  <br /> Completed
                </div>
              </div>
            </div>
          </motion.div>{" "}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
