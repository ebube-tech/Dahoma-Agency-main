import React from 'react'
import { useRef } from 'react';
import emailJs from '@emailjs/browser';
import { useState } from 'react';


function entry() {
{/*  Sending and receiving of the emails */}
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs.sendForm('service_te73hm9', 'template_qa513lf', form.current, 'aZi_z7PrKYnG6Poqy')
      .then((result) => {
        console.log(result.text);
      }, (err) => {
        console.log(err.text);
      });
  };


  return (
    <>

      {/* The introduction part */}
      <div className="w-[1165px] h-[182px]">
       <div className="w-[505px] h-[110px]">
        <div className="w-[159px] h-[110px]">
          <p className="absolute left-[1326px] top-[196px] text-2xl font-medium text-left text-[#0d1317]">
            Contact Us
          </p>
          <p className="absolute left-[1326px] top-[242px] text-lg font-medium text-left text-[#5b5b5b]">
            020 7993 2905
          </p>
          <p className="absolute left-[1326px] top-[276px] text-lg font-medium text-left text-[#5b5b5b]">
            hi@finsweet.com
          </p>
        </div>
        <div className="w-[270px] h-[106px]">
          <p className="absolute left-[980px] top-[196px] text-2xl font-medium text-left text-[#0d1317]">
            Location
          </p>
          <p className="absolute left-[980px] top-[242px] text-lg font-medium text-left text-[#5b5b5b]">
            <span className="text-lg font-medium text-left text-[#5b5b5b]">
               DLF Cybercity, Bhubaneswar,
            </span>
            <br />
            <span className="text-lg font-medium text-left text-[#5b5b5b]">India, &amp;52050</span>
          </p>
        </div>
       </div>
         <p className="absolute left-[321px] top-[328px] text-lg font-medium text-left text-[#5b5b5b]">
           Fill up the Form and our team will get back to within 24 hrs
         </p>
         <p className="w-[561px] absolute left-80 top-44 text-5xl font-semibold text-left text-[#1d3444]">
            Have a question ? Let’s get in touch with us.
         </p>
      </div>;

      {/* The Form */}

      <div className="w-[1280px] h-[456px]">
        <div className="w-[620px] h-[370px]">
          <div className="w-[620px] h-[370px] absolute left-[979.5px] top-[421.5px] rounded-[20px] bg-[#c4c4c4]" />
            <img
              src="../src/assets/contact.png"
              className="w-[620px] h-[370px] absolute left-[979.5px] top-[421.5px] object-cover rounded-[20px] bg-[#c4c4c4]"
            />
          </div>
          <div className="w-[605px] h-[456px]">
            <form ref={form} onSubmit={sendEmail}>
             <div className="w-[119px] h-[54px]">
               <div className="w-[119px] h-[54px] absolute left-[319.5px] top-[823.5px] rounded-[31px] bg-[#f58a07]" />
                  <input 
                     className="absolute left-[352px] top-[842px] text-base font-semibold text-left capitalize text-white"
                     type="submit" value="Submit"
                  />
               </div>
               <div className="w-[605px] h-40">
                 <div className="w-[605px] h-40 absolute left-[319.5px] top-[631.5px] rounded-[27px] bg-[#d2daed]/[0.17]" />
                    <textarea 
                         className="absolute left-[352px] top-[664px] text-base font-medium text-left text-[#9c9c9c]"
                         name="message"
                         placeholder='Type message'
                    />
                 </div>
                 <div className="w-[605px] h-[54px]">
                   <div className="w-[605px] h-[54px] absolute left-[319.5px] top-[561.5px] rounded-[27px] bg-[#d2daed]/[0.17]" />
                      <input 
                          className="absolute left-[352px] top-[579px] text-base font-medium text-left text-[#9c9c9c]"
                          type='email'
                          name="email"
                          placeholder='Email address'
                      />
                   </div>
                   <div className="w-[605px] h-[54px]">
                     <div className="w-[605px] h-[54px] absolute left-[319.5px] top-[491.5px] rounded-[27px] bg-[#d2daed]/[0.17]" />
                       <input 
                           className="absolute left-[352px] top-[509px] text-base font-medium text-left text-[#9c9c9c]"
                           type="Last name"
                           name="Last"
                           placeholder='Last Name'
                          
                       />
                     </div>
                     <div className="w-[605px] h-[54px]">
                       <div className="w-[605px] h-[54px] absolute left-[319.5px] top-[421.5px] rounded-[27px] bg-[#d2daed]/[0.17]" />
                         <input 
                            className="absolute left-[352px] top-[439px] text-base font-medium text-left text-[#9c9c9c]"
                            type='First Name'
                            name='First'
                            placeholder='First Name'
                          />
                            
                         
                       </div>
             </form>
           </div>
        </div>;

               {/* The Footer */}

                <footer className="absolute w-[1920px] h-[463px] top-[1005.5px] left-0 bg-transparent">
                    <div className="relative w-[1920px] h-[463px]">
                        <div className="absolute w-[1920px] h-[463px] top-0 left-0 bg-[#063155]">
                            <div className="w-[1282px] top-[359px] left-[320px] absolute h-[24px]">
                                <div className="w-[302px] top-0 left-[982px] absolute h-[24px]">
                                    <div className="absolute top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                        Privacy Policy
                                    </div>
                                    <div className="absolute top-0 left-[142px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                        Terms &amp; Conditions
                                    </div>
                                </div>
                                <p className="absolute top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                    © All rights reserved – Finsweet
                                </p>
                            </div>
                            <div className="h-[287px] top-[38px] left-[1867px] bg-[#f58a07] rounded-[20px_0px_0px_20px] absolute w-[53px]" />
                            <img className="h-[144px] top-[319px] left-0 absolute w-[53px]" alt="Shape left" src="../src/assets/Shape Left.svg" />
                        </div>
                        <div className="absolute w-[1280px] h-[199px] top-[80px] left-[320px]">
                            <div className="absolute w-[344px] h-[175px] top-0 left-[938px]">
                                <button className="absolute w-[158px] h-[54px] top-[121px] left-0 all-[unset] box-border">
                                    <div className="relative w-[156px] h-[54px] bg-[#f58a07] rounded-[31px]">
                                        <div className="absolute top-[17px] left-[32px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[19.2px] whitespace-nowrap">
                                            Subscribe
                                        </div>
                                    </div>
                                </button>
                                <div className="absolute w-[344px] h-[54px] top-[51px] left-0">
                                    <input
                                        className="relative w-[342px] h-[54px] bg-white rounded-[31px] border-[none] [font-family:'Inter-Medium',Helvetica] font-medium text-[#9c9c9c] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap p-0 pl-[32px]"
                                        placeholder="Type email here"
                                        type="email"
                                    />
                                </div>
                                <div className="absolute top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal]">
                                    Join Newsletter
                                </div>
                            </div>
                            <div className="w-[148px] h-[117px] left-[659px] absolute top-0">
                                <div className="absolute top-[93px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                    +(123) 456-7890
                                </div>
                                <div className="absolute top-[53px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                    hi@finsweet.com
                                </div>
                                <div className="left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal] absolute top-0">
                                    Connect
                                </div>
                            </div>
                            <div className="w-[102px] h-[195px] left-[461px] absolute top-0">
                                <div className="absolute top-[171px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                    Blog
                                </div>
                                <div className="absolute top-[131px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                    Services
                                </div>
                                <div className="absolute top-[91px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                    Careers
                                </div>
                                <div className="absolute top-[51px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                    About Us
                                </div>
                                <div className="left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal] absolute top-0">
                                    Company
                                </div>
                            </div>
                            <div className="absolute w-[353px] h-[199px] top-0 left-0">
                                <div className="w-[136px] top-[179px] left-0 absolute h-[20px]">
                                    <img
                                        className="w-[21px] top-0 left-[115px] absolute h-[20px]"
                                        alt="Social icon twitter"
                                        src="../src/assets/twitter.svg"
                                    />
                                    <img
                                        className="w-[21px] top-0 left-0 absolute h-[20px]"
                                        alt="Social icon facebook"
                                        src="../src/assets/facebook.svg"
                                    />
                                    <img className="w-[21px] top-0 left-[76px] absolute h-[20px]" alt="Social icon" src="../src/assets/instagram.svg" />
                                    <div className="w-[21px] top-0 left-[38px] absolute h-[20px]">
                                        <img className="absolute w-[20px] h-[13px] top-[3px] left-px" alt="Subtract" src="../src/assets/youtube.svg" />
                                    </div>
                                </div>
                                <div className="absolute w-[351px] top-[59px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[36px] tracking-[-1.08px] leading-[44px]">
                                    Bespoke software solutions
                                </div>
                                <img className="w-[120px] h-[27px] top-0 absolute left-0" alt="Logo" src="../src/assets/Logo.svg" />
                            </div>
                        </div>
                    </div>
                </footer>
    
    </>
  )
}

export default entry