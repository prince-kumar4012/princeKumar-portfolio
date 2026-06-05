import SectionTitle from "./SectionTitle";
import { profile } from "../data/profile";
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          tag="About Me"
          title="MERN Stack Developer"
          desc="I build responsive, secure and scalable web applications."
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-7">
            <h3 className="text-2xl font-bold mb-4">Profile</h3>
            <p className="text-slate-400 leading-8">{profile.summary}</p>
            <div className="mt-6 space-y-2 text-slate-300">
              <p>
                <b>Email:</b> {profile.email}
              </p>
              <p>
                <b>Phone:</b> {profile.phone}
              </p>
              <p>
                <b>Location:</b> {profile.location}
              </p>
            </div>
          </div>
          <div className="card p-7">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p className="text-slate-300 font-semibold">
              B.Tech - Computer Science
            </p>
            <p className="text-slate-400">
              Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
            </p>
            <p className="text-slate-500 mt-2">August 2021 – June 2025</p>
            <h3 className="text-2xl font-bold mt-8 mb-4">Achievements</h3>
            {profile.achievements.map((a, i) => (
              <p key={i} className="text-slate-400 mb-2">
                ✅ {a}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
