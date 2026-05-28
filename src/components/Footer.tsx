export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-bold">Herambh Construction</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Quality construction across residential, commercial, and industrial projects.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 font-semibold mb-4">Contact</p>
            <p className="text-sm leading-7">Pavan Bachhav</p>
            <p className="text-sm leading-7">City Center Mall, Nashik, MH</p>
            <p className="text-sm leading-7">+91 9763165665</p>
            <p className="text-sm leading-7">bachhavpk156@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950 px-6 py-6 text-center text-xs text-slate-500">
        Herambh Construction © {year}. All rights reserved.
      </div>
    </footer>
  );
}
