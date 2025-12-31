import { styled } from "@/app/styles"




export const Right = styled('section', {
   background: `linear-gradient(
    135deg,
    #004b25 0%,
    #137819 35%,
    #016c57 70%,
    #015c19 100%
  )`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ImageWrapper = styled('div', {
  position: 'relative',
  width: '420px',
  height: '560px',
  borderRadius: '$xl',
  overflow: 'hidden',
})
