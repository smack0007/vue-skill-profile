import { data } from "@/data";
import { Person } from "@/types/person";
import { Project } from "@/types/project";
import { injectable } from "inversify-props";
import { ProjectService } from "./projectService";

@injectable()
export class ProjectServiceImpl implements ProjectService {
  public getCount(): number {
    return data.projects.length;
  }

  public getProjects(): Project[] {
    return data.projects;
  }

  public getProjectCount(person: Person): number {
    return data.projects.filter((x) => x.peopleIds.includes(person.id)).length;
  }

  public getSkills(person: Person): string[] {
    return [
      ...new Set(
        data.projects
          .filter((x) => x.peopleIds.includes(person.id))
          .flatMap((x) => x.skills)
      ),
    ];
  }
}
