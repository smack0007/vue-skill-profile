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
        <td class="project-count">{{ person.projectCount }}</td>
        <td class="skills">
          <ul>
            <li v-for="skill in person.skills" :key="skill">{{ skill }}</li>
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
import { PersonModel } from "@/models/personModel";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    people: Array,
  },
})
export default class PeopleList extends Vue {
  public people: PersonModel[] = [];
}
</script>
