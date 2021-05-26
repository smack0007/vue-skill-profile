<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th class="name" scope="col">Name</th>
        <th class="skills" scope="col">Skills</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="project in projects" :key="project">
        <td class="name">{{ project.name }}</td>
        <td class="skills">
          <ul>
            <li v-for="skill in project.skills" :key="skill">{{ skill }}</li>
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

.name {
  width: 250px;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Project } from "@/types/project";

@Options({
  props: {
    projects: Array,
  },
})
export default class ProjectList extends Vue {
  public projects: Project[] = [];
}
</script>
