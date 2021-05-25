import { container } from "inversify-props";
import { PeopleService, PeopleServiceToken } from "@/services/peopleService";
import { PeopleServiceImpl } from "@/services/peopleService.impl";
import { ProjectService, ProjectServiceToken } from "@/services/projectService";
import { ProjectServiceImpl } from "@/services/projectService.impl";

container.addSingleton<PeopleService>(PeopleServiceImpl, PeopleServiceToken);
container.addSingleton<ProjectService>(ProjectServiceImpl, ProjectServiceToken);
