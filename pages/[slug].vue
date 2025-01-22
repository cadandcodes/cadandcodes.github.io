<template>
    <section>
      <h1>{{ slug }}</h1>
      <p>This is a dynamic page for {{ slug }}.</p>
    </section>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  const { params } = useRoute()
  const slug = params.slug
  </script>
  