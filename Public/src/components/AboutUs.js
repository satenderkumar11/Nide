import React from 'react'
import LandingVideo from './LandingVideo';
import { TbTargetArrow } from "react-icons/tb";
import { FaEye, FaRegLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <LandingVideo />
      <div className="w-3/5 mx-auto p-6 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">NIDE India Pvt. Ltd.</h1>
        <p className="mb-2 text-neutral-500">
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

        <p className="text-neutral-500">
          It is our vision to provide customers with the optimized solutions for
          motor manufacturing by establishing production lines for Universal
          electric motors, Brushless motors, Traction electric motors, Starter
          motors, Alternators and Induction electric motors respectively.
        </p>
      </div>

      {/* Workplace culture */}
      <div className='w-3/5 mx-auto my-4 px-6'>
        <h4 className='font-bold text-xl my-4 text-center uppercase'>Core values</h4>
        <div className='grid grid-cols-3 text-neutral-50 gap-3'>
          <div className='bg-gradient-to-b from-blue-950 to-blue-800 rounded-lg flex flex-col items-center p-4'>
            <span className='text-4xl '><TbTargetArrow /></span>
            <h6 className='font-semibold'>MISSION</h6>
            <p className='text-sm text-blue-200 mt-2'>Transmit value, Realize dream, Take responsibility</p>
          </div>
          <div className='bg-gradient-to-b from-blue-950 to-blue-800 rounded-lg flex flex-col items-center p-4'>
            <span className='text-4xl'><FaEye /></span>
            <h6 className='font-semibold'>VISION</h6>
            <p className='text-sm text-blue-200 mt-2'>Provide customer with optimized solution to motor manufacturing</p>
          </div>
          <div className='bg-gradient-to-b from-blue-950 to-blue-800 rounded-lg flex flex-col items-center p-4'>
            <span className='text-4xl'><FaRegLightbulb /></span>
            <h6 className='font-semibold'>PHILOSOPHY</h6>
            <p className='text-sm text-blue-200 mt-2'>
              Serving, Professional, Prompt, Innovative
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default AboutUs