import { PersonDto } from "./personDto";

export interface ProjectDto {
  id: number;
  name: string;
  people: PersonDto[];
  skills: string[];
}
