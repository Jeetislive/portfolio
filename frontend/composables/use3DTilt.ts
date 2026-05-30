// composables/use3DTilt.ts
// Applies a smooth 3D perspective tilt to elements on mouse move.
// Usage: call use3DTilt('.tilt-card') inside onMounted

export const use3DTilt = (selector: string, options = { max: 8, scale: 1.02 }) => {
  onMounted(() => {
    const cards = document.querySelectorAll<HTMLElement>(selector)

    cards.forEach((card) => {
      const handleMove = (e: MouseEvent) => {
        const rect   = card.getBoundingClientRect()
        const centerX = rect.left + rect.width  / 2
        const centerY = rect.top  + rect.height / 2
        const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * options.max
        const rotateY =  ((e.clientX - centerX) / (rect.width  / 2)) * options.max

        card.style.transform =
          `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${options.scale})`
        card.style.transition = 'transform 0.1s ease'
      }

      const handleLeave = () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
        card.style.transition = 'transform 0.5s ease'
      }

      card.addEventListener('mousemove', handleMove)
      card.addEventListener('mouseleave', handleLeave)
    })
  })
}
