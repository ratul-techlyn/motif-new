"use client"
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Dynamically load external assets
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    const boxiconsCSS = document.createElement('link');
    boxiconsCSS.rel = 'stylesheet';
    boxiconsCSS.href = 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css';
    document.head.appendChild(boxiconsCSS);

    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js';
    gsapScript.async = true;
    document.body.appendChild(gsapScript);

    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.1.min.js';
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    const customJS = document.createElement('script');
    customJS.src = './asset/js/script.js';
    customJS.async = true;
    document.body.appendChild(customJS);

    // Clean up on unmount
    return () => {
      document.head.removeChild(bootstrapCSS);
      document.head.removeChild(boxiconsCSS);
      document.body.removeChild(gsapScript);
      document.body.removeChild(jqueryScript);
      document.body.removeChild(customJS);
    };
  }, []);

  return (
    <div className="container">
      <section className="j_card_grid_section">
        <div className="grid_row">
        <div className="grid">
          <div className="j_card">
            <div className="card_content">
              <div className="top_content">
                <span className="count_badge">02</span>

                <div className="text_content">
                  <h2 className="title">Training Programs</h2>
                  <p className="pera">Leadership Training business mentorship and masterclasses</p>
                </div>
              </div>
              <div className="bottom_content">
                <button className="j_button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}>
                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
