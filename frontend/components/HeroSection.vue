<template>
  <section id="hero" class="hero-section">
    <!-- Mouse follower glow -->
    <div class="mouse-glow" ref="mouseGlowRef" aria-hidden="true" />
    <!-- Floating decorative shapes -->
    <div class="floating-shapes" aria-hidden="true">
      <div v-for="shape in shapes" :key="shape.id" class="shape" :class="shape.type" :style="shape.style" />
    </div>
    <div class="hero-blob hero-blob-1" aria-hidden="true" />
    <div class="hero-blob hero-blob-2" aria-hidden="true" />
    <div class="hero-grid" aria-hidden="true" />

    <div class="container hero-content">
      <div class="hero-left">
        <p class="hero-greeting reveal">
          <span class="greeting-dot" />Hello, World! — I'm
        </p>

        <h1 class="hero-name reveal reveal-delay-1">
          Jeet<br /><span class="hero-name-accent">Pal</span>
        </h1>

        <div class="hero-title-row reveal reveal-delay-2">
          <span class="hero-title-static">Full Stack Developer &amp;</span>
          <span class="hero-title-typing">
            <span>{{ typingText }}</span><span class="cursor">|</span>
          </span>
        </div>

        <p class="hero-bio reveal reveal-delay-3">
          <strong>1+ year</strong> of professional experience at
          <span class="highlight-company">CodelogicX</span> building production-ready full stack applications.
          I specialise in <strong>Nuxt.js</strong>, <strong>Vue.js</strong>, <strong>NestJS</strong>,
          <strong>Node.js</strong>, <strong>Sequelize</strong>, and <strong>MySQL</strong> — focused on clean
          interfaces, scalable architecture, and reliable delivery.
        </p>

        <div class="hero-actions reveal reveal-delay-4">
          <a href="#experience" class="btn btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l18 0M13 6l6 6-6 6"/></svg>
            View Experience
          </a>
          <a href="#contact" class="btn btn-outline">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Hire Me
          </a>
          <a href="https://www.linkedin.com/in/jeet-pal/" target="_blank" rel="noopener" class="btn btn-outline">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
        </div>

        <div class="hero-stats reveal reveal-delay-5">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator" aria-hidden="true">
      <span>Scroll</span>
      <div class="scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mouseGlowRef = ref<HTMLDivElement | null>(null)

const typingWords = [
  'Nuxt.js Builder',
  'Vue.js Developer',
  'Clean Coder',
  'NestJS Developer',
  'Problem Solver',
]
const typingText = ref('')
let wordIndex = 0, charIndex = 0, deleting = false

const stats = [
  { value: '1+',  label: 'Years Experience' },
  { value: '3+',  label: 'Projects Shipped'  },
  { value: 'AI',  label: 'Workflow Boost'     },
  { value: '10+', label: 'Technologies'       },
]

const shapes = Array.from({ length: 8 }, (_, i) => {
  const types = ['circle', 'square', 'triangle'] as const
  return {
    id: i,
    type: types[i % 3],
    style: {
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      width: `${20 + Math.random() * 40}px`,
      height: `${20 + Math.random() * 40}px`,
      animationDuration: `${12 + Math.random() * 18}s`,
      animationDelay: `${Math.random() * -20}s`,
      opacity: 0.15 + Math.random() * 0.2,
    },
  }
})

