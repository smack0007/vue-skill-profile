import { PersonDto } from "@/dtos/personDto";

export interface PersonModel extends PersonDto {
  projectCount: number;
  skills: string[];
}
