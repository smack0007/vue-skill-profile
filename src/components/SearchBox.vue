<template>
  <div class="search-box input-group">
    <span class="input-group-text bi-search"></span>
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      aria-label="Search"
      v-model="currentValue"
      @input="onValueChanged()"
    />
  </div>
</template>

<style scoped lang="scss">
.search-box {
  max-width: 400px;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["value"],
  emits: ["value-changed"],
})
export default class SearchBox extends Vue {
  public currentValue: string = "";

  public onValueChanged(): void {
    this.$emit("value-changed", this.currentValue);
  }
}
</script>
