<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SmartImg from './SmartImg.vue'
import LightboxView from './LightboxView.vue'
import { gallery } from '../data/school'

const current = ref(null)
const step = (d) => { current.value = (current.value + d + gallery.length) % gallery.length }

const onKey = (e) => {
  if (current.value === null) return
  if (e.key === 'Escape') current.value = null
  if (e.key === 'ArrowRight') step(1)
  if (e.key === 'ArrowLeft') step(-1)
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <section id="galerie" class="section gallery">
    <div class="container">
      <div class="head center">
        <span v-reveal class="eyebrow">Vie à l'école</span>
        <h2 v-reveal>Le campus en images</h2>
      </div>
      <div class="grid">
        <figure v-for="(g, i) in gallery" :key="g.src" v-reveal :class="g.cls" @click="current = i">
          <SmartImg :src="g.src" :alt="g.caption" :label="g.caption" />
          <figcaption>{{ g.caption }}</figcaption>
        </figure>
      </div>
    </div>
    <LightboxView :item="current === null ? null : gallery[current]" @close="current = null" @step="step" />
  </section>
</template>
