import React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

interface IFormValues {
  fullName: string
  email: string
  phone: string
  city: string
  state: string
}

type Props = {
  registerLabel: Path<IFormValues>
  label: string
  register: UseFormRegister<IFormValues>
}

function CustomInput({ label, register, registerLabel }: Props) {
  return (
    <div className="h-full">
      <label className="flex h-full flex-col gap-y-1 text-sm dark:text-primary">
        {label}:
        <input
          className="h-full w-[90vw] rounded-md border-2 border-solid border-gray-200 bg-gray-50 px-2 py-1 text-lg focus:border-2 focus:border-solid focus:border-gray-600 focus:outline-none dark:border-none dark:bg-gray-500 dark:text-white dark:focus:border-primary md:w-96"
          {...register(registerLabel)}
        />
      </label>
    </div>
  )
}

export default CustomInput
