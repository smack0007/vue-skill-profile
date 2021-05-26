<template>
  <div class="home container">
    <header class="border-bottom row align-items-center fs-1">
      <div class="col"><i class="bi-house"></i> Home</div>
    </header>
    <div class="container bg-light mt-4 rounded-3">
      <div class="row">
        <router-link to="/people" class="col text-center fs-1"
          ><i class="bi-person"></i>
          <span>{{ peopleCount }} People</span></router-link
        >
        <router-link to="/projects" class="col text-center fs-1"
          ><i class="bi-card-checklist"></i>
          <span>{{ projectCount }} Projects</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
a {
  display: block;
  text-decoration: none;
  color: black;

  span {
    display: inline-block;
    margin-left: 8px;
  }
}

a:hover span {
  text-decoration: underline;
}
</style>

<script lang="ts">
import { PeopleService } from "@/services/peopleService";
import { ProjectService } from "@/services/projectService";
import { PeopleServiceToken, ProjectServiceToken } from "@/services/tokens";
import { inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    peopleCount: Number,
    projectCount: Number,
  },
})
export default class Home extends Vue {
  @inject(PeopleServiceToken) private _peopleService!: PeopleService;
  @inject(ProjectServiceToken) private _projectService!: ProjectService;

  public peopleCount: number = 0;
  public projectCount: number = 0;

  public created(): void {
    this.peopleCount = this._peopleService.getCount();
    this.projectCount = this._projectService.getCount();
  }
}
</script>
