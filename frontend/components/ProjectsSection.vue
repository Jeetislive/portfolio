<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="section-label reveal">What I've Built</p>
      <h2 class="section-title reveal reveal-delay-1">Featured <span>Projects</span></h2>
      <div class="glow-line reveal reveal-delay-2" />

      <div class="projects-list">
        <article
          v-for="(project, i) in projects"
          :key="project.id"
          class="project-card card tilt-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <!-- Header -->
          <div class="project-header">
            <div class="project-meta">
              <span class="project-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="project-year tag">{{ project.year }}</span>
            </div>
            <div class="project-links">
              <a :href="project.github" target="_blank" rel="noopener" class="icon-link" title="GitHub">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>

          <!-- Title -->
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>

          <!-- Highlights -->
          <ul class="project-highlights">
            <li v-for="h in project.highlights" :key="h">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              {{ h }}
            </li>
          </ul>

          <!-- Tech stack -->
          <div class="project-tech">
            <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    year: '2026',
    description:
      'A production-grade personal portfolio built with Nuxt 3 and NestJS, deployed on Vercel with auto-deployment via GitHub. Features a responsive animated UI with mouse-follower glow effects, SSR-safe theme toggling, and a fully functional contact form backed by Nodemailer SMTP. Monorepo with separate frontend and backend sharing a single GitHub repository.',
    tech: ['Nuxt 3', 'Vue 3', 'TypeScript', 'NestJS', 'Nodemailer', 'Vercel', 'GitHub Actions'],
    highlights: [
      'Nuxt 3 SSG with zero-cost static hosting on Vercel',
      'NestJS API with global validation and CORS',
      'Contact form with Nodemailer SMTP integration',
      'SSR-safe dark/light theme composable',
      'Animated hero with mouse-follower glow effect',
      'CI/CD via GitHub Actions + Vercel auto-deploy',
    ],
    github: 'https://github.com/Jeetislive/portfolio',
  },
  {
    id: 2,
    title: 'Full-Stack Real-Time Chat App',
    year: '2024',
    description:
      'A comprehensive MERN + Socket.io chat application with real-time bi-directional messaging, user authentication, online/offline presence, and persistent message history backed by MongoDB.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'React', 'Material UI', 'JWT'],
    highlights: [
      'Real-time messaging via Socket.io WebSockets',
      'Presence system (online/offline indicators)',
      'Secure JWT authentication',
      'Persistent message history in MongoDB',
      'Material UI responsive interface',
    ],
    github: 'https://github.com/Jeetislive/Chat-App-Backend',
  },
  {
    id: 3,
    title: 'Full Stack File Sharing Application',
    year: '2024',
    description:
      'A MERN-based file sharing platform that generates unique, shareable download links for any uploaded file type, ensuring secure transfers and quick recipient access with a clean, minimal interface.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Secure File Handling'],
    highlights: [
      'Unique shareable link per upload',
      'Multi-format file type support',
      'Secure server-side file pipeline',
      'Quick-access download for recipients',
      'Clean, minimal UI',
    ],
    github: 'https://github.com/Jeetislive/Fileshareing',
  },
]

useReveal()
use3DTilt('.project-card', { max: 6, scale: 1.02 })
</script>


<style scoped>
.projects-list {
  display: grid;
  gap: 1.5rem;
  margin-top: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
}

.project-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}
.project-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--clr-primary), transparent);
  opacity: 0;
  transition: opacity var(--dur-base) var(--ease);
}
.project-card:hover::before { opacity: 1; }

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project-meta { display: flex; align-items: center; gap: 0.75rem; }
.project-num {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--clr-primary);
  opacity: 0.6;
}

.project-links { display: flex; gap: 0.5rem; }
.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  background: var(--clr-surface-2);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  color: var(--clr-text-muted);
  transition: all var(--dur-fast) var(--ease);
}
.icon-link:hover {
  color: var(--clr-primary);
  border-color: var(--clr-primary);
  background: var(--clr-primary-dim);
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--clr-text);
  line-height: 1.3;
}

.project-desc {
  font-size: 0.88rem;
  color: var(--clr-text-muted);
  line-height: 1.75;
  flex-grow: 1;
}

.project-highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.project-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--clr-text-muted);
}
.project-highlights svg { color: var(--clr-primary); flex-shrink: 0; margin-top: 2px; }

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--clr-border);
}
</style>
