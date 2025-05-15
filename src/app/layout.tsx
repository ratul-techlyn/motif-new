import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./fluid_style.css";
import "../styles/_curve_chart.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Head from "next/head";



const clashDisplay = localFont({
  variable: "--font-clash-display",
  src: [
    {
      path: "../fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Extralight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: '../fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: "../fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Semibold.woff",
      weight: "600",
      style: "normal",
    },

    {
      path: "../fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
const helveticaNeue = localFont({
  variable: "--font-helveticaNeue",
  src: [
    {
      path: "../fonts/helvetica-neue/HelveticaNeueLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: '../fonts/helvetica-neue/HelveticaNeueLight.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "MOTIF® — STRATEGY COMMERCE EXPERT",
  description: "An Agency turned to Incubator — Growing & Scaling Luxury Lifestyle, Fashion & Beauty Brands with strategies, powerful creatives & crazy ideas. ⚡️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body
        className={`${clashDisplay.variable} ${helveticaNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
