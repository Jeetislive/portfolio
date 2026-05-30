<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar-inner">
      <!-- Logo -->
      <a href="#hero" class="navbar-logo">
        <span class="logo-bracket">&lt;</span>JP<span class="logo-bracket">/&gt;</span>
      </a>

      <!-- Desktop links -->
      <ul class="navbar-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav-link" @click="closeMenu">
            <span class="nav-num">{{ link.num }}</span>{{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Right controls -->
      <div class="navbar-controls">
        <!-- Theme toggle -->
        <button class="theme-toggle" :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'" @click="toggle">
          <!-- Sun icon (shown in dark mode → click to go light) -->
          <svg v-if="isDark" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon icon (shown in light mode → click to go dark) -->
          <svg v-else width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </button>

        <a href="#contact" class="btn btn-outline nav-cta" @click="closeMenu">Hire Me</a>

        <!-- Hamburger -->
        <button class="hamburger" :class="{ open: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <ul>
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav-link" @click="closeMenu">
            <span class="nav-num">{{ link.num }}</span>{{ link.label }}
          </a>
        </li>
        <li><a href="#contact" class="btn btn-outline mobile-cta" @click="closeMenu">Hire Me</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { theme, toggle, init } = useTheme()
const isDark = computed(() => theme.value === 'dark')

const isScrolled = ref(false)
const menuOpen   = ref(false)

const links = [
  { href: '#about',      num: '01.', label: 'About'      },
  { href: '#experience', num: '02.', label: 'Experience'  },
  { href: '#skills',     num: '03.', label: 'Skills'      },
  { href: '#projects',   num: '04.', label: 'Projects'    },
  { href: '#education',  num: '05.', label: 'Education'   },
  { href: '#contact',    num: '06.', label: 'Contact'     },
]

const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu  = () => (menuOpen.value = false)

onMounted(() => {
  init()
  window.addEventListener('scroll', () => { isScrolled.value = window.scrollY > 20 })
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-h);
  transition: background var(--dur-base) var(--ease), box-shadow var(--dur-base) var(--ease);
}
.navbar.scrolled {
  background: var(--clr-nav-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--clr-border);
}
.navbar-inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1.5rem;
}
.navbar-logo {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--clr-primary);
  letter-spacing: 0.05em;
  margin-right: auto;
}
.logo-bracket { color: var(--clr-text-muted); }

.navbar-links {
  display: flex;
  gap: 0;
  list-style: none;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.65rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--clr-text-muted);
  border-radius: var(--radius-sm);
  transition: color var(--dur-fast), background var(--dur-fast);
}
.nav-link:hover { color: var(--clr-text); background: var(--clr-surface); }
.nav-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--clr-primary);
}

.navbar-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Theme toggle button */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  color: var(--clr-text-muted);
  cursor: pointer;
  transition: all var(--dur-fast) var(--ease);
  flex-shrink: 0;
}
.theme-toggle:hover {
  color: var(--clr-primary);
  border-color: var(--clr-primary);
  background: var(--clr-primary-dim);
}

.nav-cta { padding: 0.5rem 1.2rem; font-size: 0.85rem; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px; height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--clr-text);
  border-radius: 2px;
  transition: all var(--dur-base) var(--ease);
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: var(--nav-h);
  left: 0; right: 0;
  background: var(--clr-nav-bg);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--clr-border);
  padding: 1.5rem;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px);
  transition: all var(--dur-base) var(--ease);
}
.mobile-menu.open { opacity: 1; transform: translateY(0); pointer-events: all; }
.mobile-menu ul { list-style: none; display: flex; flex-direction: column; gap: 0.25rem; }
.mobile-menu .nav-link { padding: 0.7rem 1rem; font-size: 1rem; }
.mobile-menu .mobile-cta { margin-top: 0.75rem; width: 100%; justify-content: center; }

@media (max-width: 960px) {
  .navbar-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: block; }
}
</style>
