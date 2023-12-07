import React from 'react';
import girl from "../../../assets/girl.png";

function Start() {
  const startDetails = [
    {
      number: '15+',
      title: 'Industries served',
      detail: ' Our diverse expertise spans industries like Healthcare, Finance, E-commerce, E-learning, and more.',
    },
    {
      number: '500+',
      title: 'Clients served',
      detail: 'We’ve honed our expertise across diverse industries, delivering tailored solutions and exceeding expectations.',
    }
  ];

  return (
    <div className='container py-10 grid grid-cols-2 gap-4 mx-auto'>
      <div className='my-auto'>
        <div>
          <p className='text-5xl font-semibold text-left text-[#0d1317]'>The energy of a start-up combined with 30 years of experience.</p>
          <p className='text-lg font-medium text-left text-[#5b5b5b]'>Infusing the vibrant energy of a start-up with three decades of seasoned expertise, we embody a
            unique blend that fuels innovation, agility, and reliability.</p>
        </div>

        <div className='grid grid-cols-2 mt-[50px]'> 
          {startDetails.map((detail, index) => (
            <div key={index} >
              <p className="text-4xl font-bold text-left text-[#f58a07]">
              {detail.number}
              </p>
              <p className="text-2xl font-semibold text-left text-[#0d1317]">
                {detail.title}
              </p>
              <p className=" font-medium text-left text-[#5b5b5b]">
              {detail.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <img className='h-[667px]' src={girl} alt="Girl" />
      </div>
    </div>
  );
}

export default Start;
