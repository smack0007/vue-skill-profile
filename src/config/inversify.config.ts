import { container } from "inversify-props";
import { PeopleService } from "@/services/peopleService";
import { PeopleServiceImpl } from "@/services/peopleService.impl";
import { ProjectService } from "@/services/projectService";
import { ProjectServiceImpl } from "@/services/projectService.impl";
import {
  InjectorServiceToken,
  PeopleServiceToken,
  ProjectServiceToken,
} from "@/services/tokens";
import { InjectorService } from "@/services/injectorService";

container
  .bind<InjectorService>(InjectorServiceToken)
  .toConstantValue(container);

container.addSingleton<PeopleService>(PeopleServiceImpl, PeopleServiceToken);
container.addSingleton<ProjectService>(ProjectServiceImpl, ProjectServiceToken);
