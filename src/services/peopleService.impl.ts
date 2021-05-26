import { data } from "@/data";
import { PersonDto } from "@/dtos/personDto";
import { injectable } from "inversify-props";
import { PeopleService } from "./peopleService";

@injectable()
export class PeopleServiceImpl implements PeopleService {
  public getCount(): number {
    return data.people.length;
  }

  public getPeople(): PersonDto[] {
    return data.people;
  }
}
