<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th class="first-name" scope="col">First Name</th>
        <th class="last-name" scope="col">Last Name</th>
        <th class="project-count" scope="col">Projects</th>
        <th class="skills" scope="col">Skills</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in people" :key="person">
        <td class="first-name">{{ person.firstName }}</td>
        <td class="last-name">{{ person.lastName }}</td>
        <td class="project-count">{{ getProjectCount(person) }}</td>
        <td class="skills">
          <ul>
            <li v-for="skill in getSkills(person)" :key="skill">{{ skill }}</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
ul {
  display: inline;
  list-style: none;
  padding: 0;

  li {
    display: inline;
  }

  li:after {
    content: ", ";
  }

  li:last-child::after {
    content: "";
  }
}

.first-name,
.last-name {
  width: 140px;
}

.project-count {
  width: 80px;
  text-align: center;
}
</style>

<script lang="ts">
import { Person } from "@/types/person";
import { Inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";
import {
  ProjectService,
  ProjectServiceToken,
} from "../services/projectService";

@Options({
  props: {
    people: Array,
  },
})
export default class PeopleList extends Vue {
  @Inject(ProjectServiceToken) private _projectsService!: ProjectService;

  public people: Person[] = [];

  public getProjectCount(person: Person): number {
    return this._projectsService.getProjectCount(person);
  }

  public getSkills(person: Person): string[] {
    const skills = this._projectsService.getSkills(person);
    skills.sort();
    return skills;
  }
}
</script>
