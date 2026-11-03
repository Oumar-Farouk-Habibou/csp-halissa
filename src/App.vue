<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeBand from './components/MarqueeBand.vue'
import StatsBar from './components/StatsBar.vue'
import FounderSection from './components/FounderSection.vue'
import CyclesSection from './components/CyclesSection.vue'
import ValuesSection from './components/ValuesSection.vue'
import JourneySection from './components/JourneySection.vue'
import GallerySection from './components/GallerySection.vue'
import NewsSection from './components/NewsSection.vue'
import SignupSection from './components/SignupSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import AnthemSection from './components/AnthemSection.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <MarqueeBand />
    <StatsBar />
    <FounderSection />
    <CyclesSection />
    <AnthemSection />
    <ValuesSection />
    <JourneySection />
    <GallerySection />
    <NewsSection />
    <SignupSection />
    <ContactSection />
  </main>
  <AppFooter />
  <WhatsAppButton />
</template>