onMounted(() => {
  document.querySelectorAll('.hero-section .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 120)
  })

  const type = () => {
    const word = typingWords[wordIndex]
    typingText.value = deleting
      ? word.slice(0, --charIndex)
      : word.slice(0, ++charIndex)

    if (!deleting && charIndex === word.length) {
      setTimeout(() => { deleting = true }, 1800)
    } else if (deleting && charIndex === 0) {
      deleting = false
      wordIndex = (wordIndex + 1) % typingWords.length
    }
    setTimeout(type, deleting ? 55 : 95)
  }
  setTimeout(type, 700)

  // Mouse follower
  const glow = mouseGlowRef.value
  if (!glow) return
  let mx = 0, my = 0, gx = 0, gy = 0
  const onMove = (e: MouseEvent) => {
    mx = e.clientX
    my = e.clientY
  }
  window.addEventListener('mousemove', onMove)
  const animate = () => {
    gx += (mx - gx) * 0.05
    gy += (my - gy) * 0.05
    glow.style.transform = `translate(${gx - 150}px, ${gy - 150}px)`
    glow.style.opacity = '1'
    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<style scoped>
.hero-section {
  min-height: 100svh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: var(--nav-h);
}

/* ─── Mouse follower glow ──────────────────────────────── */
.mouse-glow {
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--clr-primary-glow) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s;
  will-change: transform;
}

/* ─── Floating shapes ───────────────────────────────────── */
.floating-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.shape {
  position: absolute;
  will-change: transform;
}
.shape.circle {
  border-radius: 50%;
  border: 2px solid var(--clr-primary);
  animation: floatShape var(--duration, 15s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}
.shape.square {
  border-radius: 4px;
  border: 2px solid var(--clr-primary);
  animation: floatShape var(--duration, 15s) ease-in-out infinite reverse;
  animation-delay: var(--delay, 0s);
}
.shape.triangle {
  width: 0 !important;
  height: 0 !important;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 26px solid var(--clr-primary);
  opacity: 0.15 !important;
  animation: floatShape var(--duration, 15s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}
@keyframes floatShape {
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  25% { transform: translateY(-30px) rotate(90deg) scale(1.05); }
  50% { transform: translateY(-15px) rotate(180deg) scale(0.95); }
  75% { transform: translateY(-40px) rotate(270deg) scale(1.02); }
}

/* ─── Ambient blobs ─────────────────────────────────────── */
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.4s;
}
.hero-blob-1 {
  width: 500px; height: 500px;
  top: -180px; right: -100px;
  background: radial-gradient(circle, var(--clr-primary-dim) 0%, transparent 70%);
  animation: blobFloat 9s ease-in-out infinite;
}
.hero-blob-2 {
  width: 380px; height: 380px;
  bottom: -100px; left: -80px;
  background: radial-gradient(circle, var(--clr-gold-dim) 0%, transparent 70%);
  animation: blobFloat 13s ease-in-out infinite reverse;
}
@keyframes blobFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50%       { transform: translateY(-35px) scale(1.04); }
}

/* ─── Background grid ───────────────────────────────────── */
.hero-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(var(--clr-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--clr-border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: linear-gradient(to right, black 0%, black 50%, transparent 70%);
}

/* ─── Hero content wrapper ──────────────────────────────── */
.hero-content {
  position: relative;
  z-index: 2;
  padding-block: 4rem;
}

.hero-left {
  width: min(55vw, 100%);
  max-width: 680px;
}

/* ─── Typography ────────────────────────────────────────── */
.hero-greeting {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--clr-text-muted);
  margin-bottom: 1rem;
}
.greeting-dot {
  display: block;
  width: 8px; height: 8px;
  background: var(--clr-primary);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--clr-primary);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 10px var(--clr-primary); }
  50%       { box-shadow: 0 0 22px var(--clr-primary-glow); }
}

.hero-name {
  font-size: clamp(3.5rem, 10vw, 8rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: var(--clr-text);
  margin-bottom: 1.5rem;
}
.hero-name-accent {
  color: transparent;
  -webkit-text-stroke: 2px var(--clr-primary);
}

.hero-title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-size: clamp(0.9rem, 2vw, 1.35rem);
  font-weight: 500;
  color: var(--clr-text-muted);
  margin-bottom: 1.5rem;
}
.hero-title-typing { color: var(--clr-primary); font-weight: 600; }
.cursor {
  color: var(--clr-primary);
  font-weight: 300;
  animation: blink 0.85s infinite;
}
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.hero-bio {
  font-size: 0.95rem;
  color: var(--clr-text-muted);
  line-height: 1.85;
  margin-bottom: 2rem;
}
.hero-bio strong      { color: var(--clr-text); font-weight: 600; }
.highlight-company    { color: var(--clr-primary); font-weight: 600; font-style: italic; }

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

/* ─── Stats strip ───────────────────────────────────────── */
.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--clr-border);
}
.stat-item  { display: flex; flex-direction: column; gap: 0.15rem; }
.stat-value {
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--clr-primary);
  line-height: 1;
}
.stat-label {
  font-size: 0.68rem;
  color: var(--clr-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: var(--font-mono);
}

/* ─── Scroll indicator ──────────────────────────────────── */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  right: clamp(1rem, 5vw, 3rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--clr-text-faint);
  text-transform: uppercase;
  writing-mode: vertical-lr;
}
.scroll-line {
  width: 1px; height: 60px;
  background: linear-gradient(to bottom, var(--clr-primary), transparent);
  animation: scrollDrop 2s ease-in-out infinite;
}
@keyframes scrollDrop {
  0%   { transform: scaleY(0); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: top; }
  51%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero-left { width: min(65vw, 100%); }
  .shape { display: none; }
}
@media (max-width: 768px) {
  .hero-left { width: 100%; max-width: 100%; }
  .hero-stats { gap: 1.2rem 2rem; }
  .scroll-indicator { display: none; }
}
</style>
