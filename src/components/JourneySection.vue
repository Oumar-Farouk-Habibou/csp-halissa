<script setup>
import { journey } from '../data/school'
</script>

<template>
  <section class="section journey">
    <div class="container">
      <div class="head center">
        <span v-reveal class="eyebrow">Le parcours d'un élève</span>
        <h2 v-reveal>De ses premiers pas au baccalauréat</h2>
      </div>
      <ol class="timeline">
        <li v-for="(s, i) in journey" :key="s.step" v-reveal :class="i % 2 ? 'right' : 'left'">
          <div class="t-dot" :style="{ background: s.color }"></div>
          <div class="t-card">
            <span class="t-age" :style="{ color: s.color }">{{ s.age }}</span>
            <h4>{{ s.step }}</h4>
            <p>{{ s.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
