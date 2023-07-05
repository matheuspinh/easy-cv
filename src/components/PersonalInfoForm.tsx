'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa'
import CustomInput from './Input'
import generateDocument from '@/utils/cv-generator'
import { useRouter } from 'next/navigation'
import { useCurriculumContext } from '@/app/Context/cv'

type Inputs = {
  fullName: string
}

function PersonalInfoForm() {
  const { handlePersonalDetailsChange } = useCurriculumContext()

  const { handleSubmit, register } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      city: '',
      state: '',
    },
  })
  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handlePersonalDetailsChange(data)
    router.push('/cv/skills')
  }

  return (
    <div>
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="h-16">
          <CustomInput
            label="Nome"
            registerLabel="fullName"
            register={register}
          />
        </div>
        <div className="h-16">
          <CustomInput
            label="Email"
            registerLabel="email"
            register={register}
          />
        </div>
        <div className="h-16">
          <CustomInput
            label="Telefone"
            registerLabel="phone"
            register={register}
          />
        </div>
        <div className="h-16">
          <CustomInput
            label="Cidade"
            registerLabel="city"
            register={register}
          />
        </div>
        <div className="h-16">
          <CustomInput label="UF" registerLabel="state" register={register} />
        </div>
        <button
          className="flex h-9 w-32 items-center justify-center gap-x-3 self-center rounded-md bg-primary transition-all duration-500 hover:bg-secondary hover:text-primary"
          type="submit"
        >
          Próximo <FaArrowRight size="12" />
        </button>
      </form>
    </div>
  )
}

export default PersonalInfoForm
