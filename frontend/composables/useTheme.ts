export type Theme = 'dark' | 'light'

export const useTheme = () => {
  const theme = useState<Theme>('theme', () => 'dark')

  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    if (process.client) {
      document.documentElement.setAttribute('data-theme', theme.value)
      localStorage.setItem('jp-theme', theme.value)
    }
  }

  const init = () => {
    if (!process.client) return
    const saved = localStorage.getItem('jp-theme') as Theme | null
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
    const resolved = saved || preferred
    theme.value = resolved
    document.documentElement.setAttribute('data-theme', resolved)
  }

  return { theme, toggle, init }
}
