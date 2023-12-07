import React from 'react';
import gender from '../../../assets/gender.png'
const cardsData = [
  {
    title: 'Business strategy',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    imageSrc: gender,
  },
  {
    title: 'Business strategy',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    imageSrc: gender,
  },
  {
    title: 'Business strategy',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    imageSrc: gender,
  },
];

function Detail() {
  return (
    <div className="container mx-auto my-10">
      <div className='w-1/2'>
        <p className=" text-5xl font-semibold text-left text-[#1d3444]">
          We help more than 1500 companies from all sectors
        </p>
        <p className="  text-lg font-medium text-left text-[#5b5b5b]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit,
          hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
        </p>
      </div>


      <div className="grid grid-cols-3 mt-4  gap-4 ">
        {cardsData.map((card, index) => (
          <div key={index} className="flex-none">

            <img
              src={card.imageSrc}
              className=" h-[242px] rounded-[20px] object-cover"
            />
            <p className=" h-[30px] py-4  text-2xl font-medium text-left text-[#0d1317] bg-white ">
              {card.title}
            </p>
            <p className="  text-base font-medium text-left text-[#5b5b5b] mt-4 ">
              {card.detail}
            </p>
            <div className=" h-[17px] mt-4 item-start text-left ">
              <p className=" font-medium text-[#f58a07]">
                Learn More
              </p>
              <svg
                width={22}
                height={10}
                viewBox="0 0 22 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6338 0.198869L21.8079 4.51989C22.064 4.78505 22.064 5.21495 21.8079 5.48011L17.6338 9.80113C17.3776 10.0663 16.9623 10.0663 16.7062 9.80113C16.45 9.53597 16.45 9.10606 16.7062 8.8409L19.7606 5.67898L0 5.67898L0 4.32102L19.7606 4.32102L16.7062 1.1591C16.45 0.893936 16.45 0.464029 16.7062 0.198869C16.9623 -0.0662898 17.3776 -0.0662898 17.6338 0.198869Z"
                  fill="#F58A07"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;
