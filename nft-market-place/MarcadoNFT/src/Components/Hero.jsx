import React from 'react'
import Identicon from 'react-identicons'

const Hero = () => {
  return (
    <div className='mx-4 flex flex-col md:flex-row justify-between items-center py-14 font-globalFont'>
      <div className='md:w-3/5 w-full'>
        <div>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-400'>Buy and Sell
            <br /><span>Degital Arts</span>
            <br /><span className='text-gradient'>NFTs</span>collections
          </h1>
          <div className="mt-4 ">
            <p className='text-gray-400 font-normal '>Mint and collect the hottest NFTS around</p>
            <p className='text-gray-400 font-normal'>Grow your sales faster with our community</p>
          </div>
          <div className=' flex gap-4 mt-6'>
            <button disabled className=' px-6 py-3 bg-white rounded-xl getstarted'>Get Started</button>
            <button className=' px-6 py-3  rounded-xl bg-inherit border-gray-300 border  text-gradient'>Create NFT's</button>
          </div>
          <div className='flex items-center justify-between w-3/4 mt-6'>
            <div className='text-gray-400'>
              <p className='font-bold'>200</p>
              <small className='text-gray-400 font-normal'>users</small>
            </div>
            <div className='text-gray-400'>
              <p className='font-bold'>257k</p>
              <small className='text-gray-400 font-normal'>Artworks</small>
            </div>
            <div className='text-gray-400'>
              <p className='font-bold'>152k</p>
              <small className='text-gray-400 font-normal'>artists</small>
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-2/5 w-full shadow-xl mt-10 md:mt-0 bg-white p-4 overflow-hidden rounded-xl'>
        <img className='h-[300px] w-full  mb-3 object-cover rounded-xl' src="http://tokenhype.io/wp-content/uploads/2022/03/Heade-Spaces.NFT_.jpg" alt="Hero-nft-profile" />
        <hr />
        <div className='mt-2 flex justify-between items-center text-gray-400 gap-4'>
          <div className='flex'>
            <Identicon
            className='h-10 w-10 object-contain rounded-full'
            string={'0x21...786a'}
            size={50}
            />
            <div className='ml-4 '>
              <p className='text-gray-400 font-semibold'>0x21...786a</p>
              <small className='text-gradient text-sm'>You</small>
            </div>
          </div>
          <div className=' font-semibold rounded-xl'>
            <h4 >Balance</h4>
            <p className='text-gradient'>0.007 ETH</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero