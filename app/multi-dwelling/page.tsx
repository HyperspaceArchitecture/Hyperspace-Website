import { DisciplinePage } from "../discipline-page";
import { disciplineMetadata } from "../seo";

export const metadata = disciplineMetadata("multidwelling");

export default function MultiDwellingPage() {
  return <DisciplinePage discipline="multidwelling" />;
}
