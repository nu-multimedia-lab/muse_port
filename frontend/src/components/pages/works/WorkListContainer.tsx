import { WorkListPresentation } from "./WorkListPresentation";
import { getAllWorks } from "@/lib/apis/work";
import { Work } from "@/lib/types";

export const WorkListContainer = async () => {
  const works: Work[] = await getAllWorks();
  return <WorkListPresentation works={works} />;
};
