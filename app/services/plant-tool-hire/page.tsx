import { permanentRedirect } from "next/navigation";

// "Plant & Tool Hire" was merged into the Equipment Hire service. Permanently
// redirect the legacy URL so existing inbound links and bookmarks aren't lost.
export default function PlantToolHirePage() {
  permanentRedirect("/services/equipment-hire");
}
