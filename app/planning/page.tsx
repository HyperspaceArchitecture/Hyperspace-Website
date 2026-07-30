import { DisciplinePage } from "../discipline-page";
import { disciplineMetadata } from "../seo";

export const metadata = disciplineMetadata("planning");

export default function PlanningPage() {
  return <DisciplinePage discipline="planning" />;
}
