import { data } from "@/data";
import { PersonDto } from "@/dtos/personDto";
import { PersonModel } from "@/models/personModel";
import { inject, injectable } from "inversify-props";
import { InjectorService } from "./injectorService";
import { PeopleService } from "./peopleService";
import { InjectorServiceToken, ProjectServiceToken } from "./tokens";
import { ProjectService } from "./projectService";

@injectable()
export class PeopleServiceImpl implements PeopleService {
  @inject(InjectorServiceToken) private _injector!: InjectorService;

  public getCount(): number {
    return data.people.length;
  }

  public getPeople(ids?: number[]): PersonModel[] {
    if (ids === undefined) {
      return data.people.map((x) => this.convertDtoToModel(x));
    }

    return data.people
      .filter((x) => ids.includes(x.id))
      .map((x) => this.convertDtoToModel(x));
  }

  private convertDtoToModel(person: PersonDto): PersonModel {
    const projectInfo = this._injector
      .get<ProjectService>(ProjectServiceToken)
      .getPersonProjectInfo(person.id);

    return new PersonModel(
      person.id,
      person.firstName,
      person.lastName,
      projectInfo.projectCount,
      projectInfo.skills
    );
  }
}
