<script setup>
import SmartImg from './SmartImg.vue'
import { school } from '../data/school'
</script>

<template>
  <section id="ecole" class="section founder">
    <div class="container founder-in">
      <div v-reveal class="founder-photo">
        <div class="frame">
          <SmartImg src="/assets/img/fondatrice.jpg" alt="La fondatrice du CSP Halissa" label="Photo de la fondatrice" />
        </div>
        <div class="since">Depuis<br><b>{{ school.founded }}</b></div>
      </div>
      <div class="founder-text">
        <span v-reveal class="eyebrow">Le mot de la fondatrice</span>
        <h2 v-reveal>Une école née d'une conviction : l'éducation change des vies.</h2>
        <blockquote v-reveal>« {{ school.founderQuote }} »</blockquote>
        <p v-reveal class="sign"><strong>{{ school.founderName }}</strong><br>Fondatrice du CSP Halissa</p>
        <div v-reveal class="mv">
          <div><h4>Notre mission</h4><p>Offrir à chaque enfant un cadre d'apprentissage rigoureux, sécurisant et stimulant, pour construire des élèves compétents et responsables.</p></div>
          <div><h4>Notre vision</h4><p>Une école de référence où chaque élève trouve sa voie et réussit, du premier jour de maternelle jusqu'au baccalauréat.</p></div>
        </div>
      </div>
    </div>
  </section>
</template>
