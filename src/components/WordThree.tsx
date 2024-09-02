import image4 from "../assets/MyProj/login.webp";
import image1 from "../assets/MyProj/last-cv.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import { Link } from "react-router-dom";
import Timer from "../assets/MyProj/timer-sypescript.webp";

const WorkThree = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/**text */}
            <a href="https://amirfattahi.ir/last-cv/index.html">
              {" "}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/**over lay */}
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={image1}
                  loading="lazy"
                  alt="last cv"
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/**pretty */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50   ">
                  <span className="text-gradient">Bootstrap</span>{" "}
                </div>
                {/**title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    This Project Made by Bootstrap
                  </span>
                </div>
              </div>
            </a>
            {/**image */}

            <a href="https://login-otp-rust.vercel.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/**over lay */}
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>

                <img
                  src={image4}
                  loading="lazy"
                  alt="last cv"
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/**pretty */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50   ">
                  <span className="text-gradient">LOGIN ➡ (TURN VPN ON )</span>{" "}
                </div>
                {/**title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    NEXTJS-CONTEXT API-RESTFUL API
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-10"
          >
            {/**image */}

            <Link to="/timer-typescript">
              {" "}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/**over lay */}
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={Timer}
                  loading="lazy"
                  alt="last cv"
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/**pretty */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50   ">
                  <span className="text-gradient">"Timer"</span>{" "}
                </div>
                {/**title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">React Context</span>
                </div>
              </div>
            </Link>

            <a href="https://login-otp-rust.vercel.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/**over lay */}
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>

                <img
                  src={image4}
                  loading="lazy"
                  alt="last cv"
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/**pretty */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50   ">
                  <span className="text-gradient">LOGIN ➡ (TURN VPN ON )</span>{" "}
                </div>
                {/**title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    NEXTJS-CONTEXT API-RESTFUL API
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkThree;
