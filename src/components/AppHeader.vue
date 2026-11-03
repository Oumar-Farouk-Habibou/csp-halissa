<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SmartImg from './SmartImg.vue'
import { navLinks } from '../data/school'

const scrolled = ref(false)
const menuOpen = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 30 }
const closeMenu = () => { menuOpen.value = false }

onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="container header-in">
      <a href="#accueil" class="brand" @click="closeMenu">
        <SmartImg class="brand-logo" src="/assets/img/logo.png" alt="Logo CSP Halissa" label="Logo" />
        <span class="brand-name">CSP <b>Halissa</b></span>
      </a>
      <nav class="nav" :class="{ open: menuOpen }">
        <a v-for="l in navLinks" :key="l.href" :href="l.href" @click="closeMenu">{{ l.label }}</a>
        <a href="#inscription" class="btn btn-gold nav-cta" @click="closeMenu">Inscrire mon enfant</a>
      </nav>
      <button class="burger" :class="{ open: menuOpen }" aria-label="Menu" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>
