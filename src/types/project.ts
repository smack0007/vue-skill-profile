import { Person } from "./person";

export interface Project {
  id: number;
  name: string;
  people: Person[];
  skills: string[];
}
