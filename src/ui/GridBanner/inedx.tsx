import Container from '@/components/Container'
import Image from 'next/image'

const GridBanner = () => {
  return (
    <div className="grid grid-rows-2 w-full ">
      {/* ردیف اول - آیتم 1 */}
      <div className="flex items-end justify-between bg-gray-900 text-white">
        <Container removeSpaceY containerClassName={'pb-0 w-full'}>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-base font-black mb-4">Pro.Beyond.</div>
              <div className="text-7xl font-extralight tracking-wide mb-4">
                IPhone 14{' '}
                <span className="font-extrabold tracking-normal">Pro</span>
              </div>
              <div className="text-sm mb-4">
                Create to change everything for the batter. For everyone
              </div>
              <button
                className="capitalize border rounded-sm text-sm px-12 py-3 "
                // href={'#'}
              >
                shop now
              </button>
            </div>
            <Image
              alt="iPhone"
              src={'/image/IphoneImage.png'}
              width={300}
              height={300}
            />
          </div>
        </Container>
      </div>

      {/* ردیف دوم */}
      <div className="grid grid-cols-2 ">
        {/* ستون چپ */}
        <div className="grid grid-rows-2 ">
          {/* آیتم 3 */}
          <div className="bg-white text-black flex items-center justify-center">
            <Image
              alt="plastation"
              src={'/image/PlayStation.png'}
              width={300}
              height={300}
            />
            <div className="">
              <div className="text-4xl font-semibold mb-3">Playstation 5</div>
              <div className="text-sm text-gray-600 p-2">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </div>
            </div>
          </div>
          {/* بخش پایین ستون چپ → دو ستون برای آیتم 4 و 5 */}
          <div className="grid grid-cols-2">
            <div className="bg-gray-500 text-white flex items-center justify-center">
              <div>
                <Image
                  className=""
                  alt="headset"
                  src={'/image/headset.png'}
                  width={80}
                  height={80}
                />
              </div>
              <div className="px-6">
                <div className="text-3xl">
                  Apple <br />
                  AirPods
                  <br /> <span className="font-bold">Max</span>
                </div>
                <div>Computational audio. Listen, it's powerful</div>
              </div>
            </div>
            <div className="bg-gray-800 text-white flex gap-6 items-center justify-center">
              <div>
                <Image
                  className=""
                  alt="vr"
                  src={'/image/vr.png'}
                  width={200}
                  height={200}
                />
              </div>
              <div className=" pl-6">
                <div className="text-3xl">
                  Apple <br />
                  Vision <span className="font-bold">Pro</span>
                </div>
                <div>An immersive way to experience entertainment </div>
              </div>
            </div>
          </div>
        </div>

        {/* ستون راست - آیتم 2 */}
        <div className="bg-gray-500 text-white flex items-center justify-center">
          <div className="capitalize tracking-wide pl-10 w-1/2">
            <div className="text-5xl">gaming</div>
            <div className="text-5xl font-extrabold uppercase">pc</div>
            <div className="my-3 font-medium">
              The new Gaming Beast PC brings your worlds to life with powerful
              graphics and lightning-fast performance.
            </div>
            <button
              className="capitalize border rounded-sm text-sm px-12 py-3 "
              // href={'#'}
            >
              shop now
            </button>{' '}
          </div>
          <div className="">
            <Image
              className=""
              alt="pc"
              src={'/image/pc.png'}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default GridBanner
