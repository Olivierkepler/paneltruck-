"use client";

import { Textarea } from "../../components/ui/textarea";

interface EditorProps {
  content: string;
  onChange: (v: string) => void;
}

export default function Editor({ content, onChange }: EditorProps) {
  return (
    <div className="flex-1 p-6">
      <h2 className="font-semibold mb-4">JSON Editor</h2>

      <Textarea
        className="w-full h-[600px] font-mono text-sm p-4 border rounded"
        value={content}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
