<template>
  <div class="people">
    <i class=""></i>
    <people-list :people="people"></people-list>
  </div>
</template>

<script lang="ts">
import { Inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";
import { Person } from "@/types/person";
import { PeopleService, PeopleServiceToken } from "@/services/peopleService";
import PeopleList from "@/components/PeopleList.vue";

@Options({
  components: { PeopleList },
  props: {
    people: [],
  },
})
export default class People extends Vue {
  @Inject(PeopleServiceToken) private _peopleService!: PeopleService;

  public people: Person[] = [];

  public created(): void {
    this.people = this._peopleService.getPeople();
  }
}
</script>
