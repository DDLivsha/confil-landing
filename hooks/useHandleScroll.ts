'use client'
import { usePathname, useRouter } from 'next/navigation'
import { handleScrollToBlock } from '@/helpers/scroll-to-block'

export function useHandleScroll() {
   const pathname = usePathname()
   const router = useRouter()

   return (blockId: string) => {
      if (pathname === '/') {
         handleScrollToBlock(blockId)
      } else {
         router.push(`/#${blockId}`)
      }
   }
}