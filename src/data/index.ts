import { PersonDto } from "../dtos/personDto";
import { ProjectDto } from "../dtos/projectDto";

import { people } from "./people";
import { projects } from "./projects";

export const data = {
  people: people as PersonDto[],

  projects: projects as ProjectDto[],
};
