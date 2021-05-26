<template>
  <div class="people container">
    <header class="border-bottom row align-items-center fs-1">
      <div class="col"><i class="bi-person"></i> People</div>
      <div class="col-auto">
        <search-box
          :value="search"
          @value-changed="onSearchChanged"
        ></search-box>
      </div>
    </header>
    <people-list :people="people"></people-list>
  </div>
</template>

<script lang="ts">
import { inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";
import { PersonModel } from "@/models/personModel";
import { PeopleService } from "@/services/peopleService";
import { ProjectService } from "@/services/projectService";
import { PeopleServiceToken, ProjectServiceToken } from "@/services/tokens";
import PeopleList from "@/components/PeopleList.vue";
import SearchBox from "@/components/SearchBox.vue";

@Options({
  components: { PeopleList, SearchBox },
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
    this.allPeople = this._peopleService.getPeople();

    this.allPeople.sort((a, b) => {
      let result = a.lastName.localeCompare(b.lastName);

      if (result === 0) {
        result = a.firstName.localeCompare(b.firstName);
      }

      return result;
    });

    this.people = [...this.allPeople];
  }

  public onSearchChanged(value: string): void {
    this.search = value;

    const searchFor = this.search.toUpperCase();

    this.people = [
      ...this.allPeople.filter(
        (x) =>
          x.name.toUpperCase().includes(searchFor) ||
          x.skills.some((y) => y.toUpperCase().includes(searchFor))
      ),
    ];
  }
}
</script>
