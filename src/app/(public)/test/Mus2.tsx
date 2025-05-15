"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./text.css";

const AnimatedFollower = () => {
  const followerRef = useRef(null);
  const contentRef = useRef<HTMLSpanElement |null>(null);
  const cursorRef = useRef(null); // For the new animated cursor circle

  useEffect(() => {
    // Initialize the follower
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 }); // Set initial position for animated cursor

    const xTo = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power3" });
    const cursorXTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power2.out" });
    const cursorYTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power2.out" });

    const handleMouseMove = (e:MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      cursorXTo(e.clientX);
      cursorYTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Follower animation
    const followerAnim = gsap.timeline({ paused: true, overwrite: "auto" });

    // Animation for the middle circle
    followerAnim.to(".follower__inner__middle", {
      scale: 8,
      backgroundColor: "transparent",  // Transparent background
      border: "2px solid yellow",      // Yellow border
      opacity: 1,
      duration: 0.25,
    }, 0.1);

    // Animation for the small circle (delayed)
    followerAnim.to(".follower__inner__bottom", {
      scale: 10,
      backgroundColor: "#FF5555",
      duration: 0.15,
    }, 0.3);  // Delay this by 0.3 seconds

    // Animation for the top circle
    followerAnim.to(".follower__inner__top", {
      backgroundColor: "#FF5555",
      scale: 10,
      opacity: 1,
      duration: 0.2,
    }, 0.2);

    // Animation for content expansion
    followerAnim.to(contentRef.current, {
      height: "32px",
    });

    const handleMouseEnter = (e:MouseEvent) => {
      const text =( e.target as HTMLElement).dataset.followerText || "Click";
      if (contentRef.current) {
        contentRef.current.innerHTML = text;
      }
      animateFollower("in");
    };

    const handleMouseLeave = () => {
      animateFollower("out");
    };

    const animateFollower = (direction:"in" | "out") => {
      if (direction === "in") {
        followerAnim.invalidate();
        followerAnim.restart().timeScale(1);
      } else {
        followerAnim.progress(0);
        followerAnim.reverse();
      }
    };

    const targets = document.querySelectorAll(".followerchangetest");
    targets.forEach((target) => {
      const element = target as HTMLElement;
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      targets.forEach((target) => {
        const element = target as HTMLElement;
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="followerchangetest" data-follower-text="Clickaroo" />
      <div className="followerchangetest" data-follower-text="Another one" />
      <div className="followerchangetest" data-follower-text="unique!" />

      {/* Custom animated cursor */}
      <div className="cursor" ref={cursorRef}></div>

      <div className="follower" ref={followerRef}>
        <div className="follower__inner__bottom"></div>
        <div className="follower__inner__middle"></div> {/* New circle */}
        <div className="follower__inner__top"></div>
        <span className="follower__content" ref={contentRef}></span>
      </div>
    </>
  );
};

export default AnimatedFollower;
