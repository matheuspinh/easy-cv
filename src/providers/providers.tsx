'use client'

import { CurriculumProvider } from '@/app/Context/cv'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <CurriculumProvider>{children}</CurriculumProvider>
}
