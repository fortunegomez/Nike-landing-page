const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg max-sm:text-[12px] leading-none rounded-full cursor-pointer
    ${
      backgroundColor 
      ? `${backgroundColor} ${textColor} ${borderColor}` :"bg-coral-red  text-white border-coral-red"} 
      ${fullWidth && "w-full"}`}
       >
        {label} 
        {iconURL && <img src={iconURL} alt="arrowRight" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button
