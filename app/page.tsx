"use client";

import Kevin from "./data/Kevin.json";
import Neissa from "./data/Neissa.json";
import Olivier from "./data/Olivier.json";
import Savanah from "./data/Savanah.json";
import Thai from "./data/Thai.json";

import ProjectShowcase from "./components/project/ProjectShowcase";

import Kevin_map from "./components/maps/Kevin_map";
import Olivier_map from "./components/maps/Olivier_map";
import Savanah_map from "./components/maps/Savanah_map";
import Thai_map from "./components/maps/Thai_map";
import Neissa_map from "./components/maps/Neissa_map";

export default function Home() {
  return (
    <main className="w-full max-w-full mx-auto py-20 space-y-20">

      <ProjectShowcase content={Neissa} MapComponent={Neissa_map} />
      <ProjectShowcase content={Kevin} MapComponent={Kevin_map} />
      <ProjectShowcase content={Olivier} MapComponent={Olivier_map} />
      <ProjectShowcase content={Savanah} MapComponent={Savanah_map} />
      <ProjectShowcase content={Thai} MapComponent={Thai_map} />

    </main>
  );
}
