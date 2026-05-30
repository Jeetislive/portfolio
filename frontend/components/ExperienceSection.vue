<template>
  <section id="experience" class="section exp-section">
    <div class="container">
      <p class="section-label reveal">Work History</p>
      <h2 class="section-title reveal reveal-delay-1">Professional <span>Experience</span></h2>
      <div class="glow-line reveal reveal-delay-2" />

      <div class="exp-layout">
        <!-- Single Experience Card — Codelogicx -->
        <article class="exp-card card reveal reveal-delay-2">
          <!-- Header -->
          <div class="exp-card-header">
            <div class="company-logo">
              <svg width="28" height="28" fill="none" viewBox="0 0 32 32">
                <rect width="32" height="32" rx="8" fill="var(--clr-primary-dim)"/>
                <text x="5" y="22" font-family="monospace" font-size="14" font-weight="bold" fill="var(--clr-primary)">CX</text>
              </svg>
            </div>
            <div class="exp-header-text">
              <h3 class="exp-role">Full Stack Developer</h3>
              <p class="exp-company">
                Codelogicx
                <span class="exp-type-badge">Full-time</span>
                <span class="exp-work-type-badge">Hybrid</span>
              </p>
            </div>
            <div class="exp-meta">
              <span class="exp-period tag">2025 – Present</span>
              <span class="exp-duration">1+ Year</span>
            </div>
          </div>

          <!-- Current badge strip -->
          <div class="current-strip">
            <span class="current-dot" />
            <span>Currently employed here</span>
          </div>

          <!-- Description -->
          <p class="exp-desc">
            Working as a Full Stack Developer at Codelogicx, contributing to production
            client projects across both frontend and backend. Responsible for building user
            interfaces, developing APIs, managing database integration, and delivering
            end-to-end features from concept to deployment.
          </p>

          <!-- Responsibilities -->
          <div class="exp-responsibilities">
            <h4 class="exp-resp-title">Key Responsibilities</h4>
            <ul class="resp-list">
              <li v-for="r in responsibilities" :key="r">
                <span class="resp-icon">
                  <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {{ r }}
              </li>
            </ul>
          </div>

          <!-- Tech used -->
          <div class="exp-tech">
            <span class="exp-tech-label">Stack Used</span>
            <div class="exp-tech-tags">
              <span v-for="t in tech" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </article>

        <!-- Right: summary panel -->
        <div class="exp-summary">
          <div class="summary-card card reveal reveal-delay-3">
            <div class="summary-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <h3>1+ Year</h3>
            <p>Professional industry experience</p>
          </div>

          <div class="summary-card card reveal reveal-delay-4">
            <div class="summary-icon gold">
              <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>Production</h3>
            <p>Shipped real features to live clients</p>
          </div>

          <div class="summary-card card reveal reveal-delay-5">
            <div class="summary-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14"/>
              </svg>
            </div>
            <h3>Full Stack Focus</h3>
            <p>Frontend interfaces, APIs, and database-driven features</p>
          </div>

          <!-- Open to work -->
          <div class="open-to-work reveal reveal-delay-5">
            <span class="otw-dot" />
            <div>
              <p class="otw-title">Open to New Opportunities</p>
              <p class="otw-sub">Available for full stack web development roles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

const responsibilities = [
  'Building responsive frontend interfaces using Vue.js and Nuxt.js for production applications',
  'Developing and maintaining scalable APIs using Node.js and NestJS',
  'Designing and optimising MySQL database schemas with Sequelize integration',
  'Implementing complete end-to-end features across UI, backend logic, and database layers',
  'Participating in code reviews and maintaining code quality standards',
  'Debugging production issues and delivering hotfixes under tight timelines',
]

const tech = ['Nuxt.js', 'Vue.js', 'Node.js', 'HapiJS', 'Sequelize', 'MySQL', 'JavaScript', 'Git']

useReveal()
</script>

<style scoped>
.exp-section {
  background: linear-gradient(180deg, transparent, var(--clr-surface) 20%, var(--clr-surface) 80%, transparent);
}

.exp-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  margin-top: 3rem;
  align-items: start;
}

/* Main card */
.exp-card {
  padding: 0;
  overflow: hidden;
}

.exp-card-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.75rem 2rem 1.25rem;
}
.company-logo {
  flex-shrink: 0;
  margin-top: 2px;
}
.exp-header-text { flex: 1; }
.exp-role {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--clr-text);
  margin-bottom: 0.3rem;
}
.exp-company {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--clr-primary);
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.exp-type-badge {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  background: var(--clr-gold-dim);
  color: var(--clr-gold);
  border-radius: 99px;
  font-weight: 500;
}
.exp-work-type-badge {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  background: var(--clr-primary-dim);
  color: var(--clr-primary);
  border-radius: 99px;
  font-weight: 500;
}
.exp-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  flex-shrink: 0;
}
.exp-duration {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--clr-text-faint);
}

/* Current strip */
.current-strip {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 2rem;
  background: rgba(0,168,255,0.06);
  border-top: 1px solid var(--clr-border);
  border-bottom: 1px solid var(--clr-border);
  font-size: 0.78rem;
  color: var(--clr-primary);
  font-family: var(--font-mono);
}
[data-theme="light"] .current-strip {
  background: rgba(0,105,194,0.05);
}
.current-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--clr-primary);
  flex-shrink: 0;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 var(--clr-primary-glow); }
  50%       { box-shadow: 0 0 0 6px transparent; }
}

.exp-desc {
  padding: 1.25rem 2rem;
  font-size: 0.92rem;
  color: var(--clr-text-muted);
  line-height: 1.8;
  border-bottom: 1px solid var(--clr-border);
}

/* Responsibilities */
.exp-responsibilities {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--clr-border);
}
.exp-resp-title {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--clr-text);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.resp-list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}
.resp-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--clr-text-muted);
  line-height: 1.5;
}
.resp-icon { color: var(--clr-primary); flex-shrink: 0; margin-top: 2px; }

/* Tech */
.exp-tech {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 2rem;
  flex-wrap: wrap;
}
.exp-tech-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--clr-text-faint);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  flex-shrink: 0;
}
.exp-tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

/* Summary panel */
.exp-summary {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.summary-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.summary-icon {
  color: var(--clr-primary);
  background: var(--clr-primary-dim);
  width: 52px; height: 52px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}
.summary-icon.gold {
  color: var(--clr-gold);
  background: var(--clr-gold-dim);
}
.summary-card h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--clr-text);
}
.summary-card p {
  font-size: 0.8rem;
  color: var(--clr-text-muted);
  line-height: 1.5;
}

/* Open to work */
.open-to-work {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
}
.otw-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #22C55E;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(34,197,94,0.5);
  animation: pulse 2s infinite;
}
.otw-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--clr-text);
  margin-bottom: 0.15rem;
}
.otw-sub {
  font-size: 0.72rem;
  color: var(--clr-text-muted);
  font-family: var(--font-mono);
}

@media (max-width: 960px) {
  .exp-layout { grid-template-columns: 1fr; }
  .resp-list   { grid-template-columns: 1fr; }
  .exp-summary { flex-direction: row; flex-wrap: wrap; }
  .summary-card { flex: 1; min-width: 200px; }
  .open-to-work { width: 100%; }
}
@media (max-width: 600px) {
  .exp-card-header { flex-wrap: wrap; }
  .exp-meta { align-items: flex-start; }
  .exp-desc, .exp-responsibilities, .exp-tech { padding-inline: 1.25rem; }
  .exp-card-header { padding: 1.25rem; }
}
</style>
