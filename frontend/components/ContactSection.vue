<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <p class="section-label reveal">Get In Touch</p>
      <h2 class="section-title reveal reveal-delay-1">Let's <span>Work Together</span></h2>
      <div class="glow-line reveal reveal-delay-2" />

      <div class="contact-grid">
        <!-- Left: info -->
        <div class="contact-info reveal reveal-delay-2">
          <p class="contact-intro">
            I'm currently open to new opportunities — internships, junior backend roles,
            or freelance projects. Whether you have a question or just want to say hi,
            my inbox is always open.
          </p>

          <div class="contact-links">
            <a
              v-for="link in contactLinks"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              rel="noopener"
              class="contact-link-item"
            >
              <span class="contact-link-icon" v-html="link.icon" />
              <div>
                <span class="contact-link-label">{{ link.label }}</span>
                <span class="contact-link-value">{{ link.value }}</span>
              </div>
              <svg class="contact-link-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
        </div>

        <!-- Right: form -->
        <form class="contact-form reveal reveal-delay-3" @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" v-model="form.name" type="text" placeholder="Your name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" v-model="form.email" type="email" placeholder="your@email.com" required />
            </div>
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input id="subject" v-model="form.subject" type="text" placeholder="What's this about?" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>

          <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting">
            <svg v-if="!submitting && !submitted" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            <span v-if="submitting">Sending…</span>
            <span v-else-if="submitted">✓ Message Sent!</span>
            <span v-else>Send Message</span>
          </button>

          <p v-if="error" class="form-error">{{ error }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const config = useRuntimeConfig()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitting = ref(false)
const submitted  = ref(false)
const error      = ref('')

const submitForm = async () => {
  submitting.value = true
  error.value = ''
  try {
    await $fetch(`${config.public.apiBase}/api/contact`, {
      method: 'POST',
      body: form,
    })
    submitted.value = true
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    setTimeout(() => (submitted.value = false), 4000)
  } catch (e: any) {
    error.value = e?.data?.message || 'Something went wrong. Please try again or email me directly.'
  } finally {
    submitting.value = false
  }
}

const contactLinks = [
  {
    label: 'Email',
    value: 'jeetpal7804322@gmail.com',
    href: 'mailto:jeetpal7804322@gmail.com',
    external: false,
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeet-pal',
    href: 'https://www.linkedin.com/in/jeet-pal/',
    external: true,
    icon: `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: 'GitHub',
    value: 'github.com/jeetpal',
    href: 'https://github.com/Jeetislive',
    external: true,
    icon: `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/jeetpal',
    href: 'https://leetcode.com/u/jeetpal7804322/',
    external: true,
    icon: `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
  },
]

useReveal()
</script>

<style scoped>
.contact-section {
  background: linear-gradient(180deg, transparent, var(--clr-surface) 30%);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  margin-top: 3rem;
  align-items: start;
}

.contact-intro {
  font-size: 0.95rem;
  color: var(--clr-text-muted);
  line-height: 1.85;
  margin-bottom: 2rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.contact-link-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  transition: all var(--dur-base) var(--ease);
  cursor: pointer;
}
.contact-link-item:hover {
  border-color: var(--clr-border-hover);
  background: var(--clr-surface-2);
  transform: translateX(4px);
}
.contact-link-icon {
  color: var(--clr-primary);
  display: flex;
  flex-shrink: 0;
}
.contact-link-label {
  display: block;
  font-size: 0.7rem;
  font-family: var(--font-mono);
  color: var(--clr-text-faint);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.15rem;
}
.contact-link-value {
  display: block;
  font-size: 0.85rem;
  color: var(--clr-text);
  font-weight: 500;
}
.contact-link-arrow {
  margin-left: auto;
  color: var(--clr-text-faint);
  flex-shrink: 0;
  transition: color var(--dur-fast), transform var(--dur-fast);
}
.contact-link-item:hover .contact-link-arrow {
  color: var(--clr-primary);
  transform: translate(2px, -2px);
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  padding: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  color: var(--clr-text-muted);
  letter-spacing: 0.05em;
}

input, textarea {
  background: var(--clr-surface-2);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  padding: 0.7rem 1rem;
  color: var(--clr-text);
  font-family: var(--font-body);
  font-size: 0.9rem;
  transition: border-color var(--dur-fast) var(--ease);
  outline: none;
  resize: vertical;
}
input::placeholder, textarea::placeholder { color: var(--clr-text-faint); }
input:focus, textarea:focus {
  border-color: var(--clr-primary);
  box-shadow: 0 0 0 3px var(--clr-primary-dim);
}

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 0.9rem;
  font-size: 0.95rem;
}
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none !important; }

.form-error {
  color: #FF5370;
  font-size: 0.82rem;
  text-align: center;
  font-family: var(--font-mono);
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
@media (max-width: 500px) {
  .form-row { grid-template-columns: 1fr; }
}
</style>
