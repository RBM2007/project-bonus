'use client'

import Image, { StaticImageData } from 'next/image'
import { ImageWrapper, Right } from './styles'


interface AuthRightProps {
  image: StaticImageData
  alt?: string
}

export function LayoutRight({ image, alt = '' }: AuthRightProps) {
  return (
    <Right>
      <ImageWrapper>
        <Image
          src={image}
          alt={alt}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </ImageWrapper>
    </Right>
  )
}
