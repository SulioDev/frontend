import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="min-h-screen h-screen bg-white text-black flex flex-col justify-center items-center">
      <div className="h-[20%] md:h-1/3 w-full flex justify-center items-center">
        <div className="h-full w-1/4 hidden md:block">
          <Image
            src="/media/1.png"
            alt="Description of the image"
            height={800}
            width={800}
            className="h-full w-full rounded-r-xl"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center h-full w-full">
          <Image
            src="/media/2.png"
            alt="Description of the image rounded-xl"
            height={800}
            width={800}
            className="h-[85%] w-[95%]"
            objectFit="contain"
          />
        </div>
        <div className="h-full w-1/4 hidden md:block">
          <Image
            src="/media/3.png"
            alt="Description of the image"
            height={800}
            width={800}
            className="h-full w-full rounded-l-xl"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="h-[40%] md:h-1/3 w-full flex justify-center items-center">
        <div className="md:w-3/4 bg-white text-black grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 justify-between">
          <div className="border-none text-center">
            <div className="text-4xl md:text-6xl font-bold">1M+</div>
            <div className="text-md text-center px-4 md:text-lg text-black text-wrap leading-tight">
              Personalized messages sent to art buyers and fans.
            </div>
          </div>
          <div className="border-none text-center">
            <div className="text-4xl md:text-6xl font-bold">85%</div>
            <div className="text-md text-center px-4 md:text-lg text-black text-wrap leading-tight">
              Personalized messages sent to art buyers and fans.
            </div>
          </div>
          <div className="border-none text-center">
            <div className="text-4xl md:text-6xl font-bold">70%</div>
            <div className="text-md text-center px-4 md:text-lg text-black text-wrap leading-tight">
              Of users say Sulio AI helped them reduce admin time by atleast a
              quarter.
            </div>
          </div>
          <div className="border-none text-center">
            <div className="text-4xl md:text-6xl font-bold">50+</div>
            <div className="text-md text-center px-4 md:text-lg text-black text-wrap leading-tight">
              85% Personalized messages sent to art buyers and fans.
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40%] md:h-1/3 w-full flex justify-center items-center px-4 md:p-0">
        <div className="bg-black text-white flex flex-col justify-center items-center md:flex-row gap-4 p-4 rounded-3xl">
          <div className="w-full h-full flex flex-col justify-center items-center gap-2">
            <div className="text-center text-2xl md:text-3xl font-bold">
              Ready to get started?
            </div>
            <div className="text-wrap text-center text-lg md:text-xl">
              Start today and see upto 40% time-saving in the first month!
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center border-none gap-2">
            <div className="">
              <div className="btn btn-wide bg-[#ffc610] rounded-full text-black text-xl md:text-2xl hover:bg-white">
                Try For Free
              </div>
            </div>
            <div className="text-center w-full text-md md:text-lg">
              30 Days Free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
