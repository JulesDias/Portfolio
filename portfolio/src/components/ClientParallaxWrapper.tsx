// components/ClientParallaxWrapper.tsx
'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

interface ClientParallaxWrapperProps {
  children: React.ReactNode;
}

export default function ClientParallaxWrapper({ children }: ClientParallaxWrapperProps) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
