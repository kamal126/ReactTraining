import React, {useId} from 'react'

const Button = ({
    childern,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props

}) => {
    const id = useId()
  return (
    <button 
        id={id}
        type={type}
        className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`}
        {...props}>{childern}
    </button>
  )
}

export default Button