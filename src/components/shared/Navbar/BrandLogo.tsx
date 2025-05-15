import Image from 'next/image';
import React from 'react';
import Link from "next/link";


type TBrandLogoProps = {
    brandIconClass?: string;
    brandClass?: string;
    brandStyle?: React.CSSProperties
    className?: string;
}
const BrandLogo = ({
    brandIconClass = "w-[2.5vw]",
    brandClass = "w-[6vw]",
    brandStyle,
    className,
  }: TBrandLogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={brandIconClass}>
       <Link href='/'> <Image className="w-full" layout="intrinsic" src={'/assets/logo/MOTIF-Icon.webp'} width={60} height={30} alt="" /></Link>
      </div>
      <div className={brandClass} style={brandStyle}>
          <Link href='/'> <Image className="w-full" layout="intrinsic" src={'/assets/logo/MOTIF-text.webp'}  width={150} height={30} alt="" /></Link>
      </div>
    </div>
  );
};

export default BrandLogo;