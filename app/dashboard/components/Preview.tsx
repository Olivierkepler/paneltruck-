"use client";

export default function Preview({ content }: { content: string }) {
  return (
    <div className="flex-1 p-6 bg-white border-l border-slate-200">
      <h2 className="font-semibold mb-4">Preview</h2>

      <pre className="bg-slate-900 text-green-400 p-4 rounded overflow-auto h-[600px] text-sm">
{content}
      </pre>
    </div>
  );
}
