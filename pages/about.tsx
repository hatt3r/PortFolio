import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function about() {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(2000, 7, 19);

    var currentYear = today.getFullYear();
    var birthYear = birthDate.getFullYear();
    var ageInYears = currentYear - birthYear;

    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() == today.getMonth() &&
        birthDate.getDate() > today.getDate())
    ) {
      setAge(ageInYears - 1);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Serene Mathew | About</title>
        <meta
          name="description"
          content="
          I am a Machine Learning and Front End Enthusiast from India. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/../public/favicon.ico" />
      </Head>
      <main className="about">
        {/* <div className="about-illus">
          <Image
            src="/illustrations/1.png"
            alt="illustration"
            width={200}
            height={200}
            
          />
        </div> */}
        <div className="page__lines"></div>
        <motion.div
          className="about-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            style={{
              overflow: "hidden",
            }}
            className="about-left__title"
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              About
            </motion.h2>
          </div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__text"
          >
            I am a passionate Cybersecurity Researcher & Analyst and Software Developer with a deep interest in securing digital landscapes and building innovative software solutions.
            My expertise spans threat analysis, penetration testing, vulnerability assessments, and developing secure applications. 
            With a strong foundation in both cybersecurity and software development, I strive to create robust, efficient, and resilient systems that protect users and organizations from cyber threats. 
            I am always eager to learn and stay ahead in the ever-evolving world of technology.
            Let's connect and explore ways to make the digital world safer and more efficient! I also like to listen to{" "}
            <a
              href="https://open.spotify.com/playlist/1sJibF1KPBAByKag7jS3vE?si=761e3c68adc74849"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              music
            </a>{" "}
            and in my spare time I often{" "}
            <a
              href="https://www.goodreads.com/user/show/113329742-serene"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              read
            </a>{" "}
            about development or just to quench my reading thirst. I am a
            fanatic when it come to Formula 1.
          </motion.p>
          <div className="about-left__langs">
            <motion.h3 variants={item}>LANGUAGES</motion.h3>
            <motion.li variants={item}>
              <span>English</span>
              <span>Native</span>
            </motion.li>
            <motion.li variants={item}>
              <span>Hindi</span>
              <span>Fluent</span>
            </motion.li>
          </div>
          <div className="about-left__links">
            <motion.a
              variants={item}
              href="https://drive.google.com/file/d/1vbaA8qB4DGPxn09OtuJJHm0SA5ppV82g/view?usp=sharing"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>{" "}
              Resume
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="about-right"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: "25%", opacity: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="about-right__image">
            <Image
              src="/images/Serenemathew.jpg"
              alt="Serene Mathew"
              width={3024}
              height={4032}
            />
          </div>
        </motion.div>
      </main>
    </>
  );
}
