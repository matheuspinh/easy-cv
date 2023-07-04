import Link from 'next/link'
import { BiPlus } from 'react-icons/bi'

export default function Home() {
  return (
    <div className="mt-16 flex  w-screen items-center justify-center overflow-y-auto">
      <div className="flex max-h-screen w-screen flex-wrap justify-center gap-4 dark:text-white md:max-h-[80vh]  md:max-w-[768px]">
        <Link
          href={`/cv/new/`}
          className="flex h-48 w-36 origin-center flex-col items-center justify-center gap-y-2 rounded-lg bg-gray-200/40 px-3 transition-all duration-500 hover:bg-primary hover:text-gray-50 dark:hover:bg-secondary dark:hover:text-gray-950"
        >
          <BiPlus size="32" />
          <span className="text-center text-sm font-bold">
            Adicionar Currículo
          </span>
        </Link>
      </div>
    </div>
  )
}
