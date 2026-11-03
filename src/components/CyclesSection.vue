<script setup>
import { ref } from 'vue'
import SmartImg from './SmartImg.vue'
import { cycles } from '../data/school'
import { form } from '../store'

const tab = ref(0)
</script>

<template>
  <section id="cycles" class="section cycles">
    <div class="container">
      <div class="head center">
        <span v-reveal class="eyebrow">Nos cycles</span>
        <h2 v-reveal>Un parcours complet, sous le même toit</h2>
        <p v-reveal>Quatre cycles pensés pour accompagner votre enfant à chaque étape de sa croissance.</p>
      </div>

      <div v-reveal class="tabs">
        <button
          v-for="(c, i) in cycles" :key="c.id"
          :class="{ active: tab === i }" :style="{ '--tc': c.color }"
          @click="tab = i"
        >
          <span class="dot"></span>{{ c.name }}
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <div :key="cycles[tab].id" class="cycle-card" :style="{ '--tc': cycles[tab].color }">
          <div class="cycle-img">
            <SmartImg :src="cycles[tab].img" :alt="cycles[tab].name" :label="cycles[tab].name" />
            <span class="age">{{ cycles[tab].age }}</span>
          </div>
          <div class="cycle-body">
            <h3>{{ cycles[tab].title }}</h3>
            <p>{{ cycles[tab].text }}</p>
            <ul>
              <li v-for="p in cycles[tab].points" :key="p">{{ p }}</li>
            </ul>
            <a href="#inscription" class="btn btn-navy" @click="form.level = cycles[tab].name">
              Inscrire en {{ cycles[tab].name }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>
