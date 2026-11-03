<script setup>
import SmartImg from './SmartImg.vue'
defineProps({ item: Object })
defineEmits(['close', 'step'])
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="item" class="lightbox" @click.self="$emit('close')">
        <button class="lb-close" aria-label="Fermer" @click="$emit('close')">✕</button>
        <button class="lb-nav prev" aria-label="Précédent" @click="$emit('step', -1)">‹</button>
        <div class="lb-body">
          <SmartImg :src="item.src" :alt="item.caption" :label="item.caption" />
          <p>{{ item.caption }}</p>
        </div>
        <button class="lb-nav next" aria-label="Suivant" @click="$emit('step', 1)">›</button>
      </div>
    </transition>
  </Teleport>
</template>
