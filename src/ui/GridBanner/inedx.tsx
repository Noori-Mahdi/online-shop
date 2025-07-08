'use client'

import Button from '@/components/Button'
import Container from '@/components/Container'
import Image from 'next/image'

const GridBanner = () => {
  return (
    <div className="flex flex-col ">
      {/* ردیف اول - آیتم 1 */}
      <div className="flex items-end justify-between bg-gray-900 text-white">
        <Container removeSpaceY className={'pb-0 w-full pt-10'}>
          <div className="flex flex-col text-center sm:text-start sm:flex-row items-center sm:gap-0 gap-10 sm:items-end justify-between flex-wrap">
            <div className="sm:max-w-72 sm:w-1/2 w-full sm:order-1 mt-10">
              <div className=" text-lg sm:text-base font-black sm:mb-4 tracking-wide">
                Pro.Beyond.
              </div>
              <div className=" text-5xl sm:text-6xl font-extralight tracking-wide mb-4">
                IPhone 14 <span className="font-bold tracking-normal">Pro</span>
              </div>
              <div className="text-base sm:text-sm mb-4">
                Create to change everything for the better. For everyone
              </div>
              <Button
                label={'shop now'}
                type="button"
                className="capitalize border sm:w-full min-w-fit w-1/2 rounded-sm text-sm mb-3 px-3  hover:bg-white hover:text-gray-800 py-3 text-white "
                color="transparent"
              />
            </div>
            <Image
              alt="iPhone"
              src={'/banner/desktop/IphoneImage.png'}
              width={300}
              height={300}
              className="sm:w-60 lg:w-80 h-auto sm:order-2 hidden sm:block"
            />
            <Image
              alt="iPhone"
              src={'/banner/mobile/IphoneImage.png'}
              width={300}
              height={300}
              className=" sm:order-2 block sm:hidden"
            />
          </div>
        </Container>
      </div>

      {/* ردیف دوم */}

      <div className="flex flex-col md:flex-row w-full">
        {/* ستون چپ */}
        <div className="flex flex-col w-full grow">
          {/* آیتم 3 */}
          <div className="bg-white hover:bg-gray-400 text-black text-center sm:text-start flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-center py-4 sm:pt-4 sm:pb-0 cursor-pointer transition-colors duration-300 ease-in-out">
            <Image
              alt="Playstation"
              src={'/banner/desktop/PlayStation.png'}
              width={300}
              height={300}
              className="sm:w-48  lg:w-80 h-auto hidden sm:block"
            />
            <Image
              alt="iPhone"
              src={'/banner/mobile/PlayStation.png'}
              width={240}
              height={240}
              className="sm:order-2 block sm:hidden"
            />
            <div className="px-4">
              <div className=" text-xl xs:text-2xl sm:text-4xl font-semibold mb-3">
                Playstation 5
              </div>
              <div className="text-sm text-gray-600">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </div>
            </div>
          </div>

          {/* آیتم 4 و 5 */}
          <div className="flex flex-col md:flex-row w-full">
            <div className="cursor-poier items-center md:justify-center w-full md:w-1/2 cursor-pointer bg-gray-500 text-white hover:bg-gray-600 flex flex-col sm:flex-row gap-4 sm:gap-0 transition-colors duration-300 ease-in-out p-4  sm:p-0">
              <Image
                alt="headset"
                src={'/banner/desktop/headset.png'}
                width={80}
                height={80}
                className="w-16 h-auto hidden sm:block"
              />
              <Image
                alt="headset"
                src={'/banner/mobile/headset.png'}
                width={150}
                height={150}
                className="block sm:hidden"
              />
              <div className="p-0 sm:p-3 flex flex-col gap-2 sm:gap-0  text-center sm:text-start w-full">
                <div className="text-3xl font-light">
                  Apple <br className="sm:block hidden" />
                  AirPods <br className="sm:block hidden" />
                  <span className="font-bold">Max</span>
                </div>
                <div className="text-base font-light sm:font-normal">
                  Computational audio. Listen, it's powerful
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer 
               bg-gray-900 text-white 
               flex flex-col sm:flex-row items-center justify-between w-full md:w-1/2 gap-4
               hover:bg-gray-950
                transition-colors duration-300 ease-in-out p-4 sm:p-0 text-center sm:text-start"
            >
              <Image
                alt="vr"
                src={'/banner/desktop/vr.png'}
                width={150}
                height={150}
                className="w-28 h-auto hidden sm:block"
              />
              <Image
                alt="vr"
                src={'/banner/mobile/vr.png'}
                width={200}
                height={200}
                className="block sm:hidden scale-x-[-1]"
              />
              <div className="grow md:p-2 lg:p-3 p-3">
                <div className="text-3xl mb-3 md:mb-0 font-light">
                  Apple <br className="hidden sm:blokc" />
                  Vision <span className="font-bold">Pro</span>
                </div>
                <div className="text-base">
                  An immersive way to experience entertainment
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ستون راست - آیتم 2 */}
        <div className="bg-gray-500 text-white sm:py-0 sm:px-3 flex flex-col sm:flex-row items-center justify-between  w-full p-4 gap-2  text-center sm:text-start">
          <div className="capitalize grow tracking-wide  sm:w-1/2 order-2 sm:oredr-1">
            <div className="text-4xl sm:text-5xl font-extralight">
              gaming <br className="hidden sm:block" />
              <span className="font-bold uppercase">pc</span>
            </div>

            <div className="my-3 text-sm sm:text-sm md:text:base">
              The new Gaming Beast PC brings your worlds to life with powerful
              graphics and lightning-fast performance.
            </div>
            <Button
              label={'shop now'}
              type="button"
              className="capitalize border sm:w-full min-w-fit w-1/2 rounded-sm text-sm mb-3 px-3  hover:bg-white hover:text-gray-800 py-3 text-white "
              color="transparent"
            />
          </div>
          <Image
            alt="pc"
            src={'/banner/desktop/pc.png'}
            width={300}
            height={300}
            className="w-36 sm:w-48  lg:w-80 h-auto block order-1 sm:oredr-2"
          />
          {/* <Image
            alt="pc"
            src={'/banner/mobile/pc.png'}
            width={300}
            height={300}
            className="w-36 sm:w-48  lg:w-80 h-auto block sm:hidden"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default GridBanner
