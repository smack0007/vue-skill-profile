import { PersonModel } from "@/models/personModel";

export interface PeopleService {
  getCount(): number;

  getPeople(ids?: number[]): PersonModel[];
}
