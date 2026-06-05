import { Menu, X, Shield } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mt-4">
        <div className="glass rounded-full px-5 py-3 flex items-center justify-between gap-3">
          {/* Logo */}
          <a href="#home" className="font-black text-xl">
            Prince<span className="gradient-text">.dev</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-300 hover:text-sky-400 transition"
              >
                {link}
              </a>
            ))}

            <Link
              to="/admin/login"
              className="text-sm text-slate-300 hover:text-sky-400 inline-flex items-center gap-1 transition"
            >
              <Shield size={16} />
              Admin
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex gap-3 items-center">
            <ThemeToggle />

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline py-2 px-3"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline py-2 px-3"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <button
              className="btn btn-outline px-3 py-2"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="glass rounded-3xl mt-3 p-5 lg:hidden">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-300 hover:text-sky-400"
              >
                {link}
              </a>
            ))}

            <Link
              to="/admin/login"
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-300 hover:text-sky-400"
            >
              Admin Login
            </Link>

            <div className="flex gap-4 mt-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}