import { DisciplinePage } from "../discipline-page";
import { disciplineMetadata } from "../seo";

export const metadata = disciplineMetadata("residential");

export default function ResidentialPage() {
  return <DisciplinePage discipline="residential" />;
}
