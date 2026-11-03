<script setup>
import { values, icons } from '../data/school'
</script>

<template>
  <section id="valeurs" class="section values">
    <div class="container">
      <div class="head center light">
        <span v-reveal class="eyebrow">Pourquoi Halissa ?</span>
        <h2 v-reveal>Ce qui fait la différence</h2>
      </div>
      <div class="values-grid">
        <article
          v-for="(v, i) in values" :key="v.title" v-reveal class="value"
          :style="{ transitionDelay: (i % 3) * 90 + 'ms' }"
        >
          <div class="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" v-html="icons[v.icon]"></svg>
          </div>
          <h3>{{ v.title }}</h3>
          <p>{{ v.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
