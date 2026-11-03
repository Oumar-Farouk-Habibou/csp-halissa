<script setup>
import { computed } from 'vue'
import SmartImg from './SmartImg.vue'
import { school } from '../data/school'
const years = computed(() => new Date().getFullYear() - school.founded)
</script>

<template>
  <section id="accueil" class="hero">
    <div class="blob b1"></div><div class="blob b2"></div>
    <div class="container hero-in">
      <div class="hero-text">
        <span v-reveal class="pill">Complexe Scolaire Privé · Depuis {{ school.founded }}</span>
        <h1 v-reveal>Là où chaque enfant révèle son <em>potentiel</em>.</h1>
        <p v-reveal class="lead">Du jardin d'enfants au lycée, le CSP Halissa accompagne vos enfants vers l'excellence, avec exigence, bienveillance et ouverture sur le monde.</p>
        <div v-reveal class="hero-cta">
          <a href="#inscription" class="btn btn-gold">Pré-inscrire mon enfant</a>
          <a href="#cycles" class="btn btn-ghost">Découvrir nos cycles</a>
        </div>
        <ul v-reveal class="hero-tags">
          <li>Jardin d'enfants</li><li>Primaire</li><li>Collège</li><li>Lycée</li>
        </ul>
      </div>
      <div v-reveal class="hero-visual">
        <div class="arch">
          <SmartImg src="/assets/img/photo-1.jpg" alt="Élèves du CSP Halissa" label="Photo principale de l'école" />
        </div>
      </div>
    </div>
  </section>
</template>
