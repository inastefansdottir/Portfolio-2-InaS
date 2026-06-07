import BehanceIcon from "../assets/icons/behance.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ina-s-stefansdottir-36b98b294/",
    Icon: LinkedinIcon,
  },
  {
    label: "Behance",
    href: "https://www.linkedin.com/in/ina-s-stefansdottir-36b98b294/",
    Icon: BehanceIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/inastefansdottir",
    Icon: GithubIcon,
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center w-full py-[28px] px-4 sm:px-10">
      <div className="flex max-[764px]:flex-col items-center justify-between w-full max-w-[1300px] max-[764px]:gap-10">
        <p className="text-primary max-[764px]:text-center">
          Copyright © 2026 Ína S Portfolio. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            key="Email"
            href="mailto:inastefansdottir@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-2 border-primary text-primary p-2.5 hover:bg-primary"
            aria-label="Email"
          >
            <div className="flex items-center justify-center h-[25px] w-[25px] rounded-[3px] bg-primary text-background transition-colors group-hover:bg-background group-hover:text-primary">
              <MailIcon className="w-[20px] h-auto" />
            </div>
          </a>
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-2 border-primary text-primary p-2.5 transition-colors hover:bg-primary hover:text-background"
              aria-label={label}
            >
              <Icon className="h-[25px] w-[25px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
