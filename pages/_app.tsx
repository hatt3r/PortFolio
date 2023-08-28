import "../styles/index.scss";
import Nav from "../Components/Navigation";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Cursor from "../Components/Cursor/Cursor";
import MouseContextProvider from "../context/mouseContext";


import { NextSeo } from "next-seo";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import { useEffect, useState, useRef } from "react";
import Link from "next/link.js";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps, router }: AppProps) {
  const [secondes, setSecondes] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondes((secondes) => secondes + 1);
    }, 1000);
    if (typeof window !== "undefined" && secondes > 3) {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        // loader.style.zIndex = "-1700";
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [secondes]);

  const [theme, setTheme] = useState("light");
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
  }, []);

  useEffect(() => {
    if (theme === "light") {
      bodyElement.current.classList.remove("dark");
      bodyElement.current.classList.add("light");
    } else {
      bodyElement.current.classList.remove("light");
      bodyElement.current.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <NextSeo
        title="Serene Mathew"
        description="Hey, my name is Serene Mathew. I am a FrontEnd Engineer and Machine Learning Enthusiast From India, I’m passionate about AI/ML models and also creating intuitive web applications."
        canonical=""
        openGraph={{
          url: "https://sereneportfolio.vercel.app",
          title: "Serene Mathew",
          description:
            "Hey, my name is Serene Mathew. I am a Machine Learning and Front End Enthusiast, I’m passionate about creating beautiful, intuitive and responsive websites.",
          
          siteName: "Serene Mathew | Portfolio",
        }}
       
      />
      <GoogleAnalytics measurementId="G-QBQF4V0DCH"/>
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <MouseContextProvider>
          <Cursor />
          <header className="header">
            <Link href="/" className="header-logo">
              <svg
                width="167"
                height="72.401"
                viewBox="0 0 167 72.401"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="svgGroup"
                  stroke-linecap="round"
                  fill-rule="evenodd"
                  font-size="9pt"
                  stroke="#000"
                  stroke-width="0.75mm"
                  fill="#ffffff"
                  
                >
                  <path
                    d="M 70.8 71.2 L 61.8 71.2 L 61.8 19.2 L 70.5 19.2 L 70.5 27.9 Q 73.3 23.7 77.6 20.85 A 17.205 17.205 0 0 1 86.802 18.009 A 20.858 20.858 0 0 1 87.4 18 A 20.994 20.994 0 0 1 91.817 18.44 Q 94.803 19.082 97.085 20.663 A 13.128 13.128 0 0 1 97.55 21 A 15.751 15.751 0 0 1 102.998 28.69 A 19.154 19.154 0 0 1 103.1 29 Q 106.2 24.4 110.45 21.2 A 15.669 15.669 0 0 1 117.241 18.317 A 21.446 21.446 0 0 1 121 18 A 21.437 21.437 0 0 1 125.888 18.523 Q 129.474 19.362 131.963 21.551 A 12.994 12.994 0 0 1 133.65 23.35 A 18.992 18.992 0 0 1 137.061 30.622 Q 137.8 33.672 137.8 37.3 L 137.8 71.2 L 128.8 71.2 L 128.8 38 A 19.042 19.042 0 0 0 128.463 34.311 Q 128.027 32.105 127.028 30.361 A 10.982 10.982 0 0 0 126.3 29.25 A 7.974 7.974 0 0 0 120.487 25.954 A 10.678 10.678 0 0 0 119.4 25.9 A 11.926 11.926 0 0 0 112.641 28.027 A 15.996 15.996 0 0 0 111.05 29.25 Q 107.2 32.6 104.3 37.1 L 104.3 71.2 L 95.3 71.2 L 95.3 38 A 19.042 19.042 0 0 0 94.963 34.311 Q 94.527 32.105 93.528 30.361 A 10.982 10.982 0 0 0 92.8 29.25 A 7.974 7.974 0 0 0 86.987 25.954 A 10.678 10.678 0 0 0 85.9 25.9 A 12.02 12.02 0 0 0 79.581 27.728 A 16.244 16.244 0 0 0 77.6 29.15 Q 73.7 32.4 70.8 36.8 L 70.8 71.2 Z M 0 65.3 L 4.8 57.3 Q 8.4 60.3 12.9 62.2 A 23.348 23.348 0 0 0 18.27 63.71 A 32.118 32.118 0 0 0 23.4 64.1 A 27.981 27.981 0 0 0 27.947 63.754 Q 30.37 63.354 32.331 62.494 A 13.701 13.701 0 0 0 34.8 61.1 Q 38.848 58.209 38.995 53.366 A 12.116 12.116 0 0 0 39 53 A 11.94 11.94 0 0 0 38.663 50.107 A 9.816 9.816 0 0 0 37.8 47.85 A 8.097 8.097 0 0 0 36.6 46.194 Q 35.33 44.813 33.184 43.471 A 25.81 25.81 0 0 0 33.15 43.45 Q 30.034 41.508 24.265 39.28 A 118.584 118.584 0 0 0 23 38.8 Q 15.8 36 11.5 33.15 A 21.931 21.931 0 0 1 8.411 30.703 Q 6.694 29.053 5.638 27.188 A 13.303 13.303 0 0 1 5.35 26.65 Q 3.5 23 3.5 18 Q 3.5 13 6.25 8.95 Q 9 4.9 14.35 2.45 A 25.558 25.558 0 0 1 20.25 0.615 Q 23.493 0 27.3 0 Q 33.5 0 38.45 1.25 Q 43.4 2.5 48.1 4.8 L 44.6 12.9 A 31.496 31.496 0 0 0 40.474 10.881 A 41.686 41.686 0 0 0 36.65 9.55 Q 32.1 8.2 27.1 8.2 A 27.187 27.187 0 0 0 23.07 8.48 Q 20.938 8.8 19.2 9.487 A 12.616 12.616 0 0 0 16.7 10.8 A 9.902 9.902 0 0 0 14.537 12.765 A 7.359 7.359 0 0 0 12.9 17.5 A 10.464 10.464 0 0 0 13.192 20.022 A 8.562 8.562 0 0 0 14 22.1 Q 15.056 24.019 18.091 25.847 A 23.503 23.503 0 0 0 18.35 26 A 33.003 33.003 0 0 0 20.566 27.172 Q 22.835 28.275 26.046 29.523 A 130.016 130.016 0 0 0 28.1 30.3 A 81.228 81.228 0 0 1 33.078 32.329 Q 37.464 34.3 40.45 36.4 A 26.044 26.044 0 0 1 43.49 38.878 Q 45.713 41.006 46.9 43.35 A 17.579 17.579 0 0 1 48.641 49.213 A 22.155 22.155 0 0 1 48.8 51.9 A 21.71 21.71 0 0 1 48.133 57.401 A 17.105 17.105 0 0 1 45.55 63 Q 42.3 67.6 36.55 70 A 30.521 30.521 0 0 1 29.14 72.004 A 40.027 40.027 0 0 1 23.4 72.4 Q 16.1 72.4 10.1 70.45 A 38.206 38.206 0 0 1 4.733 68.268 A 28.433 28.433 0 0 1 0 65.3 Z M 155.663 70.462 A 6.418 6.418 0 0 0 160.3 72.4 A 8.605 8.605 0 0 0 160.922 72.378 A 6.461 6.461 0 0 0 165.1 70.55 Q 167 68.7 167 65.7 A 6.225 6.225 0 0 0 166.421 63.029 A 6.955 6.955 0 0 0 164.95 61 Q 162.9 59 160.3 59 A 8.813 8.813 0 0 0 158.447 59.185 A 5.979 5.979 0 0 0 155.4 60.8 A 5.927 5.927 0 0 0 153.832 63.64 A 8.624 8.624 0 0 0 153.6 65.7 Q 153.6 68.4 155.6 70.4 A 8.317 8.317 0 0 0 155.663 70.462 Z"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              </svg>
            </Link>
            <button
              onClick={toggleTheme}
              className={
                theme === "light" ? "header-theme dark" : "header-theme light"
              }
            >
              {theme === "light" ? (
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>moon</title>{" "}
                    <path d="M29.223 24.178l-0.021-0.057c-0.116-0.274-0.383-0.463-0.694-0.463-0.104 0-0.202 0.021-0.292 0.059l0.005-0.002c-1.272 0.542-2.752 0.857-4.306 0.857-6.213 0-11.25-5.037-11.25-11.25 0-4.66 2.833-8.658 6.871-10.366l0.074-0.028 0.211-0.089c0.267-0.118 0.45-0.381 0.45-0.687 0-0.375-0.276-0.686-0.635-0.74l-0.004-0.001c-0.653-0.103-1.407-0.161-2.174-0.161-8.145 0-14.748 6.603-14.748 14.748s6.603 14.748 14.748 14.748c4.748 0 8.973-2.244 11.67-5.73l0.025-0.034c0.097-0.125 0.155-0.285 0.155-0.458 0-0.127-0.031-0.246-0.086-0.351l0.002 0.004zM22.518 28.24c-1.497 0.637-3.238 1.007-5.066 1.007-7.317 0-13.249-5.932-13.249-13.249 0-7.074 5.543-12.853 12.523-13.23l0.034-0.001c-3.395 2.326-5.594 6.183-5.594 10.554 0 7.043 5.709 12.752 12.752 12.752 0.85 0 1.681-0.083 2.485-0.242l-0.081 0.013c-1.081 0.976-2.339 1.783-3.716 2.364l-0.087 0.033z"></path>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 16C9.7944 16 8 14.2056 8 12C8 9.7944 9.7944 8 12 8C14.2056 8 16 9.7944 16 12C16 14.2056 14.2056 16 12 16Z"
                      stroke="#000000"
                    ></path>{" "}
                    <path
                      d="M12 3.5V5.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M20.5 12H18.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M5.5 12H3.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M12 18.5V20.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 7.5L18 6"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 18L7.5 16.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 6L7.5 7.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 16.5L18 18"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
          </header>
          <Nav />
          <Component key={router.pathname} {...pageProps} />
        </MouseContextProvider>
      </AnimatePresence>
    </>
  );
}
