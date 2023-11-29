import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const Button = (props: Props) => {
  return (
    <button  {...props}    
        className="
        transition
        duration-20
        inline-block
        text-white
        font-semibold
        antialiased
        bg-gray-900
        hover:bg-gray-900/90
        px-5 py-3
        rounded-full
        focus:bg-gray-900
        focus:ring-4
        focus:ring-gray-400
        focus:ring-opacity-50
        text-center">
    </button>
  )
}

export default Button