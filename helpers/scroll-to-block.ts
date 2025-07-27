export const handleScrollToBlock = (blockId: string) => {
   const block = document.getElementById(blockId)
   if (block) {
      const yOffset = -80
      const y = block.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: 'smooth' })
   }
}