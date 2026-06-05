import SectionTitle from "./SectionTitle";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          tag="Projects"
          title="Featured Work"
          desc="Resume-based MERN projects with admin dashboard, APIs and responsive UI."
        />

        <div className="grid md:grid-cols-2 gap-7">
          {profile.projects.map((p, i) => (
            <div
              key={i}
              className="card p-6 hover:-translate-y-2 transition duration-300"
            >
              <div className="h-48 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-800 flex items-center justify-center text-4xl font-black gradient-text">
                {p.title.split(" ")[0]}
              </div>

              <h3 className="text-2xl font-bold mt-6">{p.title}</h3>

              <p className="text-slate-400 mt-3 leading-7">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-sky-400/10 text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary py-2 flex items-center gap-2"
                >
                  Live
                  <FaExternalLinkAlt size={14} />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline py-2 flex items-center gap-2"
                >
                  GitHub
                  <FaGithub size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
