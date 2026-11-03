<script setup>
import { cycles } from '../data/school'
import { form, waLink } from '../store'

const submitForm = () => {
  const text =
    `Bonjour CSP Halissa,\nJe souhaite pré-inscrire mon enfant.\n\n` +
    `• Parent : ${form.parent}\n• Téléphone : ${form.phone}\n• Niveau : ${form.level}` +
    (form.msg ? `\n• Message : ${form.msg}` : '')
  window.open(waLink(text), '_blank', 'noopener')
}
</script>

<template>
  <section id="inscription" class="section signup">
    <div class="container signup-in">
      <div class="signup-text">
        <span v-reveal class="eyebrow gold">Inscriptions ouvertes</span>
        <h2 v-reveal>Rejoignez la famille Halissa</h2>
        <p v-reveal>Remplissez ce court formulaire : votre message est envoyé directement à notre équipe via WhatsApp et nous vous recontactons rapidement.</p>
        <ul v-reveal>
          <li>Pré-inscription gratuite</li>
          <li>Visite de l'école sur rendez-vous</li>
          <li>Accompagnement personnalisé des familles</li>
        </ul>
      </div>
      <form v-reveal class="form" @submit.prevent="submitForm">
        <label>Nom du parent / tuteur
          <input v-model.trim="form.parent" required placeholder="Ex. Mme Ousmane">
        </label>
        <label>Téléphone
          <input v-model.trim="form.phone" required inputmode="tel" placeholder="Ex. +227 90 00 00 00">
        </label>
        <label>Niveau souhaité
          <select v-model="form.level" required>
            <option value="" disabled>Choisir un cycle</option>
            <option v-for="c in cycles" :key="c.id" :value="c.name">{{ c.name }}</option>
          </select>
        </label>
        <label>Message (facultatif)
          <textarea v-model.trim="form.msg" rows="3" placeholder="Votre question ou votre demande"></textarea>
        </label>
        <button class="btn btn-gold block" type="submit">Envoyer via WhatsApp</button>
      </form>
    </div>
  </section>
</template>
