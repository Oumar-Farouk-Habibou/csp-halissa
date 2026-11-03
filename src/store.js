import { reactive } from 'vue'
import { school } from './data/school'

/* État partagé : le formulaire est rempli depuis la section Cycles */
export const form = reactive({ parent: '', phone: '', level: '', msg: '' })

export const waLink = (text) => `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(text)}`
