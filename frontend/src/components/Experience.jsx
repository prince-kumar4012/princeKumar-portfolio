import SectionTitle from "./SectionTitle";
import { profile } from "../data/profile";
export default function Experience() {
  return (
    <section id="experience" className="section bg-slate-950/60">
      <div className="container">
        <SectionTitle tag="Experience" title="Internship Experience" />
        {profile.experience.map((e, i) => (
          <div key={i} className="card p-7 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between gap-2">
              <div>
                <h3 className="text-2xl font-bold">{e.role}</h3>
                <p className="text-sky-400 font-semibold">{e.company}</p>
              </div>
              <p className="text-slate-400">{e.date}</p>
            </div>
            <p className="text-slate-500 mt-1">{e.location}</p>
            <ul className="mt-5 space-y-3">
              {e.points.map((p) => (
                <li key={p} className="text-slate-300">
                  • {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
