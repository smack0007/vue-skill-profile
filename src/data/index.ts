import { Person } from "../types/person";
import { Project } from "../types/project";

import { people } from "./people";
import { projects } from "./projects";

export interface PersonData extends Person {}

export interface ProjectData extends Exclude<Project, "people"> {
  peopleIds: number[];
}

export const data = {
  people: people as PersonData[],

  projects: projects as ProjectData[],
};
