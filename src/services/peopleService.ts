import { PersonDto } from "@/dtos/personDto";

export const PeopleServiceToken = Symbol.for("PeopleService");

export interface PeopleService {
  getCount(): number;

  getPeople(): PersonDto[];
}
