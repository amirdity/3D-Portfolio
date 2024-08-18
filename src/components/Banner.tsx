import avatar from "../assets/avatar/avatar.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import linkdein from "../assets/social/linkedin.svg";
import telegram from "../assets/social/telegram.png";
import gmail from "../assets/social/gmail.png";
import instagram from "../assets/social/instagram.png";
import github from "../assets/social/github.png";
const Banner = () => {
  return (
    <section
      className="flex justify-center items-center mx-auto flex-col"
      id="home"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto">
        <div className="flex flex-col justify-center ">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
          >
           
              <div >
                AMIR
                <span>

                  FA<span className="text-accent">TT</span>AHI
                </span>
              </div>
           

          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
          >
            <span className="mr-4 text-white">I'm a</span>{" "}
            <TypeAnimation
              sequence={[
                "programmer",
                2000,
                "Next Developer",
                3000,
                "React developer",
                3000,
              ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg mx-auto lg:mx-0"
          >
            {" "}
            Passionate creative developer seeking exciting projects and talented
            individuals to work with. Let's create something amazing together!
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto   "
          >
            { }
            <motion.a
              href="https://www.linkedin.com/in/amir-fattahi77/"
              target="_blank"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="mx-3"
            >
              <img
                src={linkdein}
                alt="linkdein"
                className="h-10 w-10 rounded-lg"
              />
            </motion.a>
            <motion.a
              href="https://t.me/Amirfattahi77"
              target="_blank"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="mx-3"
            >
              <img src={telegram} alt="telegram" className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="mailto:amirfattahi22@gmail.com?subject=Your%20Subject&body=Your%20Message"
              target="_blank"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="mx-3"
            >
              <img src={gmail} alt="gmail" className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/amirfattahi77?igsh=MzNlNGNkZWQ4Mg=="
              target="_blank"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="mx-3"
            >
              <img src={instagram} alt="instagram" className="h-10 w-10" />
            </motion.a>
            <motion.a
              href="https://github.com/amirdity"
              target="_blank"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="mx-3"
            >
              <img src={github} alt="github" className="h-10 w-10" />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="md:justify-center md:items-center md:mx-auto sm:justify-center sm:items-center sm:mx-auto
             lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
        >
          <img src={avatar} alt="amir fattahi" className="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
