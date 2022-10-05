<script setup>
  import DisplayPosts from "../components/Posts.vue";
  </script>

<template>
  <div class="about">
    <DisplayPosts />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>
