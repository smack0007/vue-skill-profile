<template>
  <table class="table">
    <thead>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Projects</th>
      <th scope="col">Skills</th>
    </thead>
    <tbody>
      <tr v-for="person in people" :key="person">
        <td>{{ person.firstName }}</td>
        <td>{{ person.lastName }}</td>
        <td>{{ getProjectCount(person) }}</td>
        <td>
          <ul>
            <li v-for="skill in getSkills(person)" :key="skill">{{ skill }}</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

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
    return this._projectsService.getSkills(person);
  }
}
</script>
