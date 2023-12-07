import React from 'react'

function Team() {
  return (
    <>
    <div className="w-[1315px] h-[699px]">
      <div className="w-[652px] h-[699px]">
        <img
         src="../src/assets/numbers2.png"
         className="w-[620px] h-[667px] absolute left-[982.5px] top-[1469.5px] rounded-[20px] object-cover"
        />
        <svg
         width={284}
         height={289}
         viewBox="0 0 284 289"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className="absolute left-[1350.5px] top-[1879.5px]"
         preserveAspectRatio="xMidYMid meet"
        >
        <g style={{ mixBlendMode: "multiply" }}>
           <path
             d="M0 20C0 8.95431 8.95431 0 20 0H264C275.046 0 284 8.95431 284 20V269C284 280.046 275.046 289 264 289H20C8.9543 289 0 280.046 0 269V20Z"
             fill="#F58A07"
           />
        </g>
        </svg>
      </div>
      <div className="w-[585px] h-[376px]">
      <p className="w-[510px] absolute left-80 top-[1872px] text-lg font-medium text-left text-[#5b5b5b]">
        Our misson is to craft designs and software solutions that trancend borders, embodying the essence of diverse cultures while leaving a lasting impact that's 
        <br />universally recognized.
      </p>
      <p className="w-[585px] absolute left-80 top-[1616px] text-5xl font-semibold text-left text-[#0d1317]">
        We aspire to create a local identity that resonates in every corner of the world
      </p>
     </div>
    </div>;

    <div className="w-[1280px] h-[814px]">
       <div className="w-[290px] h-[521px]">
          <img
            src="../src/assets/team1.png"
            className="w-[290px] h-[521px] absolute left-[1309.5px] top-[2557.5px] rounded-[20px] object-cover"
          />
          <div className="w-[290px] h-[233px]">
           <svg
             width={290}
             height={233}
             viewBox="0 0 290 233"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             className="absolute left-[1309.5px] top-[2845.5px]"
             preserveAspectRatio="xMidYMid meet"
           >
           <g style={{ mixBlendMode: "multiply" }}>
              <path
                d="M0 20C0 8.9543 8.9543 0 20 0H270C281.046 0 290 8.95431 290 20V213C290 224.046 281.046 233 270 233H20C8.9543 233 0 224.046 0 213V20Z"
                fill="#252525"
              />
           </g>
           </svg>
           <p className="w-[232px] absolute left-[1341px] top-[2962px] text-sm text-left text-white">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.
           </p>
           <p className="w-[181px] h-[41px] absolute left-[1341px] top-[2915px] text-2xl font-semibold text-left text-white">
               Selby Stuart
           </p>
           <p className="w-[107px] h-5 absolute left-[1341px] top-[2889px] opacity-70 text-sm font-semibold text-left text-white">
               Support Assist
           </p>
       </div>
    </div>
      <img
        src="../src/assets/team2.png"
        className="w-[289px] h-[521px] absolute left-[980.5px] top-[2557.5px] rounded-[20px] object-none"
      />
      <img
        src="../src/assets/team3.png"
        className="w-[290px] h-[521px] absolute left-[649.5px] top-[2557.5px] rounded-[20px] object-none"
      />
      <img
        src="../src/assets/team4.png"
        className="w-[290px] h-[521px] absolute left-[319.5px] top-[2557.5px] rounded-[20px] object-none"
      />
      <p className="w-[721px] absolute left-80 top-[2404px] text-lg font-medium text-left text-[#5b5b5b]">
         At our core, collaboration isn't just a strategy; it's our way of achieving <br />
         excellence. Every project we undertake is a testament to the power of collective <br />
         effort, where diverse perspectives converge to produce exceptional results that <br />
         proprl both our team and our clients towards success.
      </p>
      <p className="w-[577px] absolute left-80 top-[2265px] text-5xl font-semibold text-left text-[#0d1317]">
         Collaboration defines our work ethos
      </p>
     </div>;
    </>
  )
}

export default Team