<script setup>
import { computed } from 'vue'
import { school } from '../data/school'
const years = computed(() => new Date().getFullYear() - school.founded)
</script>

<template>
  <section class="stats">
    <div class="container stats-grid">
      <div v-reveal class="stat"><b v-count="school.founded" data-plain="1">0</b><span>Année de création</span></div>
      <div v-reveal class="stat"><b v-count="years" data-suffix="+">0</b><span>Années au service des familles</span></div>
      <div v-reveal class="stat"><b v-count="4">0</b><span>Cycles : de la maternelle à la terminale</span></div>
      <div v-reveal class="stat"><b v-count="1" data-suffix=" vision">0</b><span>Former des citoyens responsables</span></div>
    </div>
  </section>
</template>
