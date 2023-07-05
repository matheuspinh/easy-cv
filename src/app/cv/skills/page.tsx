'use client'
import React from 'react'
import { useCurriculumContext } from '@/app/Context/cv'
type Props = {}

function page({}: Props) {
  const { personalDetails } = useCurriculumContext()
  return (
    <div
      onClick={() => {
        console.log(personalDetails)
      }}
    >
      page
    </div>
  )
}

export default page
