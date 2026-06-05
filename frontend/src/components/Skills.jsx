// import SectionTitle from "./SectionTitle";
// import { profile } from "../data/profile";
// export default function Skills() {
//   return (
//     <section id="skills" className="section bg-slate-950/60">
//       <div className="container">
//         <SectionTitle tag="Skills" title="Technologies I Use" />
//         <div className="flex flex-wrap justify-center gap-3">
//           {profile.skills.map((s) => (
//             <span
//               key={s}
//               className="px-5 py-3 rounded-full bg-slate-900 border border-slate-800 hover:border-sky-400 transition"
//             >
//               {s}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import SectionTitle from "./SectionTitle";
// import { profile } from "../data/profile";

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="section bg-slate-50 dark:bg-slate-950/60 transition-colors duration-300"
//     >
//       <div className="container">
//         <SectionTitle tag="Skills" title="Technologies I Use" />

//         <div className="flex flex-wrap justify-center gap-4 mt-10">
//           {profile.skills.map((skill) => (
//             <span
//               key={skill}
//               className="
//                 px-5 py-3
//                 rounded-full
//                 font-medium
//                 text-slate-700 dark:text-slate-200
//                 bg-white dark:bg-slate-900
//                 border border-slate-200 dark:border-slate-800
//                 shadow-sm
//                 hover:border-sky-400
//                 hover:text-sky-500
//                 hover:-translate-y-1
//                 hover:shadow-lg
//                 dark:hover:shadow-sky-500/10
//                 transition-all duration-300
//                 cursor-default
//               "
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import SectionTitle from "./SectionTitle";
import { profile } from "../data/profile";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section transition-colors duration-300"
    >
      <div className="container">
        <SectionTitle tag="Skills" title="Technologies I Use" />

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="
                px-5 py-3
                rounded-full
                font-medium
                text-slate-700 dark:text-slate-200
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                shadow-sm
                hover:border-sky-400
                hover:text-sky-500
                hover:-translate-y-1
                hover:shadow-lg
                dark:hover:shadow-sky-500/10
                transition-all duration-300
                cursor-default
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}