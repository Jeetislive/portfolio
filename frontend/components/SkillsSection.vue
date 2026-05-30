<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <p class="section-label reveal">Technical Arsenal</p>
      <h2 class="section-title reveal reveal-delay-1">Skills &amp; <span>Technologies</span></h2>
      <div class="glow-line reveal reveal-delay-2" />

      <div class="skills-grid">
        <div
          v-for="(group, i) in skillGroups"
          :key="group.title"
          class="skill-card card tilt-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="skill-card-header">
            <span class="skill-icon" v-html="group.icon" />
            <h3 class="skill-card-title">{{ group.title }}</h3>
          </div>
          <div class="skill-tags">
            <span
              v-for="skill in group.skills"
              :key="skill.name"
              class="skill-tag"
              :class="{ featured: skill.featured }"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Proficiency bars -->
      <div class="proficiency-block reveal reveal-delay-3">
        <h3 class="prof-title">Core Proficiencies</h3>
        <div class="prof-list">
          <div v-for="item in proficiencies" :key="item.name" class="prof-item">
            <div class="prof-header">
              <span class="prof-name">{{ item.name }}</span>
              <span class="prof-pct">{{ item.pct }}%</span>
            </div>
            <div class="prof-bar">
              <div
                class="prof-fill"
                :style="{ '--target': item.pct + '%' }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useReveal } from '../composables/useReveal'


const skillGroups = [
  {
    title: 'Languages',
    icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    skills: [
      { name: 'JavaScript', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'C' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Backend',
    icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    skills: [
      { name: 'Node.js', featured: true },
      { name: 'NestJS', featured: true },
      { name: 'Hapi.Js', featured: true },
      { name: 'Express.js' },
      { name: 'REST API' },
      { name: 'JWT Auth' },
      { name: 'Microservices' },
    ],
  },
  {
    title: 'Databases',
    icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    skills: [
      { name: 'Sequelize', featured: true },
      { name: 'MySQL', featured: true },
      { name: 'MongoDB' },
      { name: 'Mongoose' },
      { name: 'NoSQL' },
      { name: 'Redis' },
    ],
  },
  {
    title: 'Frontend',
    icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    skills: [
      { name: 'React' },
      { name: 'Vue.js' },
      { name: 'Nuxt 3' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14"/></svg>`,
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Socket.io' },
      { name: 'jwt' },
      { name: 'Postman' },
      { name: 'bcrypt.js' },
      { name: 'nodemailer' },
      { name: 'Vercel' },
      { name: 'AWS' },
      { name: 'Docker' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
    skills: [
      { name: 'Problem Solving' },
      { name: 'Teamwork' },
      { name: 'Communication' },
      { name: 'Quick Learning' },
      { name: 'Adaptability' },
    ],
  },
]

const proficiencies = [
  { name: 'Node.js / Express.js / Hapi.js', pct: 85 },
  { name: 'MongoDB / Mongoose',   pct: 82 },
  { name: 'JavaScript / TypeScript', pct: 88 },
  { name: 'React.js',             pct: 65 },
  { name: 'MySQL / SQL',          pct: 85 },
  { name: 'Vue.js / Nuxt 3',       pct: 70 },
]

useReveal()
use3DTilt('.skill-card', { max: 5, scale: 1.01 })

onMounted(() => {
  const bars = document.querySelectorAll('.prof-fill')
  const obs  = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        (e.target as HTMLElement).style.width = (e.target as HTMLElement).style.getPropertyValue('--target') || '0%'
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.3 })
  bars.forEach((b) => obs.observe(b))
})
</script>

<style scoped>
.skills-section {
  background: linear-gradient(180deg, transparent, var(--clr-surface) 20%, var(--clr-surface) 80%, transparent);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.skill-card { padding: 1.5rem; }
.skill-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.skill-icon { color: var(--clr-primary); flex-shrink: 0; }
.skill-card-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--clr-text);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.skill-tag {
  padding: 0.25rem 0.65rem;
  background: var(--clr-surface-2);
  border: 1px solid var(--clr-border);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--clr-text-muted);
  transition: all var(--dur-fast) var(--ease);
}
.skill-tag:hover, .skill-tag.featured {
  background: var(--clr-primary-dim);
  border-color: rgba(0,168,255,0.3);
  color: var(--clr-primary);
}

/* Proficiency */
.proficiency-block {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  padding: 2rem;
}
.prof-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--clr-text);
  margin-bottom: 1.5rem;
}
.prof-list { display: grid; gap: 1rem; grid-template-columns: 1fr 1fr; }
.prof-item {}
.prof-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}
.prof-name {
  font-size: 0.85rem;
  color: var(--clr-text);
  font-weight: 500;
}
.prof-pct {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--clr-primary);
}
.prof-bar {
  height: 4px;
  background: var(--clr-surface-3);
  border-radius: 99px;
  overflow: hidden;
}
.prof-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--clr-primary), #33bbff);
  border-radius: 99px;
  transition: width 1.2s var(--ease-out);
  box-shadow: 0 0 8px var(--clr-primary-glow);
}

@media (max-width: 600px) {
  .prof-list { grid-template-columns: 1fr; }
}
</style>
