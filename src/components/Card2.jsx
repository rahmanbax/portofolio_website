import React from 'react'

const Card2 = ({title, img}) => {
  return (
    <div className="flex flex-col items-center w-[325.33px] h-[182px] gap-4 bg-[#DADDAC] p-6 rounded-3xl overflow-hidden">
      <img src={img} alt="website"/>
      <h4 className="font-bold text-[31px]">{title}</h4>
    </div>
  )
}

export default Card2