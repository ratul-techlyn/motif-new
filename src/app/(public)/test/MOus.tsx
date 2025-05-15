"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./text.css"

const AnimatedFollower = () => {
  const followerRef = useRef(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize the follower
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e:MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Follower animation
    const followerAnim = gsap.timeline({ paused: true, overwrite: "auto" });

    followerAnim.to(".follower__inner__bottom", {
      scale: 10,
    //   backgroundColor: "#F6EFEB",
      backgroundColor: "#FF5555",
      duration: 0.15,
    }, 0);
    followerAnim.to(".follower__inner__top", {
      backgroundColor: "#FF5555",
      scale: 10,
      opacity: 1,
      duration: 0.15,
    }, 0.2);
    followerAnim.to(contentRef.current, {
      height: "32px",
    });

    const handleMouseEnter = (e:MouseEvent) => {
      const text =( e.target as HTMLElement).dataset.followerText || "Click";
      if (contentRef.current) {
        contentRef.current.innerHTML = text;
      }
      // contentRef.current.innerHTML = text;
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
        // followerAnim.timeScale(-2);

        followerAnim.progress(0);
        followerAnim.reverse();
      }
    };

    const targets = document.querySelectorAll<HTMLElement>(".followerchangetest");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="followerchangetest" data-follower-text="Clickaroo" />
      <div className="followerchangetest" data-follower-text="Another one" />
      <div className="followerchangetest" data-follower-text="unique!" />

      <div className="follower" ref={followerRef}>
        <div className="follower__inner__bottom"></div>
        <div className="follower__inner__top"></div>
        <span className="follower__content" ref={contentRef}></span>
      </div>
    </>
  );
};

export default AnimatedFollower;
