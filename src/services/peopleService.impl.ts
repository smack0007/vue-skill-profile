import { data } from "@/data";
import { Person } from "@/types/person";
import { injectable } from "inversify-props";
import { PeopleService } from "./peopleService";

@injectable()
export class PeopleServiceImpl implements PeopleService {
  public getCount(): number {
    return data.people.length;
  }

  public getPeople(): Person[] {
    return data.people;
  }
}
