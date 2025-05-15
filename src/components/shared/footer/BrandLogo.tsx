import React from "react";

const Logo = () => {
  return (
    <svg
      id="footer-logo"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 300 200"
      // style={{enableBackground: 'new 0 0 300 200'}}
      xmlSpace="preserve"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="1000%" y2="0%">
          <stop offset="0%" stopColor="white"></stop>
          <stop offset="50%" stopColor="black"></stop>
          <stop offset="100%" stopColor="white"></stop>
        </linearGradient>
      </defs>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `
                .st0 {
                    fill: url(#gradient);
                }
                `,
        }}
      />
      <g id="Layer_2"></g>
      <g id="Layer_3">
        <polygon
          id="Loog"
          className="st0"
          points="82.4,175.4 82.4,153.4 118.1,117.7 140.5,117.7 155.1,131.6 169.6,117.7 191.6,117.7
212.4,142.3 212.4,161.3 169.6,161.2 155.9,175.4 133.5,175.4 133.5,161.3 118.6,161.4 104.4,175.4 "
        ></polygon>
      </g>
    </svg>

    // <svg
    //   id="footer-logo"
    //   version="1.1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   viewBox="0 0 300 200"
    //   height={height}
    //   style={{ maxWidth: "100%" }}
    // >
    //   <defs>
    //     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
    //       <stop offset="0%" stopColor={color} />
    //       <stop offset="50%" stopColor={poligonColor} />
    //       <stop offset="100%" stopColor={color} />
    //     </linearGradient>
    //   </defs>
    //   <g id="Layer_3">
    //     <polygon
    //       id="Loog"
    //       fill="url(#gradient)"
    //       points="82.4,175.4 82.4,153.4 118.1,117.7 140.5,117.7 155.1,131.6 169.6,117.7 191.6,117.7 212.4,142.3 212.4,161.3 169.6,161.2 155.9,175.4 133.5,175.4 133.5,161.3 118.6,161.4 104.4,175.4"
    //     />
    //   </g>
    // </svg>
  );
};

export default Logo;
