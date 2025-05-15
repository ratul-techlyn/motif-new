import React from 'react';

type ProcessSectionProps = {
  title: string;
  text: string[];
};
const TitleSideShort: React.FC<ProcessSectionProps> = ({ title, text }) => {
  return (
    <div className="font-clash lg:text-[calc(100vw/52)] font-semibold leading-tight text-typo-primary max-w-[70%] w-full">
      <h2 className="uppercase font-helvetica text-[0.74062em] md:text-[calc(100vw/110)]  text-typo-primary font-bold mb-6">
        {title}
      </h2>
      {text.map((line, index) => (
        <p key={index} className={`font-clash lg:text-[calc(100vw/52)] md:text-3xl text-lg font-semibold leading-tight text-typo-primary  ${index !== 0 ? 'inline ml-1' : ''}`}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default TitleSideShort;
