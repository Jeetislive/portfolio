<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="logo-bracket">&lt;</span>JP<span class="logo-bracket">/&gt;</span>
        <span class="footer-tagline">Full Stack Developer. Built with purpose.</span>
      </div>

      <p class="footer-copy">
        Designed &amp; built by <strong>Jeet Pal</strong> ·
        <a href="https://www.linkedin.com/in/jeet-pal/" target="_blank" rel="noopener">LinkedIn</a> ·
        <a href="https://github.com/Jeetislive" target="_blank" rel="noopener">GitHub</a>
      </p>

      <p class="footer-stack">
        NestJS · Nuxt 3 · Deployed on Vercel
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--clr-border);
  padding-block: 2.5rem;
  position: relative;
  z-index: 1;
  transition: border-color var(--dur-base);
}
.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}
.footer-brand {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 700;
  color: var(--clr-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.logo-bracket { color: var(--clr-text-muted); }
.footer-tagline {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--clr-text-faint);
  font-weight: 400;
}
.footer-copy {
  font-size: 0.8rem;
  color: var(--clr-text-faint);
}
.footer-copy strong { color: var(--clr-text-muted); }
.footer-copy a {
  color: var(--clr-primary);
  transition: opacity var(--dur-fast);
}
.footer-copy a:hover { opacity: 0.7; }
.footer-stack {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--clr-text-faint);
  letter-spacing: 0.1em;
}
</style>
