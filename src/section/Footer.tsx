import React from "react";
import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

const Footer = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="">
            <Image src={logoImage} alt="Layer Logo" />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link, index) => (
                <a 
                    href={link.href} 
                    key={index}
                    className=" text-white/50 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
