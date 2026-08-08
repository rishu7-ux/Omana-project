"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Mission & Vision", href: "/mission-vision" },
  { label: "Director Message", href: "/director-message" },
  { label: "News & Events", href: "/news" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Omana Projects"
            width={60}
            height={30}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-semibold text-gray-800 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-0.5 hover:text-[#FF5A2C]"
            >
              {link.label}
            </Link>
          ))}

        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-[#FF5A2C] px-6 py-3 text-sm font-semibold text-white transition-all duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#E64B20] hover:shadow-xl lg:block"
        >
          GET IN TOUCH
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 transition-all duration-300 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle Menu"
        >
          {open ? (
            <X size={30} className="text-black" />
          ) : (
            <Menu size={30} className="text-black" />
          )}
        </button>
        
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-500 ease-in-out lg:hidden ${
          open ? "max-h-125" : "max-h-0"
        }`}
      >
        <nav className="border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-center text-base font-medium text-gray-700 transition-all duration-300 hover:scale-110 hover:text-[#FF5A2C]"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex justify-center py-4">
            
           <Link
     href="/contact"
     onClick={() => setOpen(false)}
     className="rounded-full bg-[#FF5A2C] px-6 py-2 text-sm font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-[#E64B20]"
          
          
          >
            
        <span
          className="absolute inset-0 bg-linear-to-r from-[#E64B20] to-[#FF7A45] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
         />
         <span
    className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
       />
          <span className="relative">GET IN TOUCH</span>
          </Link>

          </div> 
        </nav>
      </div>
    </header>
  );
}