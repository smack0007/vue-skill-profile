<template>
  <div class="projects container">
    <header class="border-bottom row align-items-center fs-1">
      <div class="col"><i class="bi-card-checklist"></i> Projects</div>
      <div class="col-auto">
        <search-box
          :value="search"
          @value-changed="onSearchChanged"
        ></search-box>
      </div>
    </header>
    <project-list :projects="projects"></project-list>
  </div>
</template>

<script lang="ts">
import { ProjectService } from "@/services/projectService";
import { inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";
import { ProjectModel } from "@/models/projectModel";
import { ProjectServiceToken } from "@/services/tokens";
import ProjectList from "@/components/ProjectList.vue";
import SearchBox from "@/components/SearchBox.vue";

@Options({
  components: { ProjectList, SearchBox },
  props: {
    projects: Array,
  },
})
export default class Projects extends Vue {
  @inject(ProjectServiceToken) private _projectService!: ProjectService;

  private allProjects: ProjectModel[] = [];
  public projects: ProjectModel[] = [];

  public search: string = "";

  public created(): void {
    this.allProjects = this._projectService.getProjects().map((x) => {
      return {
        ...x,
        // people: this._peopleService.getPeople(x.peopleIds),
      };
    });

    this.allProjects.sort((a, b) => a.name.localeCompare(b.name));

    this.projects = [...this.allProjects];
  }

  public onSearchChanged(value: string): void {
    this.search = value;

    const searchFor = this.search.toUpperCase();

    this.projects = [
      ...this.allProjects.filter(
        (x) =>
          x.name.toUpperCase().includes(searchFor) ||
          x.skills.some((y) => y.toUpperCase().includes(searchFor)) ||
          x.people.some((y) => y.name.toUpperCase().includes(searchFor))
      ),
    ];
  }
}
</script>
