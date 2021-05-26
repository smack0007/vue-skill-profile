<template>
  <div class="projects container">
    <header class="border-bottom">
      <h2><i class="bi-card-checklist"></i> Projects</h2>
    </header>
    <project-list :projects="projects"></project-list>
  </div>
</template>

<script lang="ts">
import { ProjectService, ProjectServiceToken } from "@/services/projectService";
import { inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";
import { ProjectDto } from "@/dtos/projectDto";
import ProjectList from "@/components/ProjectList.vue";

@Options({
  components: { ProjectList },
  props: {
    projects: Array,
  },
})
export default class Projects extends Vue {
  @inject(ProjectServiceToken) private _projectService!: ProjectService;

  public projects: ProjectDto[] = [];

  public created(): void {
    this.projects = this._projectService.getProjects();
    this.projects.sort((a, b) => a.name.localeCompare(b.name));
  }
}
</script>
