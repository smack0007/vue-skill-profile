import { PersonProjectInfoModel } from "@/models/personProjectInfoModel";
import { ProjectModel } from "@/models/projectModel";

export interface ProjectService {
  getCount(): number;

  getProjects(personId?: number): ProjectModel[];

  getPersonProjectInfo(personId?: number): PersonProjectInfoModel;
}
