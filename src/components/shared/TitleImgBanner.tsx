import { cn } from "@/lib/utils";

export interface TLineItem {
  text?: string;
  img?: string;
  alt?: string;
}

export interface TitleImgProps {
  lines: (string | { imageSrc: string; altText?: string })[][];
  description?: string[];
}

const TitleImgBanner = ({ lines, description }: TitleImgProps) => {
  return (
    <div className="w-full md:w-[75%]">
      <h1 className="text-other_hero_title_sm md:text-other_hero_title_md lg:text-other_hero_title_lg 2xl:text-other_hero_title_2xl font-clash font-semibold text-typo-primary">
        {lines.map((row, rowIndex) => (
          <span
            key={rowIndex}
            className="flex flex-wrap items-center gap-x-3 leading-[1.1] tracking-[1.5px] 3xl:text-[clamp(50px,2.9vw,64px)]"
          >
            {row.map((item, itemIndex) =>
              typeof item === "string" ? (
                <span
                  key={itemIndex}
                  className={[
                    cn("relative visible inline-block", {
                      " text-justify": rowIndex !== lines.length - 1,
                    }),
                    "font-clash font-semibold uppercase leading-[1.2] [word-spacing:0.1em]"
                  ].join(" ")}
                >
                  {item}
                </span>
              ) : (
                <span
                  key={itemIndex}
                  className="relative visible inline-block rounded-full w-[20vw] md:w-[12vw] lg:w-[8vw] 2xl:w-[5vw] h-[40px] md:h-[4vw] lg:h-[3vw] 2xl:h-[2vw] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${item.imageSrc})`,
                    aspectRatio: "1 / 1",
                  }}
                >
                </span>
              )
            )}
          </span>
        ))}
      </h1>

      <div className={cn({ "mt-3": description?.length })}>
        {description &&
          description.map((el, idx) => (
            <p
              className={`font-helvetica text-hero_subtitle_sm md:text-hero_subtitle_md lg:text-hero_subtitle_lg 2xl:text-hero_subtitle_2xl 3xl:text-[clamp(22px,1.47vw,30px)] font-normal leading-[1.4] md:leading-[1.2] lg:leading-[1] text-[#848484] inline ${idx !== 0 ? 'ml-1' : ''
                }`}
              key={idx}>
              {el}
            </p>
          ))}
      </div>
    </div>
  );
};

export default TitleImgBanner;
