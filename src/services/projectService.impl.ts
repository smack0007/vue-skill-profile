import { data } from "@/data";
import { PersonDto } from "@/dtos/personDto";
import { ProjectDto } from "@/dtos/projectDto";
import { injectable } from "inversify-props";
import { ProjectService } from "./projectService";

@injectable()
export class ProjectServiceImpl implements ProjectService {
  public getCount(): number {
    return data.projects.length;
  }

  public getProjects(): ProjectDto[] {
    return data.projects;
  }

  public getProjectCount(person: PersonDto): number {
    return data.projects.filter((x) => x.peopleIds.includes(person.id)).length;
  }

  public getSkills(person: PersonDto): string[] {
    return [
      ...new Set(
        data.projects
          .filter((x) => x.peopleIds.includes(person.id))
          .flatMap((x) => x.skills)
      ),
    ];
  }
}
