import digikala from "../assets/MyProj/digikala.webp";
import image3 from "../assets/MyProj/jingil.webp";
import amirfood from "../assets/MyProj/amirfood.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import { Link } from "react-router-dom";
const Work = () => {
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
            <div className="lg:mb-[70px] ">
              <h2 className="h2 leading-tight text-accent">
                my latest <br /> work
              </h2>
              <p className="max-w-sm  mb-[85px]    "></p>
              <button className="btn btn-sm cursor-none">
                See all projects
              </button>
            </div>
            {/**image */}

            <Link to="/amir-food">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/**over lay */}
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>

                <img
                  src={amirfood}
                  loading="lazy"
                  alt="amirfood"
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/**pretty */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50   ">
                  <span className="text-gradient">AMIR FOOD</span>{" "}
                </div>
                {/**title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">MUI REDUX CONTEXT</span>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-10"
          >
            {/**image */}

            <a href="https://jingil-nextjs.vercel.app/">
              {" "}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/**over lay */}
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={image3}
                  loading="lazy"
                  alt="last cv"
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/**pretty */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50   ">
                  <span className="text-gradient">
                    "SHOP ➡ (TURN VPN ON )"
                  </span>{" "}
                </div>
                {/**title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">NEXTJS TAILWIND</span>
                </div>
              </div>
            </a>

            <Link to="/digikala">
              {" "}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/**over lay */}
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={digikala}
                  loading="lazy"
                  alt="digikala"
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/**pretty */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50   ">
                  <span className="text-gradient">"DIGIKALA"</span>{" "}
                </div>
                {/**title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    storybook styled-components
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
