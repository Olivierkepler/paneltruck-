"use client";

import FeaturedMap from "./FeaturedMap";
import JournalEntry from "./JournalEntry";
import ZoomableMap from "./ZoomableMap";
import entryData from "../data/entries/baudelaires-solitude.json";

export default function EntryOne() {
  return (
<JournalEntry
  title={entryData.title}
  theme={entryData.theme}
  individual={entryData.individual}
  vision={entryData.vision}
  reflection={entryData.reflection}
  mapComponent={
    <FeaturedMap>
      <ZoomableMap />
    </FeaturedMap>
  }
/>

  );
}
