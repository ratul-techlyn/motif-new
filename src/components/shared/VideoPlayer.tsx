import React from "react";

interface VideoPlayerProps {
  url: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  autoplay = true,
  muted = true,
  loop = true,
  className = "",
}) => {
  const videoUrl = `${url}?autoplay=${autoplay ? 1 : 0}&muted=${
    muted ? 1 : 0
  }&loop=${loop ? 1 : 0}&background=1`;

  return (
    <div className={`relative pt-[56.25%] ${className}`}>
      <iframe
        src={videoUrl}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
};

export default VideoPlayer;
