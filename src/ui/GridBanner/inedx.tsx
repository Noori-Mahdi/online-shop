'use client'

import Button from '@/components/Button'
import Container from '@/components/Container'
import Image from 'next/image'

const GridBanner = () => {
  return (
    <div className="flex flex-col ">
      {/* ردیف اول - آیتم 1 */}
      <div className="flex items-end justify-between bg-gray-900 text-white pt-6  lg:pt-4">
        <Container removeSpaceY containerClassName={'pb-0 w-full'}>
          <div className="flex items-end justify-between flex-wrap">
            <div className="max-w-72 sm:w-1/2 w-full sm:order-1 mt-10">
              <div className=" text-xs sm:text-base font-black sm:mb-4 tracking-wide">
                Pro.Beyond.
              </div>
              <div className=" text-3xl sm:text-6xl font-extralight tracking-wide mb-4">
                IPhone 14 <span className="font-bold tracking-normal">Pro</span>
              </div>
              <div className="text-xs sm:text-sm mb-4">
                Create to change everything for the better. For everyone
              </div>
              <Button
                label={'shop now'}
                type="button"
                className="capitalize border rounded-sm text-sm  hover:bg-white hover:text-gray-800 py-3 text-white "
                color="transparent"
              />
            </div>
            <Image
              alt="iPhone"
              src={'/image/IphoneImage.png'}
              width={300}
              height={300}
              className="w-40 sm:w-60 lg:w-80 h-auto sm:order-2"
            />
          </div>
        </Container>
      </div>

      {/* ردیف دوم */}

      <div className="flex flex-col md:flex-row w-full">
        {/* ستون چپ */}
        <div className="flex flex-col w-full grow">
          {/* آیتم 3 */}
          <div className="bg-white hover:bg-gray-400 text-black flex items-center justify-center pt-4 cursor-pointer transition-colors duration-300 ease-in-out">
            <Image
              alt="Playstation"
              src={'/image/PlayStation.png'}
              width={300}
              height={300}
              className="w-40 sm:w-48  lg:w-80 h-auto "
            />
            <div className="px-4">
              <div className=" text-xl xs:text-2xl sm:text-4xl font-semibold mb-3">
                Playstation 5
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </div>
            </div>
          </div>

          {/* آیتم 4 و 5 */}
          <div className="flex flex-col md:flex-row w-full">
            <div className="cursor-poier items-center md:justify-center w-full md:w-1/2 cursor-pointer bg-gray-500 text-white hover:bg-gray-600 flex transition-colors duration-300 ease-in-out">
              <Image
                alt="headset"
                src={'/image/headset.png'}
                width={80}
                height={80}
                className="w-16 h-auto "
              />
              <div className="p-3">
                <div className="text-3xl">
                  Apple <br />
                  AirPods <br />
                  <span className="font-bold">Max</span>
                </div>
                <div>Computational audio. Listen, it's powerful</div>
              </div>
            </div>
            <div
              className="cursor-pointer 
               bg-gray-900 text-white 
               lg:flex md:block items-center justify-between w-full md:w-1/2 gap-4
               hover:bg-gray-950
                transition-colors duration-300 ease-in-out flex"
            >
              <Image
                alt="vr"
                src={'/image/vr.png'}
                width={150}
                height={150}
                className="w-28 h-auto "
              />
              <div className="grow md:p-2 lg:p-3 p-3">
                <div className="text-3xl mb-3 md:mb-0">
                  Apple <br />
                  Vision <span className="font-bold">Pro</span>
                </div>
                <div className="text-sm sm:text-base">
                  An immersive way to experience entertainment
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ستون راست - آیتم 2 */}
        <div className="bg-gray-500 text-white sm:px-3 flex items-center justify-between sm:ustify-center w-full ">
          <div className="capitalize tracking-wide  w-1/2 ">
            <div className="text-5xl font-extralight">gaming</div>
            <div className="text-5xl font-bold uppercase">pc</div>
            <div className="my-3 text-sm sm:text-sm md:text:base">
              The new Gaming Beast PC brings your worlds to life with powerful
              graphics and lightning-fast performance.
            </div>
            <Button
              label={'shop now'}
              type="button"
              className="capitalize border rounded-sm text-sm hover:border-transparent  hover:bg-white hover:text-gray-800 py-3 text-white "
              color="transparent"
            />
          </div>
          <Image
            alt="pc"
            src={'/image/pc.png'}
            width={300}
            height={300}
            className="w-36 sm:w-48  lg:w-80 h-auto "
          />
        </div>
      </div>
    </div>
  )
}

export default GridBanner
