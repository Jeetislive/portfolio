<template>
  <section id="education" class="section edu-section">
    <div class="container">
      <p class="section-label reveal">Academic Background</p>
      <h2 class="section-title reveal reveal-delay-1">Education &amp; <span>Certifications</span></h2>
      <div class="glow-line reveal reveal-delay-2" />

      <div class="edu-grid">
        <!-- Timeline -->
        <div class="edu-timeline">
          <div
            v-for="(edu, i) in education"
            :key="edu.institution"
            class="edu-item reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="timeline-dot" />
            <div class="edu-card card">
              <div class="edu-card-top">
                <span class="edu-period tag">{{ edu.period }}</span>
                <span class="edu-score">{{ edu.score }}</span>
              </div>
              <h3 class="edu-degree">{{ edu.degree }}</h3>
              <p class="edu-institution">{{ edu.institution }}</p>
              <p class="edu-board">{{ edu.board }}</p>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="certs-block">
          <h3 class="certs-title reveal reveal-delay-1">Licenses &amp; Certifications</h3>
          <div class="certs-list">
            <div
              v-for="(cert, i) in certifications"
              :key="cert.title"
              class="cert-card card reveal"
              :class="`reveal-delay-${i + 2}`"
            >
              <div class="cert-badge">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div>
                <h4 class="cert-title">{{ cert.title }}</h4>
                <p class="cert-issuer">{{ cert.issuer }} · {{ cert.year }}</p>
              </div>
              <a :href="cert.link" class="cert-link" target="_blank" rel="noopener">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

const education = [
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'RCC Institute of Information Technology',
    board: 'Autonomous — Kolkata, West Bengal',
    period: 'Oct 2022 – Sep 2025',
    score: 'CGPA: 8.59',
  },
  {
    degree: 'Higher Secondary — Class XII',
    institution: 'Howrah Zilla School',
    board: 'WBCHSE — Howrah, West Bengal',
    period: 'Aug 2020 – Jun 2022',
    score: 'Percentage: 88%',
  },
  {
    degree: 'Secondary — Class X',
    institution: 'Patha Bhavan Dankuni',
    board: 'WBBSE — Hooghly, West Bengal',
    period: 'Jun 2009 – Jun 2020',
    score: 'Percentage: 83%',
  },
]

const certifications = [
  {
    title: 'HackerRank SQL Intermediate',
    issuer: 'HackerRank',
    year: '2024',
    link: '#',
  },
  {
    title: 'Web Development using React',
    issuer: 'Internship Program',
    year: '2024',
    link: '#',
  },
]

useReveal()
</script>

<style scoped>
.edu-section {
  background: linear-gradient(180deg, transparent, var(--clr-surface) 20%, var(--clr-surface) 80%, transparent);
}

.edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  align-items: start;
}

/* Timeline */
.edu-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.edu-timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 12px;
  bottom: 12px;
  width: 1px;
  background: linear-gradient(to bottom, var(--clr-primary), transparent);
}

.edu-item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 1rem;
  padding-bottom: 1.5rem;
}
.timeline-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--clr-primary);
  border: 2px solid var(--clr-bg);
  box-shadow: 0 0 10px var(--clr-primary-glow);
  margin-top: 0.9rem;
  flex-shrink: 0;
}

.edu-card { padding: 1.25rem; }
.edu-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.edu-score {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--clr-gold);
  font-weight: 600;
}
.edu-degree {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--clr-text);
  margin-bottom: 0.25rem;
  line-height: 1.3;
}
.edu-institution {
  font-size: 0.85rem;
  color: var(--clr-primary);
  font-weight: 500;
  margin-bottom: 0.2rem;
}
.edu-board {
  font-size: 0.78rem;
  color: var(--clr-text-faint);
  font-family: var(--font-mono);
}

/* Certifications */
.certs-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--clr-text);
  margin-bottom: 1.5rem;
}
.certs-list { display: flex; flex-direction: column; gap: 1rem; }
.cert-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
}
.cert-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px; height: 44px;
  background: var(--clr-gold-dim);
  border-radius: var(--radius-sm);
  color: var(--clr-gold);
  flex-shrink: 0;
}
.cert-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--clr-text);
  margin-bottom: 0.2rem;
}
.cert-issuer {
  font-size: 0.78rem;
  color: var(--clr-text-muted);
  font-family: var(--font-mono);
}
.cert-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  color: var(--clr-text-faint);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  margin-left: auto;
  transition: all var(--dur-fast) var(--ease);
  flex-shrink: 0;
}
.cert-link:hover { color: var(--clr-primary); border-color: var(--clr-primary); }

@media (max-width: 900px) {
  .edu-grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
