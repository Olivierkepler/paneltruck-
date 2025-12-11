"use client";

import { useState } from "react";
import Kevin from "../data/Kevin.json";
import Neissa from "../data/Neissa.json";
import Olivier from "../data/Olivier.json";
import Savanah from "../data/Savanah.json";
import Thai from "../data/Thai.json";

import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const FILES = {
  Kevin,
  Neissa,
  Olivier,
  Savanah,
  Thai,
};

export default function Dashboard() {
  const [selected, setSelected] = useState<keyof typeof FILES>("Kevin");
  const [data, setData] = useState({ ...FILES[selected] });
  const [saving, setSaving] = useState(false);

  function handleField(section: string, field: string, value: string) {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...(prev as any)[section],
        [field]: value,
      },
    }));
  }

  async function saveToLocal() {
    setSaving(true);

    const res = await fetch("/api/save-json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filename: `${selected}.json`,
        content: data,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      alert("❌ Error saving: " + error.error);
      setSaving(false);
      return;
    }

    alert("✅ Saved successfully!");
    setSaving(false);
  }

  return (
    <div className="p-10 w-full max-w-full mx-auto space-y-10">

      {/* SELECT PROJECT */}
      <div className="flex gap-4 items-center">
        <label className="font-semibold text-lg">Select Project:</label>

        <select
          className="border p-2 rounded bg-white"
          value={selected}
          onChange={(e) => {
            const name = e.target.value as keyof typeof FILES;
            setSelected(name);
            setData(FILES[name]);
          }}
        >
          {Object.keys(FILES).map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* HEADER SECTION */}
      <Section title="Header">
        <Input
          value={data.header.journalTitle}
          onChange={(e) => handleField("header", "journalTitle", e.target.value)}
          placeholder="Journal Title"
        />

        <Input
          value={data.header.mainTitle}
          onChange={(e) => handleField("header", "mainTitle", e.target.value)}
          placeholder="Main Title"
        />

        <Textarea
          value={data.header.subtitle}
          onChange={(e) => handleField("header", "subtitle", e.target.value)}
          placeholder="Subtitle"
          className="min-h-[180px] text-base p-4"
        />
      </Section>

      {/* THEME */}
      <EditableSection
        title="Team Theme"
        section="themeSection"
        data={data}
        handleField={handleField}
      />

      {/* INDIVIDUAL */}
      <EditableSection
        title="Individual Focus"
        section="individualSection"
        data={data}
        handleField={handleField}
      />

      {/* DIGITAL VISION */}
      <EditableSection
        title="Digital Vision"
        section="digitalVisionSection"
        data={data}
        handleField={handleField}
      />

      {/* REFLECTION */}
      <EditableSection
        title="Reflection"
        section="reflectionSection"
        data={data}
        handleField={handleField}
      />

      {/* MAP SECTION */}
      <Section title="Map Section">
        <Input
          value={data.mapSection.title}
          onChange={(e) => handleField("mapSection", "title", e.target.value)}
          placeholder="Map Title"
        />

        <Input
          value={data.mapSection.figureCaption}
          onChange={(e) =>
            handleField("mapSection", "figureCaption", e.target.value)
          }
          placeholder="Figure Caption"
        />

        <Textarea
          value={data.mapSection.body}
          onChange={(e) => handleField("mapSection", "body", e.target.value)}
          placeholder="Map Body"
          className="min-h-[200px] text-base p-4"
        />
      </Section>

      <Button onClick={saveToLocal} disabled={saving}>
        {saving ? "Saving…" : "💾 Save Changes"}
      </Button>
    </div>
  );
}

/* ------------------------------
   Reusable Components
------------------------------ */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-slate-300 rounded p-6 space-y-4 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}

function EditableSection({
  title,
  section,
  data,
  handleField,
}: {
  title: string;
  section: string;
  data: any;
  handleField: (section: string, field: string, value: string) => void;
}) {
  return (
    <Section title={title}>
      <Input
        value={data[section].title}
        onChange={(e) => handleField(section, "title", e.target.value)}
        placeholder="Section Title"
      />

      <Textarea
        value={data[section].body}
        onChange={(e) => handleField(section, "body", e.target.value)}
        placeholder="Body text"
        className="min-h-[250px] text-base leading-relaxed p-4"
      />
    </Section>
  );
}
