<template>
  <div class="people container">
    <header class="border-bottom">
      <h2><i class="bi-person"></i> People</h2>
    </header>
    <people-list :people="people"></people-list>
  </div>
</template>

<script lang="ts">
import { inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";
import { Person } from "@/types/person";
import { PeopleService, PeopleServiceToken } from "@/services/peopleService";
import PeopleList from "@/components/PeopleList.vue";

@Options({
  components: { PeopleList },
  props: {
    people: Array,
  },
})
export default class People extends Vue {
  @inject(PeopleServiceToken) private _peopleService!: PeopleService;

  public people: Person[] = [];

  public created(): void {
    this.people = this._peopleService.getPeople();
    this.people.sort((a, b) => {
      let result = a.lastName.localeCompare(b.lastName);

      if (result === 0) {
        result = a.firstName.localeCompare(b.firstName);
      }

      return result;
    });
  }
}
</script>
