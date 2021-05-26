import { Person } from "@/types/person";

export interface PersonModel extends Person {
  projectCount: number;
  skills: string[];
}
