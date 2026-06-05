import { profile } from '../data/profile';
export default function Footer(){return <footer className="py-8 border-t border-slate-800"><div className="container flex flex-col md:flex-row gap-3 justify-between text-slate-400 text-sm"><p>© {new Date().getFullYear()} Prince Kumar. All rights reserved.</p><p>{profile.email}</p></div></footer>}
