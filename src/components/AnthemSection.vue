<script setup>
import { ref } from 'vue'
import { anthem } from '../data/school'

const hasAudio = ref(true) // le lecteur se cache si hymne.mp3 n'existe pas
</script>

<template>
  <section id="hymne" class="section anthem">
    <div class="container">
      <div class="head center">
        <span v-reveal class="eyebrow">Notre identité</span>
        <h2 v-reveal>{{ anthem.title }}</h2>
        <p v-reveal>Par <strong>{{ anthem.author }}</strong></p>
      </div>

      <div v-reveal class="anthem-box">
        
        <div v-for="(stanza, i) in anthem.stanzas" :key="i" class="stanza">
          <p v-for="line in stanza" :key="line">{{ line }}</p>
        </div>
      </div>
    </div>
  </section>
</template>