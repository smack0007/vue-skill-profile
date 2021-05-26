<template>
  <div class="people container">
    <header class="border-bottom row align-items-center fs-1">
      <div class="col"><i class="bi-person"></i> People</div>
      <div class="col-auto">
        <div class="input-group search-box">
          <span class="input-group-text bi-search"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            v-model="search"
            @input="onSearchChange()"
          />
        </div>
      </div>
    </header>
    <people-list :people="people"></people-list>
  </div>
</template>

<style scoped lang="scss">
.search-box {
  max-width: 400px;
}
</style>

<script lang="ts">
import { inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";
import { PersonModel } from "@/models/personModel";
import { PeopleService, PeopleServiceToken } from "@/services/peopleService";
import PeopleList from "@/components/PeopleList.vue";
import { ProjectService, ProjectServiceToken } from "@/services/projectService";

@Options({
  components: { PeopleList },
  props: {
    people: Array,
    search: String,
  },
})
export default class People extends Vue {
  @inject(PeopleServiceToken) private _peopleService!: PeopleService;
  @inject(ProjectServiceToken) private _projectsService!: ProjectService;

  private allPeople: PersonModel[] = [];
  public people: PersonModel[] = [];

  public search: string = "";

  public created(): void {
    this.allPeople = this._peopleService.getPeople().map((x) => {
      const skills = this._projectsService.getSkills(x);
      skills.sort();

      return {
        ...x,
        projectCount: this._projectsService.getProjectCount(x),
        skills,
      };
    });
    this.allPeople.sort((a, b) => {
      let result = a.lastName.localeCompare(b.lastName);

      if (result === 0) {
        result = a.firstName.localeCompare(b.firstName);
      }

      return result;
    });

    this.people = [...this.allPeople];
  }

  public onSearchChange(): void {
    const searchFor = this.search.toUpperCase();

    this.people = [
      ...this.allPeople.filter(
        (x) =>
          x.firstName.toUpperCase().includes(searchFor) ||
          x.lastName.toUpperCase().includes(searchFor) ||
          x.skills.some((y) => y.toUpperCase().includes(searchFor))
      ),
    ];
  }
}
</script>
