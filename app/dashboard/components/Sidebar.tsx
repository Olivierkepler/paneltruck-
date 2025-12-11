"use client";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-slate-200 p-6 space-y-6">
      <h1 className="text-xl font-bold">📘 Dashboard</h1>

      <nav className="space-y-4">
        <a className="block text-slate-700 hover:underline cursor-pointer">
          JSON Editor
        </a>
        <a className="block text-slate-700 hover:underline cursor-pointer">
          Preview
        </a>
        <a className="block text-slate-700 hover:underline cursor-pointer">
          Settings
        </a>
      </nav>
    </div>
  );
}
