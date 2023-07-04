import { IconType } from 'react-icons/lib'

type Props = { Icon: IconType }

function MenuIcon({ Icon }: Props) {
  return (
    <div className="hover:text-gray-600dark:hover:bg-indigo-500 mx-4 mb-2 mt-2 flex h-12 w-12 items-center justify-center rounded-3xl bg-gray-400 text-gray-100 shadow-md transition-all duration-500 hover:rounded-lg hover:bg-gray-100 hover:text-gray-600 dark:bg-gray-700 dark:hover:bg-primary dark:hover:text-gray-100">
      <Icon />
      <span></span>
    </div>
  )
}

export default MenuIcon
