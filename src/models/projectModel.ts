import { ProjectDto } from "@/dtos/projectDto";
import { PersonModel } from "./personModel";

export interface ProjectModel extends Exclude<ProjectDto, "peopleIds"> {
  people: PersonModel[];
}
