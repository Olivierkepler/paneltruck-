"use client";

interface FileListProps {
  files: string[];
  selected: string;
  onSelect: (file: string) => void;
}

export default function FileList({ files, selected, onSelect }: FileListProps) {
  return (
    <div className="w-64 bg-white border-r border-slate-200 p-4">
      <h2 className="font-semibold mb-4">Files</h2>

      <ul className="space-y-2">
        {files.map((file) => (
          <li
            key={file}
            onClick={() => onSelect(file)}
            className={`p-2 rounded cursor-pointer ${
              selected === file
                ? "bg-slate-900 text-white"
                : "hover:bg-slate-200"
            }`}
          >
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
}
