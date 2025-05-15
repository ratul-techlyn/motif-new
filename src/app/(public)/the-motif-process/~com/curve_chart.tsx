import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CurveChart = () => {
  const [mounted, setMounted] = useState(false);
  const chartSvgRef = useRef(null);
  const pathHighlightRef = useRef(null);
  const buttonsRef = useRef<(HTMLDivElement|null|undefined)[]>([]);

  const positions = ["0% 15%", "18% 35%", "39% 55%", "60% 75%", "80% 100%"];

  // Mark the component as mounted to avoid SSR issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize GSAP animations on client-side
  useEffect(() => {
    if (mounted) {
      gsap.registerPlugin(ScrollTrigger);
      initializeChartAnimation();
    }

    return () => {
      // Cleanup ScrollTrigger on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mounted]);

  // Function to initialize the chart animation
  const initializeChartAnimation = () => {
    // Initial Setup
    gsap.set(chartSvgRef.current, { opacity: 1 });
    gsap.set(pathHighlightRef.current, { drawSVG: "0% 15%" });

    // Create Timeline
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: chartSvgRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalSegments = positions.length;
          const index = Math.floor(progress * totalSegments);
          buttonsRef.current.forEach((button, i) => {
            if(button){
              if (i === index) {
                button.classList.add("active");
              } else {
                button.classList.remove("active");
              }
            }
          });

          gsap.to(pathHighlightRef.current, {
            drawSVG: positions[index],
            duration: 0.3,
            ease: "power2.inOut",
          });
        },
      },
    });

    // Timeline Animations
    tl1
      .from(pathHighlightRef.current, {
        opacity: 0,
      })
      .from(
        "#path-full, #path-highlight, #path-complacency-mask",
        {
          attr: {
            d: "M39 307.126c432 0 514-0 966-0",
          },
        },
        "<"
      )
      .fromTo(".chart_btn_wrapper .btn_box.tow .content_card .bar", { height: "40px" }, { height: "90px" }, "<")
      .fromTo(".chart_btn_wrapper .btn_box.three .content_card .bar", { height: "40px" }, { height: "250px" }, "<")
      .fromTo(".chart_btn_wrapper .btn_box.four .content_card .bar", { height: "40px" }, { height: "400px" }, "<")
      .fromTo(".chart_btn_wrapper .btn_box.five .content_card .bar", { height: "40px" }, { height: "320px" }, "<");

    // Button Interactivity
    const buttons = document.querySelectorAll(".j_curve_chart_section .chart_btn_wrapper .btn_box");
    buttons.forEach((button, index) => {
      button.addEventListener("mouseenter", () => {
        buttons.forEach((elm) => elm.classList.remove("active"));
        button.classList.add("active");
        gsap.to(pathHighlightRef.current, {
          drawSVG: positions[index],
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  };






  if (!mounted) {
    return null;
  }

  return (
    <section className="j_curve_chart_section">
      <div className="content_wrapper">
        <div className="chart_svg" ref={chartSvgRef}>
          <svg id="chart_svg_main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1044 419" fill="none">
            <mask id="complacency-mask">
              <path id="path-complacency-mask" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="29" d="M39 307.126c432 0 514-628.126 966-42.126"></path>
            </mask>

            <path id="path-full" strokeLinecap="round" strokeLinejoin="round" strokeWidth="29" d="M39 307.126c432 0 514-628.126 966-42.126"></path>

            <path
              id="path-highlight"
              ref={pathHighlightRef}
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeWidth="29"
              strokeDashoffset="1480"
              strokeDasharray="180 1300"
              mask="url(#complacency-mask)"
              d="M39 307.126c432 0 514-628.126 966-42.126"
              data-complacency-indicator=""
            //   style={{ strokeDashoffset: 812, strokeDasharray: "327, 1300" }}
            ></path>
          </svg>
        </div>
        <div className="chart_btn_wrapper">
          <div className="btn_box one" ref={(el) => {buttonsRef.current[0] = el}}>
            <div className="content_card">
              <div className="bar">
                <div className="dot"></div>
              </div>
              <h2 className="count">001</h2>
              <h2 className="title">
                <span>Finding fit</span>
                <span>Finding fit</span>
              </h2>
              <p className="pera">
                After you apply to be a partner with MOTIF, one of our brand strategist will jump on a free strategy session with your key stake holders. We&apos;ll dive into your
                brand, current situations, & goals to help you succeed. If we are a great fit for each others we will move forward.
              </p>
            </div>
          </div>
          <div className="btn_box tow" ref={(el) => {buttonsRef.current[1] = el}}>
            <div className="content_card">
              <div className="bar">
                <div className="dot"></div>
              </div>
              <h2 className="count">002</h2>
              <h2 className="title">
                <span>Roadmapping</span>
                <span>Roadmapping</span>
              </h2>
              <p className="pera">
                Based on our previous stage if we will able to help we&apos;ll move to the next stage. We’ll create a one-of-a-kind roadmap and the right strategy with a laser-focused
                objective. It&apos;s designed to be effortlessly embraced, and will start producing tangible results.
              </p>
            </div>
          </div>
          <div className="btn_box three" ref={(el) => {buttonsRef.current[2] = el}}>
            <div className="content_card">
              <div className="bar">
                <div className="dot"></div>
              </div>
              <h2 className="count">003</h2>
              <h2 className="title">
                <span>Implementation</span>
                <span>Implementation</span>
              </h2>
              <p className="pera">
                After shaping the roadmap, we roll up our sleeves for the next step. We&apos;ll make your eCommerce marketing look and feel just right, in line with your brand. Plus,
                we&apos;ll put lots of data to work – Google Analytics, heat mapping, and tracking – so you keep getting the best results.
              </p>
            </div>
          </div>
          <div className="btn_box four" ref={(el) => {buttonsRef.current[3] = el}}>
            <div className="content_card">
              <div className="bar">
                <div className="dot"></div>
              </div>
              <h2 className="count">004</h2>
              <h2 className="title">
                <span>Optimization</span>
                <span>Optimization</span>
              </h2>
              <p className="pera">
                In our first 90 days, we craft, test, and refine. We’re your performance stewards, optimizing as we sail. With data in hand, we set revenue goals, aiming for a
                winning ROI and lasting customer value. We’re a team of strategists, marketers & technologists who are focused on delivering results.
              </p>
            </div>
          </div>
          <div className="btn_box five" ref={(el) => {buttonsRef.current[4] = el}}>
            <div className="content_card">
              <div className="bar">
                <div className="dot"></div>
              </div>
              <h2 className="count">005</h2>
              <h2 className="title">
                <span>On Going Success</span>
                <span>On Going Success</span>
              </h2>
              <p className="pera">
                After the initial 90 days, we regroup to fine-tune our goals. We analyze the recent data and collaboratively set revenue targets and marketing budgets by channels.
                Our aim is to set achievable objectives and work diligently to meet them. We&apos;re true partners, committed to maximizing results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurveChart;
