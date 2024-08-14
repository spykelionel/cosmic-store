import React from 'react'

function Button(props) {


const {variant, text, width, icon, href, funct }=props;

const buttonClasses=`
 ${variant === 'primary' ? 'bg-secondary2 font-bold  text-white py-2 px-4 flex flex-row justify-center items-center gap-4 rounded-lg hover:bg-black hover:text-secondary2' :'bg-none font-normal text-black border border-black py-2 px-4 flex flex-row justify-center items-center gap-4 rounded-lg hover:bg-secondary2 hover:text-white' }
 ${width === 'fit' ? 'w-fit' : width === 'full' ? 'w-full' : ''}
`
return(
    <>
    <button className={buttonClasses}
    onClick={funct}
    href={href}
    >
        {icon}
        <p>{text}</p>
    </button>
    </>
)
}

export default Button