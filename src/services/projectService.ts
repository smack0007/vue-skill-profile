import { Person } from "@/types/person";
import { Project } from "@/types/project";

export const ProjectServiceToken = Symbol.for("ProjectService");

export interface ProjectService {
  getProjectCount(person: Person): number;

  getSkills(person: Person): string[];
}
