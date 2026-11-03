<script setup>
import SmartImg from './SmartImg.vue'
import { school, navLinks } from '../data/school'
</script>

<template>
  <footer class="footer">
    <div class="container footer-in">
      <div class="f-brand">
        <SmartImg class="brand-logo" src="/assets/img/logo.png" alt="Logo CSP Halissa" label="Logo" />
        <div>
          <strong>CSP Halissa</strong>
          <p>Complexe Scolaire Privé · Du jardin d'enfants au lycée · Depuis {{ school.founded }}</p>
        </div>
      </div>
      <nav class="f-links">
        <a v-for="l in navLinks" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>
    </div>
    <div class="container copy">© {{ new Date().getFullYear() }} CSP Halissa — Développé avec ❤️ par Oumar Farouk — Tous droits réservés.</div>
  </footer>
</template>
