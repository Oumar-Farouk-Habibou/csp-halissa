<script setup>
import { school } from '../data/school'
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="head center">
        <span v-reveal class="eyebrow">Contact</span>
        <h2 v-reveal>Nous sommes à votre écoute</h2>
      </div>
      <div class="contact-grid">
        <div v-reveal class="c-card"><div class="c-ico">📍</div><h4>Adresse</h4><p>{{ school.address }}</p></div>
        <div v-reveal class="c-card"><div class="c-ico">📞</div><h4>Téléphone</h4><p>{{ school.phone }}</p></div>
        <div v-reveal class="c-card"><div class="c-ico">✉️</div><h4>E-mail</h4><p>{{ school.email }}</p></div>
        <div v-reveal class="c-card"><div class="c-ico">🕗</div><h4>Horaires</h4><p>{{ school.hours }}</p></div>
      </div>
    </div>
  </section>
</template>
