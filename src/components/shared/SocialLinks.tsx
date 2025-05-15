'use client';
import React from 'react';
import { FaLinkedin, FaTwitter, FaDribbble, FaInstagram, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

const socialMediaLinks = [
    { id: 1, label: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com" },
    { id: 2, label: "Twitter", icon: <FaTwitter />, link: "https://www.twitter.com" },
    { id: 3, label: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com" },
    { id: 4, label: "TikTok", icon: <FaTiktok />, link: "https://www.tiktok.com" },
    { id: 5, label: "Dribbble", icon: <FaDribbble />, link: "https://www.dribbble.com" },

];

const SocialLinks = () => {
    return (
        <div>
            <ul className="flex gap-4 ">
                {socialMediaLinks.map((item) => (
                    <li  key={item.id}>
                        <Link href={item.link}  className="text-xl text-white">

                                {item.icon}
                                <span className="sr-only">{item.label}</span>

                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
