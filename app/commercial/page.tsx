import { DisciplinePage } from "../discipline-page";
import { disciplineMetadata } from "../seo";

export const metadata = disciplineMetadata("commercial");

export default function CommercialPage() {
  return <DisciplinePage discipline="commercial" />;
}
