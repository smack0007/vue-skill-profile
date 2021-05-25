import { Person } from "@/types/person";

export const PeopleServiceToken = Symbol.for("PeopleService");

export interface PeopleService {
  getPeople(): Person[];
}
