import { PersonDto } from "@/dtos/personDto";
import { ProjectDto } from "@/dtos/projectDto";

export const ProjectServiceToken = Symbol.for("ProjectService");

export interface ProjectService {
  getCount(): number;

  getProjects(): ProjectDto[];

  getProjectCount(person: PersonDto): number;

  getSkills(person: PersonDto): string[];
}
