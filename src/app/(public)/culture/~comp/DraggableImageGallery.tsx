'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";

const DraggableGallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load jQuery from CDN
      const scriptJQuery = document.createElement('script');
      scriptJQuery.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      scriptJQuery.onload = () => {

        // Load jQuery UI after jQuery is loaded
        const scriptJQueryUI = document.createElement('script');
        scriptJQueryUI.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js';
        scriptJQueryUI.onload = () => {

          // Now that both jQuery and jQuery UI are loaded, initialize draggable
          /* eslint-disable @typescript-eslint/no-explicit-any */
          const $ = (window as any).jQuery;  // Use jQuery loaded from CDN



          const positions = [
            { top: "10vh", left: "20vw", transform: "rotate(-15deg)" },
            { top: "10vh", right: "20vw", transform: "rotate(15deg)" },
            { top: "12vh", transform: "rotate(0deg)" }, // Center image, no horizontal position
            { top: "35vh", left: "20vw", transform: "rotate(-15deg)" },
            { top: "42vh", right: "25vw", transform: "rotate(15deg)" },
          ];

          const images: HTMLImageElement[] = $(".draggable-image").toArray();

          Promise.all(
            images.map(
              (img) =>
                new Promise<void>((resolve) => {
                  if (img.complete) resolve();
                  else $(img).on("load", resolve);
                })
            )
          ).then(() => {
            // Apply initial positions and rotation after images are loaded
            images.forEach((element, index) => {
              if (positions[index]) {
                $(element).css({
                  top: positions[index].top,
                  left: positions[index].left,
                  right: positions[index].right,
                  transform: positions[index].transform, // Apply the correct rotation here
                });

                // Special case for the middle image (center it horizontally)
                if (index === 2) {
                  const containerWidth = $("#image-container").width();
                  const imgWidth = $(element).width();
                  const left = (containerWidth - imgWidth) / 2; // Center horizontally
                  $(element).css("left", `${left}px`);
                }
              }
            });

            setImagesLoaded(true);
          });

          if (imagesLoaded) {
            // Enable draggable functionality with containment
            $(".draggable-image").draggable({
              containment: "#image-container",
              scroll: false,
              start: function () {
                $(this).css("z-index", 10);
              },
            });
          }
        };
        scriptJQueryUI.onerror = () => {
          console.error('Failed to load jQuery UI from CDN');
        };
        document.head.appendChild(scriptJQueryUI);
      };
      scriptJQuery.onerror = () => {
        console.error('Failed to load jQuery from CDN');
      };
      document.head.appendChild(scriptJQuery);
    }
  }, [imagesLoaded]);

  return (
    <div className="dragable_container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div id="image-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image src="/assets/process/drugableImgs/img01.jpg" className="draggable-image" alt="Motif Office" width={400} height={300} />
        <Image src="/assets/process/drugableImgs/img02.jpg" className="draggable-image" alt="Motif Office" width={400} height={300} />
        <Image src="/assets/process/drugableImgs/img03.jpg" className="draggable-image" alt="Motif Office" width={400} height={300} />
        <Image src="/assets/process/drugableImgs/img04.jpg" className="draggable-image" alt="Motif Office" width={400} height={300} />
        <Image src="/assets/process/drugableImgs/img05.jpg" className="draggable-image" alt="Motif Office" width={400} height={300} />
      </div>
    </div>
  );
};

export default DraggableGallery;
