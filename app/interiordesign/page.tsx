import { DisciplinePage } from "../discipline-page";
import { disciplineMetadata } from "../seo";

export const metadata = disciplineMetadata("interiors");

export default function InteriorDesignPage() {
  return <DisciplinePage discipline="interiors" />;
}
