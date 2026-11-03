<script setup>
import { news } from '../data/school'
</script>

<template>
  <section id="actualites" class="section news">
    <div class="container">
      <div class="head center">
        <span v-reveal class="eyebrow">Actualités</span>
        <h2 v-reveal>La vie de l'école</h2>
      </div>
      <div class="news-grid">
        <article v-for="n in news" :key="n.title" v-reveal class="news-card">
          <span class="tag" :style="{ background: n.color }">{{ n.tag }}</span>
          <h3>{{ n.title }}</h3>
          <p>{{ n.text }}</p>
          <a href="#contact">En savoir plus →</a>
        </article>
      </div>
    </div>
  </section>
</template>
