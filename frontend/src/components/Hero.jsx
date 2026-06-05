import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import profileImg from "../assets/prince.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-24"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center lg:text-left"
        >
          <p className="inline-flex gap-2 items-center px-4 py-2 rounded-full bg-sky-400/10 text-sky-300 border border-sky-400/20 mb-6 text-sm">
            <MapPin size={16} />
            {profile.location}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-4 font-bold text-slate-200">
            {profile.role}
          </h2>

          <p className="text-slate-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
            {profile.summary}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <Link to="/projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </Link>

            <a href={profile.resume} download className="btn btn-outline">
              Download Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center lg:items-end"
        >
          <div className="absolute top-8 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-sky-500/20 blur-3xl rounded-full"></div>

          <img
            src={profileImg}
            alt="Prince Kumar"
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-full border-4 border-sky-500 shadow-2xl"
          />

          <div className="relative grid grid-cols-3 gap-3 mt-6 w-full max-w-sm sm:max-w-md">
            <div className="card p-3 sm:p-4 text-center">
              <b className="text-lg sm:text-xl text-white">2+</b>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Projects
              </p>
            </div>

            <div className="card p-3 sm:p-4 text-center">
              <b className="text-lg sm:text-xl text-white">3mo</b>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Internship
              </p>
            </div>

            <div className="card p-3 sm:p-4 text-center">
              <b className="text-lg sm:text-xl text-white">250+</b>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Problems
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}