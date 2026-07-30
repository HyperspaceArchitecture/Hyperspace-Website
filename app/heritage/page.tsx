import { DisciplinePage } from "../discipline-page";
import { disciplineMetadata } from "../seo";

export const metadata = disciplineMetadata("heritage");

export default function HeritagePage() {
  return <DisciplinePage discipline="heritage" />;
}
