<script setup>
import DisplayForm from "../components/Form.vue";
</script>

<template>
  <main class="home">
    <DisplayForm />
  </main>
</template>

<style>
  @media (min-width: 1024px) {
    .home {
      min-height: 100vh;
      display: inline-flex;
      align-items: center;
    }
  }
  </style>