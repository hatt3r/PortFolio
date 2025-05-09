import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item, skillsItem } from "../animation";
import { useContext, useState } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Experience() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Work {
    name: string;
    url?: string;
    location: string;
    position: string;
    date: string;
    description: string;
    stacks?: string[];
  }

  interface PersonalWork {
    name: string;
    url: string;
    image: string;
  }

  const works: Work[] = [
    {
      name: "AllState India",
      url: "https://www.allstateindia.com/",
      position: "SDE Intern",
      location: "Hybrid",
      date: "Jan 2023 - July 2023",
      description: "Developed and maintained swift and kotlin libraries for the analytics tags for the AllState mobile app. Created Analytics reports for user engagement throught the app and website for stakeholders.",
      stacks: ["Kotlin", "Swift", "Adobe Analytics", "JavaScript", "AEM (Adobe Experience Manager)"],
    },
  ]
  const sideProjects: PersonalWork[] = [
    { name: "DFIR: LoneWolf",
      url: "https://www.linkedin.com/in/serene-mathew/overlay/1740516901585/single-media-viewer?type=DOCUMENT&profileId=ACoAADo1y1YBhMgYaVdqZGqAcpRs3XvopJNuvMg&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BhtLjHDT2ThunzWM1bGq%2FMw%3D%3D",
      image: "" 
    },
    {
      name: "enhancing IDS to counter SlowLoris Attack",
      url: "https://www.linkedin.com/in/serene-mathew/overlay/1740517161580/single-media-viewer?type=DOCUMENT&profileId=ACoAADo1y1YBhMgYaVdqZGqAcpRs3XvopJNuvMg&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BBMYtlh6uRli3SH2%2BfbUo%2Bg%3D%3D",
      image: ""
    },
    {
      name: "LightWeight-Crypto",
      url: "https://github.com/hatt3r/LightWeight-Crypto",
      image:""
    },
    {
      name: "Exploring Honeypots in Healthcare and Industrial Systems",
      url: "https://www.linkedin.com/in/serene-mathew/details/projects/1740517885874/single-media-viewer?type=DOCUMENT&profileId=ACoAADo1y1YBhMgYaVdqZGqAcpRs3XvopJNuvMg&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BCxYOVcueQ7GI02UW0GXd%2FQ%3D%3D",
      image: ""
    },

    {
      name: "Portfolio",
      url: "https://github.com/hatt3r/PortFolio",
      image:"",
    },
    {
      name: "Personality-Predictor",
      url: "https://github.com/hatt3r/Personality-Predictor",
      image: "",
    },
    {
      name: "OUR-HOSTEL (PHP,JS,HTML,SQL)",
      url: "https://github.com/hatt3r/OUR_HOSTEL",
      image: "",
    },
    {
      name: "Our-Hostel (VB.NET,MS Access)",
      url: "https://github.com/hatt3r/our_hostel_vbaccess",
      image: "",
    },
    
  ];

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const handleMouseEnter = (url: string, name: string) => {
    setImageUrl(url);
    setImageName(name);
  };
  const handleMouseLeave = () => {
    setImageUrl("");
    setImageName("");
  };

  return (
    <>
      <Head>
        <title>Serene Mathew | Experience</title>
        <meta
          name="description"
          content="
        I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/../public/favicon.ico" />
      </Head>
      <main className="experience">
        <div className="page__lines"></div>
        <motion.div
          className="experience-works"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-works__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Internship
            </motion.h2>
          </div>
          <div className="experience-works__cards">
            {works.map((work, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{work.name}</h3>
                    <p>{work.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{work.date}</h3>
                    <p>{work.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{work.description}</p>
                </div>
                {work.stacks && (
                  <div className="card-stacks">
                    {work.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {work.url && (
                    <Link
                      href={work.url}
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
                      <span>Website</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="experience-personal"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-personal__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Projects
            </motion.h2>
          </div>
          <div className="experience-personal__cards">
            
            <ul className="personal-lists">
              {sideProjects.map((project, index) => (
                <motion.li key={index} variants={skillsItem}>
                  <Link
                    href={project.url}
                    passHref
                    onMouseEnter={() => {
                      cursorChangeHandler("hovered");
                      handleMouseEnter(project.image, project.name);
                    }}
                    onMouseLeave={() => {
                      cursorChangeHandler("");
                      handleMouseLeave();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    <span>{project.name}</span>
                  </Link>
                </motion.li>
              ))}
              <h3>
                <Link
                  href="https://github.com/hatt3r?tab=repositories"
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
                  <span>See more on GitHub</span>
                </Link>
              </h3>
            </ul>
          </div>
        </motion.div>
      </main>
    </>
  );
}
