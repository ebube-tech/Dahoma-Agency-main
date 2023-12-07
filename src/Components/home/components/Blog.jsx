import React from 'react';
import wand from "../../../assets/wand.svg"
import pyramid from "../../../assets/pyramid.svg"
import love from "../../../assets/love.svg"

function Blog() {
  const cardsData = [
    {
      title: 'Business strategy',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
      imageSrc: pyramid,
    },
    {
      title: 'Business strategy',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
      imageSrc: wand,
    },
    {
      title: 'Business strategy',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
      imageSrc: love,
    },
  ];

  return (
    <div className='bg-[#EDF7FF] '>
      <div className='container mx-auto'>
        <div className='grid gap-2 py-10  grid-cols-2 '>
          <p className='text-left font-semibold text-[#0d1317] text-4xl'>We are building a software solution that solves your business challenges</p>
          <p className='text-left text-[#1d3444] text-lg font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <div key={index} className="bg-white my-10 p-10  text-left  gap-4 rounded-[20px]">
              <img src={card.imageSrc} className="w-[33px] mb-4 h-[34px] object-cover" />
              <p className="text-lg my-2 font-semibold">{card.title}</p>
              <p className="text-gray-700">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
