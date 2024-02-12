import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <figure className="w-full h-full">
        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </figure>
      <div className="w-3/5 mx-auto p-6 flex flex-col">
        <h1 className="text-4xl font-bold mb-4">NIDE India Pvt. Ltd.</h1>
        <p className='mb-2 text-neutral-500'>
          NIDE India Pvt. Ltd., provides state of the art equipment to
          manufacture motors commonly found in electric vehicles (EV), washing
          machines, air conditioners, pumps, coolers, alternators, fans,
          compressors, power tools, vacuum cleaners, mixers, toothbrushes,
          hairdryers, and shavers. Our machines can either be installed as
          standalone or as a part of an automated line to manufacture and
          assemble stators, armatures, rotors, and motors. To top it all, we
          offer technical prowess, consultancy, and project support services for
          turnkey operations. 
        </p>

        <p className='text-neutral-500'> 
          It is our vision to provide customers with the
          optimized solutions for motor manufacturing by establishing production
          lines for Universal electric motors, Brushless motors, Traction
          electric motors, Starter motors, Alternators and Induction electric
          motors respectively.
        </p>
      </div>
    </div>
  );
  }

export default AboutUs