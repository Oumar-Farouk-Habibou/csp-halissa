<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ src: String, alt: String, label: String })
const failed = ref(false)
watch(() => props.src, () => { failed.value = false })
</script>

<template>
  <div class="img-wrap">
    <img v-if="!failed" :src="src" :alt="alt" loading="lazy" @error="failed = true">
    <div v-else class="ph"><span>{{ label || alt }}</span></div>
  </div>
</template>
