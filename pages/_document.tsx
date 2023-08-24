import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id={"globalLoader"}>
          <div className="loader">
           
<svg>
  <symbol id="text-copy">
    <text text-anchor="middle" x="50%" y="50%" className="path" fontSize={90}>Sm.</text>
  </symbol>
  <g>
    <use xlinkHref="#text-copy"
      className="text-copy" id="outline"></use>
    <use xlinkHref="#text-copy"
      className="text-copy" id="fill"></use> 
  </g>
</svg>
          </div>
          <p className="copyright">
            Modified by Serene Mathew • All
            rights reserved • 2021 - {new Date().getFullYear()}
          </p>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
