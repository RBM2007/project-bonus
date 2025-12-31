'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import { Wrapper, LogoWrapper, Content } from './styles'

import Logo from '../../../assets/logo-bonus.png'

interface AuthLeftLayoutProps {
  children: ReactNode
}

export function LayoutLeft({ children }: AuthLeftLayoutProps) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Image
          src={Logo}
          alt="Logo da Bônus"

          priority
        />
      </LogoWrapper>

      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}
