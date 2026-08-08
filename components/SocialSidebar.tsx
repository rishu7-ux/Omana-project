"use client";

import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function SocialSidebar() {
  const socialLinks = [
    {
      icon: <FaFacebookF size={18} />,
      href: "https://facebook.com",
      bg: "bg-[#1877F2]",
      hover: "hover:bg-[#166FE5]",
    },
    {
      icon: <FaWhatsapp size={18} />,
      href: "https://wa.me/919217104219",
      bg: "bg-[#25D366]",
      hover: "hover:bg-[#1EBE5B]",
    },
    {
      icon: <FaInstagram size={18} />,
      href: "https://instagram.com",
      bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      hover: "hover:scale-110",
    },
    {
      icon: <FaYoutube size={18} />,
      href: "https://youtube.com",
      bg: "bg-[#FF0000]",
      hover: "hover:bg-[#E60000]",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      href: "https://linkedin.com",
      bg: "bg-[#0077B5]",
      hover: "hover:bg-[#00669C]",
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 z-9999 -translate-y-1/2">

      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex h-12 w-12 items-center justify-center text-white shadow-lg transition-all duration-300 ${item.bg} ${item.hover} hover:w-14`}
        >
          <span className="transition-transform duration-300 group-hover:scale-125">
            {item.icon}
          </span>
          
        </a>
      ))}

    </div>
  );
}