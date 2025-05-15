import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DynamicChart = () => {
  useEffect(() => {
    // Dynamically load the DrawSVGPlugin
    const script = document.createElement("script");
    script.src = "/js/DrawSVGPlugin.min.js"; // Ensure this path is correct
    script.async = true;

    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).DrawSVGPlugin) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gsap.registerPlugin((window as any).DrawSVGPlugin);

        // Initial Setup
        gsap.set("#chart_svg_main", { opacity: 1 });
        gsap.set("#path-highlight", { drawSVG: "0% 15%" });

        // Animation Timeline with ScrollTrigger
        const positions = ["0% 15%", "18% 35%", "39% 55%", "60% 75%", "80% 100%"];
        const buttons = document.querySelectorAll(
          ".j_curve_chart_section .chart_btn_wrapper .btn_box"
        );

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#chart_svg_main",
            start: "top center",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const totalSegments = positions.length;
              const index = Math.floor(progress * totalSegments);

              buttons.forEach((button, i) => {
                if(button){
                  if (i === index) {
                    button.classList.add("active");
                  } else {
                    button.classList.remove("active");
                  }
                }
              });

              gsap.to("#path-highlight", {
                drawSVG: positions[index],
                duration: 0.3,
                ease: "power2.inOut",
              });
            },
          },
        });

        // Timeline Animations
        tl1
          .from("#path-highlight, #path-complacency-mask", { opacity: 0 })
          .from(
            "#path-full, #path-highlight, #path-complacency-mask",
            {
              attr: {
                d: "M39 307.126c432 0 514-0 966-0",
              },
            },
            "<"
          )
          .fromTo(
            ".chart_btn_wrapper .btn_box.tow .content_card .bar",
            { height: "40px" },
            { height: "90px" },
            "<"
          )
          .fromTo(
            ".chart_btn_wrapper .btn_box.three .content_card .bar",
            { height: "40px" },
            { height: "250px" },
            "<"
          )
          .fromTo(
            ".chart_btn_wrapper .btn_box.four .content_card .bar",
            { height: "40px" },
            { height: "400px" },
            "<"
          )
          .fromTo(
            ".chart_btn_wrapper .btn_box.five .content_card .bar",
            { height: "40px" },
            { height: "320px" },
            "<"
          );

        // Button Interactivity
        buttons.forEach((button, index) => {
          button.addEventListener("mouseenter", () => {
            buttons.forEach((elm) => elm.classList.remove("active"));
            button.classList.add("active");
            gsap.to("#path-highlight", {
              drawSVG: positions[index],
              duration: 0.3,
              ease: "power2.inOut",
            });
          });
        });
      } else {
        console.error("DrawSVGPlugin failed to load.");
      }
    };

    script.onerror = () => {
      console.error("Failed to load DrawSVGPlugin script.");
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="j_curve_chart_section">
      <div className="content_wrapper">
        <div className="chart_svg">
          <svg
            id="chart_svg_main"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1044 419"
            fill="none"
          >
            <mask id="complacency-mask">
              <path
                id="path-complacency-mask"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="29"
                d="M39 307.126c432 0 514-628.126 966-42.126"
              ></path>
            </mask>
            <path
              id="path-full"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="29"
              d="M39 307.126c432 0 514-628.126 966-42.126"
            ></path>
            <path
              id="path-highlight"
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeWidth="29"
              strokeDashoffset="1480"
              strokeDasharray="180 1300"
              mask="url(#complacency-mask)"
              d="M39 307.126c432 0 514-628.126 966-42.126"
              data-complacency-indicator=""
              style={{
                strokeDashoffset: "812",
                strokeDasharray: "327, 1300",
              }}
            ></path>
          </svg>
        </div>
        <div className="chart_btn_wrapper">
          {["Finding Fit", "Roadmapping", "Implementation", "Optimization", "Ongoing Success"].map(
            (title, index) => (
              <div key={index} className={`btn_box ${index + 1}`}>
                <div className="content_card">
                  <div className="bar">
                    <div className="dot"></div>
                  </div>
                  <h2 className="count">{`00${index + 1}`}</h2>
                  <h2 className="title">
                    <span>{title}</span>
                    <span>{title}</span>
                  </h2>
                  <p className="pera">Description for {title} goes here.</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default DynamicChart;
