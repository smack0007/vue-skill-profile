<template>
  <div class="about container">
    <header class="border-bottom row align-items-center fs-1">
      <div class="col"><i class="bi-info-circle"></i> About</div>
    </header>

    <div
      class="container bg-light mt-4 rounded-3"
      v-html="require(`!!html-loader!markdown-loader!../../README.md`)"
    ></div>
  </div>
</template>

<style scoped lang="ts"></style>
