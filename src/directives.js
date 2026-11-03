/* Apparition au scroll (v-reveal) et compteurs animés (v-count) */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target) }
  })
}, { threshold: 0.12 })

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return
    const el = en.target
    countObserver.unobserve(el)
    const to = Number(el.dataset.to)
    const suffix = el.dataset.suffix || ''
    const plain = el.dataset.plain
    const dur = 1400
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1)
      const v = Math.round(to * (1 - Math.pow(1 - p, 3)))
      el.textContent = (plain ? v : v.toLocaleString('fr-FR')) + (p === 1 ? suffix : '')
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
}, { threshold: 0.4 })

export default {
  install(app) {
    app.directive('reveal', {
      mounted(el) { el.classList.add('reveal'); revealObserver.observe(el) }
    })
    app.directive('count', {
      mounted(el, b) { el.dataset.to = b.value; countObserver.observe(el) },
      updated(el, b) { el.dataset.to = b.value }
    })
  }
}
