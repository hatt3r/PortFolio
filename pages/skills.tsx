import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, skillsItem } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Skills() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Skill {
    url: string;
    name: string;
    color: string;
    colorRGB: string;
    isBgBlack?: boolean;
  }
  interface SkillSection {
    title: string;
    skills: Skill[];
  }

  interface Certifications {
    name: string;
    url: string;
  }
  const allSkills: SkillSection[] = [
    {
      title: "Programmming languages",
      skills: [
        {
          url: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
          name: "Java",
          color: "#4e7896",
          colorRGB: "78, 120, 150",
          isBgBlack: true,
        },
        {
          url: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
          name: "Python",
          color: "#fcdd78",
          colorRGB: "252, 221, 120",
        },
      ],
    },{title: "Cyber Security tools",
      skills: [
        {
          url:"https://www.svgrepo.com/show/452210/git.svg",
          name: "Wireshark",
          color: "#F05032",
          colorRGB: "240, 80, 50",
        }]
    },
    {
      title: "Web",
      skills: [
        {
          url: "https://www.svgrepo.com/show/452228/html-5.svg",
          name: "HTML",
          color: "#E34F26",
          colorRGB: "227, 79, 38",
        },
        {
          url: "https://www.svgrepo.com/show/452185/css-3.svg",
          name: "CSS",
          color: "#1572B6",
          colorRGB: "21, 114, 182",
        },
        // {
        //   url: "https://www.svgrepo.com/show/354310/sass.svg",
        //   name: "SASS",
        //   color: "#CC6699",
        //   colorRGB: "204, 102, 153",
        // },
        {
          url: "https://www.svgrepo.com/show/353925/javascript.svg",
          name: "JavaScript",
          color: "#F7DF1E",
          colorRGB: "247, 223, 30",
        },
        // {
        //   url: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
        //   name: "TypeScript",
        //   color: "#3178C6",
        //   colorRGB: "49, 120, 198",
        // },
        {
          url: "https://www.svgrepo.com/show/354259/react.svg",
          name: "React",
          color: "#61DAFB",
          colorRGB: "97, 218, 251",
        },
        
        // {
        //   url: "https://www.svgrepo.com/show/374109/svelte.svg",
        //   name: "Svelte",
        //   color: "#FF3E00",
        //   colorRGB: "255, 62, 0",
        // },
        // {
        //   url: "https://www.svgrepo.com/show/452130/vue.svg",
        //   name: "Vue",
        //   color: "#4FC08D",
        //   colorRGB: "79, 192, 141",
        // },
        // {
        //   url: "https://www.svgrepo.com/show/374118/tailwind.svg",
        //   name: "TailwindCSS",
        //   color: "#38B2AC",
        //   colorRGB: "56, 178, 172",
        // },
        // {
        //   url: "https://www.svgrepo.com/show/354048/material-ui.svg",
        //   name: "MUI",
        //   color: "#0081CB",
        //   colorRGB: "0, 129, 203",
        // },
        // {
        //   url: "/images/lnui.svg",
        //   name: "LNUI",
        //   color: "#4ae3e7",
        //   colorRGB: "74, 227, 231",
        // },
      ],
    },
    // {
    //   title: "Documentation",
    //   skills: [
    //     {
    //       url: "https://nextra.site/_next/static/media/favicon.69cb336f.svg",
    //       name: "Nextra",
    //       color: "#000000",
    //       colorRGB: "0, 0, 0",
    //       isBgBlack: true,
    //     },
    //   ],
    // },
    {
      title: "Mobile",
      skills: [
        {
          url: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
          name: "Kotlin",
          color: "#4a86ff",
          colorRGB: "74, 134, 255",
          isBgBlack: true,
        },
        {
          url: "https://www.vectorlogo.zone/logos/swift/swift-icon.svg",
          name: "Swift",
          color: "#f05138",
          colorRGB: "240, 81, 56",
        },
      ],
    },
    {
      title: "IDE's",
      skills: [
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg",
          name: "Android Studio",
          color: "#44df8b",
          colorRGB: "68, 223, 139",
          isBgBlack: true,
        },
        {
          url: "https://www.vectorlogo.zone/logos/apple_xcode/apple_xcode-icon.svg",
          name: "XCode",
          color: "#235ee1",
          colorRGB: "35, 94, 225",
          isBgBlack: true,
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg",
          name: "Intellij IDEA",
          color: "#e6366d",
          colorRGB: "230, 54, 109",
          isBgBlack: true,
        },
        {
          url: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg",
          name: "Visual Studio Code",
          color: "#007acc",
          colorRGB: "0, 122, 204",
          isBgBlack: true,
        },
        {
          url: "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg",
          name: "Jupyter",
          color: "#f37726",
          colorRGB: "243, 119, 38",
          isBgBlack: true,
        },
        
      ],
    },
    {
      title: "Deployment",
      skills: [
        {
          url: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
          name: "Vercel",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
      ],
    },
    {
      title: "Other",
      skills: [
        {
          url: "https://www.svgrepo.com/show/452210/git.svg",
          name: "Git",
          color: "#F05032",
          colorRGB: "240, 80, 50",
        },
        {
          url: "https://static.wikia.nocookie.net/logopedia/images/b/bf/Mc_analytics_RGB.svg",
          name: "Adobe Analytics",
          color: "#9f7fff",
          colorRGB: "159, 127, 255",
        },
        {
          url: "https://www.svgrepo.com/show/373595/firebase.svg",
          name: "Firebase",
          color: "#FFCA28",
          colorRGB: "255, 202, 40",
        },
        // {
        //   url: "https://www.svgrepo.com/show/374171/vscode.svg",
        //   name: "VSCode",
        //   color: "#007ACC",
        //   colorRGB: "0, 122, 204",
        // },
      ],
    },
  ];
  const certifications: Certifications[] = [
    {
      name: "DataCamp",
      url: "https://drive.google.com/drive/folders/1SSJxSzndGYPZsI6rEBBJjIhGJrYWMQJG?usp=drive_link",
    },
    {
      name: "IBM",
      url: "https://drive.google.com/drive/folders/1Y-4vGqgOGAmFeiQAErBY_GTxvgoLuam8?usp=drive_link",
    },
    {
      name: "Udemy",
      url: "https://drive.google.com/drive/folders/1gXwFW9a59z1vb2qjcS4WY34sDOlq3P8S?usp=drive_link",
    },
    {
      name: "Cisco",
      url: "https://drive.google.com/drive/folders/1rj8N48TCiSqxVI9pr0n6_5t34CzOPd97?usp=drive_link",
    },
    {
      name: "Cybrary",
      url: "https://drive.google.com/drive/folders/1_IT3Wp9kuFdz0VtHJz8KAwI1sR_N1TmK?usp=drive_link",
    },
    {
      name: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/certification/serenemat/javascript-algorithms-and-data-structures",
    },
  ];
  return (
    <>
      <Head>
        <title>Serene Mathew | Skills</title>
        <meta
          name="description"
          content= "Hey, my name is Serene Mathew. I am a Machine Learning and Front End Enthusiast, I’m passionate about creating beautiful, intuitive and responsive websites."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/../public/favicon.ico" />
      </Head>
      <main className="skills">
        <div className="page__lines"></div>
        {allSkills.map((skill, index) => (
          <motion.div
            className="skills-section"
            key={index}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div
              className="skills-section__title"
              style={{ overflow: "hidden" }}
            >
              <motion.h2
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "50%", opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {skill.title}
              </motion.h2>
            </div>
            <div className="skills-section__cards">
              {skill.skills.map((skill, index) => (
                <div
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    className={skill.isBgBlack ? "card card-black" : "card"}
                    key={index}
                    variants={skillsItem}
                  >
                    <div
                      className="card-icon"
                      style={{
                        backgroundColor: `rgba(${skill.colorRGB}, .1)`,
                        border: `1px solid ${skill.color}`,
                      }}
                    >
                      <Image
                        src={skill.url}
                        alt={skill.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.name}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div
          className="skills-certif"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="skills-certif__title">
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Certifications
            </motion.h2>
          </div>
          <ul className="skills-certif__cards">
            {certifications.map((certif, index) => (
              <motion.li key={index} variants={skillsItem}>
                <Link
                  href={certif.url}
                  passHref
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
                  </svg>
                  <span>{certif.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </main>
    </>
  );
}
