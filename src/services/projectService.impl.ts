import { data } from "@/data";
import { ProjectDto } from "@/dtos/projectDto";
import { PersonProjectInfoModel } from "@/models/personProjectInfoModel";
import { ProjectModel } from "@/models/projectModel";
import { inject, injectable } from "inversify-props";
import { InjectorService } from "./injectorService";
import { PeopleService } from "./peopleService";
import { ProjectService } from "./projectService";
import { InjectorServiceToken, PeopleServiceToken } from "./tokens";

@injectable()
export class ProjectServiceImpl implements ProjectService {
  @inject(InjectorServiceToken) private _injector!: InjectorService;

  public getCount(): number {
    return data.projects.length;
  }

  public getProjects(personId?: number): ProjectModel[] {
    if (personId === undefined) {
      return data.projects.map((x) => this.convertDtoToModel(x));
    }

    return data.projects
      .filter((x) => x.peopleIds.includes(personId))
      .map((x) => this.convertDtoToModel(x));
  }

  public getPersonProjectInfo(personId: number): PersonProjectInfoModel {
    const projects = data.projects.filter((x) =>
      x.peopleIds.includes(personId)
    );

    const skills = [
      ...new Set(
        projects
          .filter((x) => x.peopleIds.includes(personId))
          .flatMap((x) => x.skills)
      ),
    ];

    return {
      projectCount: projects.length,
      skills,
    };
  }

  private convertDtoToModel(project: ProjectDto): ProjectModel {
    const people = this._injector
      .get<PeopleService>(PeopleServiceToken)
      .getPeople(project.peopleIds);

    return {
      ...project,
      people,
    };
  }
}
