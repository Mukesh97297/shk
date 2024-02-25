import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='relative'>
      <Image src="/images/Vector (2).png" width={1440} height={190} className='w-full translate-y-[1px]' alt="" />
      <div className='bg-[#0B1D26] pt-4  sm:pt-0 relative -mt-1'>
        <div className='container mx-auto max-w-[1200px] px-4 sm:px-0'>
          <div className='flex flex-col sm:flex-row items-center text-center justify-between'>
            <div className='flex items-center gap-5 mb-4 sm:mb-0'>
              <Link href="/" className='hover:scale-125 duration-150'>
                <Image src="/images/Vector (6).png" height={20} width={20} alt="" />
              </Link>
              <Link href="/" className='hover:scale-125 duration-150'>
                <Image src="/images/Vector (7).png" height={18} width={15} alt="" />
              </Link>
              <Link href="/" className='hover:scale-125 duration-150'>
                <Image src="/images/Vector (8).png" height={18} width={17} alt="" />
              </Link>
              <Link href="/" className='hover:scale-125 duration-150'>
                <Image src="/images/facebook.png" height={20} width={10} alt="" />
              </Link>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 text-[#FFFFFF]'>
              <Link href="/" className='opacity-70 duration-200 hover:opacity-100 text-base leading-[110%] font-ds mb-4 sm:mb-0'>How it works?</Link>
              <Link href="/" className='opacity-70 duration-200 hover:opacity-100 text-base leading-[110%] font-ds'>Privacy</Link>
            </div>
          </div>
          <p className='text-base leading-[110%] font-ds text-white text-center opacity-70 py-4'>© Eatsumn</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
