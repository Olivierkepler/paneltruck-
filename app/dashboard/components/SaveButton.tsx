"use client";

import { Button } from "../../components/ui/button";

export default function SaveButton({ onSave, saving }: { onSave: () => void; saving: boolean }) {
  return (
    <Button className="mt-4" onClick={onSave} disabled={saving}>
      {saving ? "Saving..." : "💾 Save Changes"}
    </Button>
  );
}
