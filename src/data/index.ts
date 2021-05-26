import { PersonDto } from "../dtos/personDto";
import { ProjectDto } from "../dtos/projectDto";

import { people } from "./people";
import { projects } from "./projects";

export interface PersonData extends PersonDto {}

export interface ProjectData extends Exclude<ProjectDto, "people"> {
  peopleIds: number[];
}

export const data = {
  people: people as PersonData[],

  projects: projects as ProjectData[],
};
