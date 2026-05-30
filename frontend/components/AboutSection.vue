<template>
  <section id="about" class="section">
    <div class="container">
      <div class="about-grid">
        <div class="about-text">
          <p class="section-label reveal">About Me</p>
          <h2 class="section-title reveal reveal-delay-1">
            Full Stack Developer.<br /><span>Building End-to-End Products.</span>
          </h2>
          <div class="glow-line reveal reveal-delay-2" />

          <p class="about-bio reveal reveal-delay-2">
            I'm <strong>Jeet Pal</strong> — a Full Stack Developer with <strong>1+ year of professional experience</strong>
            at <span class="inline-highlight">CodelogicX</span>. I work across frontend and backend using
            <span class="inline-tag">Nuxt.js</span>, <span class="inline-tag">Vue.js</span>,
            <span class="inline-tag">NestJS</span>, <span class="inline-tag">Node.js</span>,
            <span class="inline-tag">Sequelize</span>, and <span class="inline-tag">MySQL</span>.
          </p>
          <p class="about-bio reveal reveal-delay-3">
            I enjoy building complete web applications, from responsive user interfaces to robust APIs,
            database design, and business logic. I care about clean architecture, maintainable code,
            performance, and shipping features that work smoothly in real production environments.
          </p>
          <p class="about-bio reveal reveal-delay-4">
            I also use modern AI tools in my daily workflow to boost productivity, speed up debugging,
            improve code quality, and move faster from idea to delivery while keeping the output practical
            and production-ready.
          </p>

          <div class="quick-facts reveal reveal-delay-5">
            <div v-for="fact in facts" :key="fact.label" class="fact-item">
              <span class="fact-icon" v-html="fact.icon" />
              <div>
                <span class="fact-label">{{ fact.label }}</span>
                <span class="fact-value">{{ fact.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-code-card reveal reveal-delay-2">
          <div class="code-card-header">
            <div class="dot red" /><div class="dot yellow" /><div class="dot green" />
            <span class="code-filename">jeet.config.ts</span>
          </div>
          <pre class="code-body"><code><span class="kw">const</span> <span class="var">jeet</span> <span class="op">=</span> <span class="op">{</span>
  <span class="prop">name</span><span class="op">:</span>        <span class="str">"Jeet Pal"</span><span class="op">,</span>
  <span class="prop">role</span><span class="op">:</span>        <span class="str">"Full Stack Developer"</span><span class="op">,</span>
  <span class="prop">company</span><span class="op">:</span>     <span class="str">"Codelogicx"</span><span class="op">,</span>
  <span class="prop">experience</span><span class="op">:</span>  <span class="str">"1+ Year"</span><span class="op">,</span>
  <span class="prop">workflow</span><span class="op">:</span>    <span class="str">"AI-Accelerated"</span><span class="op">,</span>

  <span class="prop">stack</span><span class="op">:</span> <span class="op">[</span>
    <span class="str">"Nuxt.js"</span><span class="op">,</span>    <span class="str">"Vue.js"</span><span class="op">,</span>
    <span class="str">"Node.js"</span><span class="op">,</span>    <span class="str">"NestJS"</span><span class="op">,</span>
    <span class="str">"Sequelize"</span><span class="op">,</span>  <span class="str">"MySQL"</span><span class="op">,</span>
    <span class="str">"Hapi.js"</span><span class="op">,</span>    <span class="str">"React"</span><span class="op">,</span>
  <span class="op">],</span>

  <span class="prop">focus</span><span class="op">:</span> <span class="str">"Full Stack Product Development"</span><span class="op">,</span>
  <span class="prop">openToWork</span><span class="op">:</span> <span class="bool">true</span><span class="op">,</span>
<span class="op">};</span>

<span class="kw">export default</span> jeet<span class="op">;</span></code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '../composables/useReveal'


const facts = [
  {
    label: 'Location',
    value: 'Howrah, West Bengal, India',
    icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    label: 'Currently at',
    value: 'CodelogicX — Full Stack Developer',
    icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
  },
  {
    label: 'Email',
    value: 'jeetpal7804322@gmail.com',
    icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
  {
    label: 'Workflow',
    value: 'Using AI tools to boost development productivity',
    icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  },
]

useReveal()
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-bio {
  color: var(--clr-text-muted);
  line-height: 1.85;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}
.about-bio strong { color: var(--clr-text); font-weight: 600; }

.inline-highlight {
  color: var(--clr-primary);
  font-weight: 600;
}
.inline-tag {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  background: var(--clr-primary-dim);
  color: var(--clr-primary);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.82em;
}

.quick-facts {
  display: grid;
  gap: 0.85rem;
  padding: 1.5rem;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  margin-top: 1.5rem;
  box-shadow: var(--shadow-card);
}
.fact-item { display: flex; align-items: flex-start; gap: 0.75rem; }
.fact-icon { color: var(--clr-primary); margin-top: 2px; flex-shrink: 0; }
.fact-label {
  display: block;
  font-size: 0.68rem;
  font-family: var(--font-mono);
  color: var(--clr-text-faint);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.fact-value {
  display: block;
  font-size: 0.88rem;
  color: var(--clr-text);
  font-weight: 500;
}

/* Code card */
.about-code-card {
  background: var(--clr-code-bg);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  position: sticky;
  top: calc(var(--nav-h) + 2rem);
  transition: background var(--dur-base), border-color var(--dur-base);
}
.code-card-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.8rem 1rem;
  background: var(--clr-surface-2);
  border-bottom: 1px solid var(--clr-border);
}
.dot { width: 12px; height: 12px; border-radius: 50%; }
.red    { background: #FF5F57; }
.yellow { background: #FFBD2E; }
.green  { background: #28C840; }
.code-filename {
  margin-left: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--clr-text-muted);
}
.code-body {
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1.95;
  overflow-x: auto;
}
.code-body code { white-space: pre; }

/* Syntax — works in both modes */
.kw   { color: #C792EA; }
.var  { color: #82AAFF; }
.op   { color: var(--clr-text-muted); }
.prop { color: #89DDFF; }
.str  { color: #C3E88D; }
.num  { color: #F78C6C; }
.bool { color: #FF5370; }

[data-theme="light"] .kw   { color: #7C3AED; }
[data-theme="light"] .var  { color: #1D4ED8; }
[data-theme="light"] .prop { color: #0E7490; }
[data-theme="light"] .str  { color: #15803D; }
[data-theme="light"] .num  { color: #C2410C; }
[data-theme="light"] .bool { color: #B91C1C; }

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-code-card { position: static; }
}
</style>
