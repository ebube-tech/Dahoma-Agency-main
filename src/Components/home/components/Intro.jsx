import React from 'react'
import Image from '../../../assets/Image.png'
const Intro = () => {
  return (
    <>
    <div className='bg-[#dceaf5]'>
      <div className="container h-[703px] justify-center mx-auto  " >
        <div className='pt-[200px] w-1/2 '>
        <p className=" text-[64px] font-semibold text-[#1d3444] font-semibold text-left">
          Prosper with our bespoke solutions
        </p>
        <p className=" text-lg  font-medium text-left text-[#5b5b5b]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
          tristique
        </p>
          
          <div className=" h-[54px] w-1/3 mt-4 rounded-[27px] bg-[#f58a07]" >
          <p className=" font-semibold pt-4 capitalize text-white">
            See our services
          </p>
          
          </div>
          <p className='text-lg mt-4 text-left text-[#394149]/50'>worked with 100+ companies</p>
        </div>
        <div className="w-[934px] h-[645px] ">
          <svg
            width={155}
            height={241}
            viewBox="0 0 155 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[1200.5px] top-[450px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <g style={{ mixBlendMode: "multiply" }}>
              <path
                d="M0 24C0 10.7452 10.7452 0 24 0H131C144.255 0 155 10.7452 155 24V241H0V24Z"
                fill="#F58A07"
              />
            </g>
          </svg>
          <div className="">
            <div className=" h-[645px] left-[864.5px] top-[50.5px] pt-20" />
            <img
              src={Image}
              className="w-[905px] h-[618px] absolute left-[650.5px] top-[86.5px] object-none"
            />
          </div>
          <svg
            width={181}
            height={370}
            viewBox="0 0 181 370"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[830.5px] top-[335px] opacity-75"
            preserveAspectRatio="xMidYMid meet"
          >
            <g style={{ mixBlendMode: "multiply" }} opacity="0.75">
              <path
                d="M0 24C0 10.7452 10.7452 0 24 0H157C170.255 0 181 10.7452 181 24V370H0V24Z"
                fill="#F58A07"
              />
            </g>
          </svg>
        </div>
      </div>
</div>
    </>
  )
}

export default Intro