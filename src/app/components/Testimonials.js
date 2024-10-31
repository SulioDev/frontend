export default function Testimonials() {
  return (
    <div className="h-fit lg:h-screen bg-white text-black flex flex-col justify-evenly items-center pb-10 gap-8">
      {/* Image Section */}
      <div className="h-40 w-full flex justify-center items-center">
        <img src="/media/1.png" className="h-40 w-40 hidden md:block" alt="Description of the image" />
        <img src="/media/2.png" className="h-full w-full" alt="Description of the image rounded-xl" />
        <img src="/media/3.png" className="h-40 w-40 hidden md:block" alt="Description of the image" />
      </div>

      {/* Statistics Section */}
      <div className="h-fit w-full flex justify-center items-center px-4">
        <div className="md:w-3/4 bg-white text-black grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-4">
          {[
            {
              value: "1M+",
              description: "Personalized messages sent to art buyers and fans.",
            },
            {
              value: "85%",
              description: "Increase in engagement with personalized messages.",
            },
            {
              value: "70%",
              description:
                "Of users say Sulio AI helped reduce admin time by at least a quarter.",
            },
            {
              value: "50+",
              description: "New features added to enhance user experience.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold">{item.value}</div>
              <div className="text-md text-center px-4 md:text-lg leading-tight">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="h-fit w-full flex justify-center items-center px-4 md:p-0">
        <div className="bg-black text-white flex flex-col justify-center items-center md:flex-row gap-4 p-4 rounded-3xl">
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to get started?
            </h2>
            <p className="text-lg md:text-xl">
              Start today and see up to 40% time-saving in the first month!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button className="btn btn-wide bg-[#ffc610] rounded-full text-black text-xl md:text-2xl hover:bg-white transition duration-300 ease-in-out">
              Try For Free
            </button>
            <span className="text-md md:text-lg">30 Days Free</span>
          </div>
        </div>
      </div>
    </div>
  );
}
